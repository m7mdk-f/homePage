import React, { ReactElement, ReactNode, useState } from 'react'
import { BiMessageAltDetail } from 'react-icons/bi'

export default function AddNotise({ text, icon, onClick }: { onClick: () => void, text: string, icon: ReactElement }) {
    const [show, setShow] = useState(false)
    return (
        <div className='w-full' onClick={() => {
            onClick()
            setShow(!show)
        }}>

            <div className='flex rounded-lg border w-full gap-1 text-gray-600 relative hover:bg-black/5 duration-300 cursor-pointer p-2.5 text-sm justify-center items-center'>
                {icon}
                <p className=''>{text}</p>
                <div className={`${show ? "scale-100" : "scale-0"} bg-primary duration-300 w-2 rounded-full absolute top-3.5 rtl:right-3.5 ltr:left-3.5 h-2`}></div>
            </div>
        </div>

    )
}
