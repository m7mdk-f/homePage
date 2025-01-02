import React, { useState } from 'react'
import { MdMinimize } from 'react-icons/md'

function ShowDetails({ title, desc }: { title: string, desc: string }) {
    const [show, setShow] = useState(false)
    return (
        <div onClick={() => setShow(!show)} className={`${show ? "rtl:border-r-[3px] ltr:border-l-[3px] rtl:border-r-primary ltr:border-l-primary bg-primary bg-opacity-5 " : "border-r-0 bg-white hover:bg-gray-100"}   duration-300 w-full cursor-pointer  px-5 flex flex-col border-b`}>
            <div className='flex justify-between my-5' >
                <h1 className='text-black/70'>{title}</h1>
                <div className={`${show ? "text-primary" : "text-black/70"} relative`}>
                    <MdMinimize className=' text-2xl' />
                    <MdMinimize className={`${show ? "opacity-0" : "opacity-100"} duration-300 absolute top-2 left-2 rotate-90 text-2xl`} />
                </div>
            </div>

            <div className={`${show ? "max-h-20" : " max-h-0"} overflow-hidden duration-300`}>
                <p className='text-gray-500 text-base mb-5'>{desc}</p>
            </div>

        </div>
    )
}

export default ShowDetails