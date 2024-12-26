import { doctors } from '@/app/schema/db'
import Image from 'next/image'
import Link from 'next/link'
import React, { SetStateAction } from 'react'
import Links from './Links'
import { FaAngleDown, FaRegCalendar } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { Button } from './ui/button'
import Department from './Department'
import MegaMenu from './MegaMenu'
import AnimationDiv from './AnimationDiv'
import { AnimatePresence } from 'framer-motion'
import LangageLocation from './LangageLocation'

export default function Commne({ className, show = false, active, setActive }: { active?: boolean, setActive?: React.Dispatch<SetStateAction<boolean>>, className?: string, show?: boolean }) {
    return (
        <div onClick={() => {
            setActive && setActive(false)
        }} className={`${className || ""} md:flex  fixed md:relative   md:bg-transparent top-0 right-0 md:w-auto md:h-auto bg1  w-full h-screen z-50 md:text-white text-black/80`}>
            {<AnimationDiv initial={{ x: active ? 100 : 0 }} transition={{ delay: .05, duration: .3 }} animate={{ x: 0 }} onClick={(e) => e.stopPropagation()} className={` sm:w-[40%] relative w-full    md:overflow-y-visible overflow-y-auto   h-screen   md:w-auto md:bg-transparent bg-white md:h-full`}>
                <div className='w-[90%] py-10 md:py-0 md:w-auto mx-auto z-10   flex flex-col md:font-normal md:text-base text-base  font-semibold md:flex-row gap-8  '>

                    {active && <AnimationDiv initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: .8, duration: .3 }} className='w-[40%] fixed top-2 right-0 z-50 h-20   pointer-events-none  hidden sm:block md:hidden'>
                        <div className='w-[50%] mr-auto h-full  bg-white'></div>
                    </AnimationDiv>}
                    {active && <AnimationDiv initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .4, duration: .3 }} className={` right-[40%] fixed top-5  hidden sm:block md:hidden`}>
                        <button onClick={() => {
                            setActive && setActive(false)

                        }} className={`p-1 pr-2 rounded-l-full clos text-white `} >
                            <IoMdClose className='w-6 h-6' />
                        </button>
                    </AnimationDiv>
                    }

                    <div className=' fixed top-5 left-5 z-50 flex justify-end sm:hidden'   >
                        <button onClick={() => {
                            setActive && setActive(false)
                        }} className='p-1 border rounded-full bg-danger text-white ' >
                            <IoMdClose className='w-6 h-6' />
                        </button>
                    </div>
                    <Links link='/'>
                        الرئيسية
                    </Links>
                    <Links link='/'>العروض</Links>
                    <Links link='/'>أطبائنا</Links>
                    <Department show={show} />
                    <Links link='/'>من نحن</Links>
                    <Links link='/'>احجز الأن</Links>
                    <Links link='/'>اتصل بنا</Links>
                    <MegaMenu show={show} />
                    <hr className='md:hidden' />
                    <LangageLocation className='md:hidden ' />
                </div>
            </AnimationDiv>}
        </div>
    )
}
