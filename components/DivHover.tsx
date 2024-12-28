import React from 'react'

function DivHover({ text }: { text: string }) {
    return (
        <>
            <div className='w-full h-full blur-sm absolute top-0 left-0  bgradus duration-500 md:translate-y-16 translate-y-6 group-hover:translate-y-0 opacity-50 group-hover:opacity-80'></div>
            <div className='absolute  group-hover:translate-y-0 py-4 bottom-0 group-hover:bg-opacity-0 duration-500 text-center w-full    '>
                <div className='flex  rtl:text-right ltr:text-left rtl:md:mr-10 ltr:md:ml-10 md:mb-10 rtl:mr-4 ltr:ml-4 mb-2 font-semibold  flex-col gap-4 text-white  '>
                    {text}
                </div>
            </div>
        </>
    )
}

export default DivHover