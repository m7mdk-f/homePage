"use client"
import React, { useState } from 'react'
import Links from './Links'
import { FaAngleDown } from 'react-icons/fa'
const menuItems = [
    "قسم العيون",
    "قسم الجلدية",
    "الطب النفسي",
    "قسم الأنف والأذن",
    "قسم الباطنة",
];
export default function Department({ show = false }: { show?: boolean }) {
    const [active, setActive] = useState(show)
    return (
        <div className='  group relative z-10'>
            <div className='flex justify-between md:block '>
                <Links link='/' className='group-hover:opacity-80 flex md:gap-1 justify-between '>
                    أقسامنا
                    <FaAngleDown className='mt-1 md:block hidden  md:text-white/70 text-black/50' />
                </Links>
                <FaAngleDown onClick={() => setActive(!active)} className='mt-1 md:hidden  md:text-white/70 text-black/50' />
            </div>
            <div className='pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 md:opacity-0   group-hover:translate-y-0 md:translate-y-10 duration-300 z-10  md:pt-6 md:w-48 w-full relative md:absolute md:top-5 md:-left-24  '>
                {
                    <ul className={`${active ? "max-h-screen" : "max-h-0"} md:overflow-visible overflow-hidden md:pt-3   mx-auto  duration-300  bg-white`}>
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={` ${index + 1 == menuItems.length ? "li items-center flex pb-4" : ""} pr-2   hover:text-gray-400 group relative duration-300 md:text-lg mr-2 text-sm px-2 cursor-pointer text-gray-700`}
                            >
                                {item}
                                {index + 1 == menuItems.length &&
                                    <FaAngleDown className='mt-1  mr-auto md:inline-block hidden text-black/70' />
                                }
                                {index + 1 !== menuItems.length ? <hr className='md:w-[80%] w-0 my-3' /> : <div className='my-3  next translate-x-20  opacity-0 duration-300  bg-white w-full text-gray-700 py-3 absolute flex flex-col gap-2 -top-5 right-[100%]'>
                                    <div className='w-[90%] mx-auto'>
                                        <p className='hover:text-gray-400'>قسم الأطفال</p>
                                        <hr className='md:w-[80%] w-0 my-3' />
                                        <p className='hover:text-gray-400'>قسم النساء والولادة</p>
                                    </div>

                                </div>}
                            </li>
                        ))}
                    </ul>}

            </div>
        </div>

    )
}
