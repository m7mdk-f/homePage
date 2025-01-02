import { AnimatePresence } from 'framer-motion'
import React, { ReactNode, useState } from 'react'
import { MdMinimize } from 'react-icons/md'

function ShowDiv({ children,title }: {title:string, children: ReactNode }) {
    const [show, setShow] = useState(true)
    return (
        <>
            <div className={` flex justify-between items-center`}>
                <h2 className="text-sm text-right mt-4 text-black">{title}</h2>
                <div className={` ${show ? "text-primary" : "text-gray-600"} relative text-center items-center flex  cursor-pointer `} onClick={() => setShow(!show)}>
                    <MdMinimize className=' text-2xl' />
                    <MdMinimize className={`${show ? "opacity-0" : "opacity-100"} duration-300 absolute top-2 left-2 rotate-90 text-2xl`} />
                </div>
            </div>
            <div className={`${show ? 'max-h-[100px]' : 'max-h-0'} mt-4 overflow-hidden duration-300`}>
                {children}
            </div>

        </>
    )
}

export default ShowDiv