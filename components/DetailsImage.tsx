import React from 'react'

function DetailsImage({ title, desc, Imagesrc }: { title: string, desc: string, Imagesrc: string }) {
    return (
        <div className='h-72 w-full flex justify-center md:bg-right-top bg-center relative items-center  bg-cover' style={{ backgroundImage: `url(${Imagesrc})` }}>
            <div className='w-full h-full bg2  absolute top-0 left-0'>

            </div>
            <div className='text-white text-center relative z-10 flex flex-col gap-3'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className='text-lg max-w-lg'>{desc}</p>
            </div>
        </div>
    )
}

export default DetailsImage