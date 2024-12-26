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
import Commne from './Commne'
import { AnimatePresence } from 'framer-motion'
import AnimationDiv from './AnimationDiv'

const menuItems = [
    "قسم العيون",
    "قسم الجلدية",
    "الطب النفسي",
    "قسم الأنف والأذن",
    "قسم الباطنة",
];
export default function MibileNav({ className, active, setActive }: { setActive: React.Dispatch<SetStateAction<boolean>>, active: boolean, className?: string }) {
    return (
        <AnimatePresence mode='wait' >
            {active &&
                <AnimationDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='w-full relative z-50' >
                    <Commne active={active} setActive={setActive} show={false} className={`${className} w-full md:w-auto md:bg-transparent  `} />
                </AnimationDiv>
            }
        </AnimatePresence>
    )
}
