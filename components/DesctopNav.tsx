import React from 'react'
import { doctors } from '@/app/schema/db'
import Image from 'next/image'
import Link from 'next/link'
import Links from './Links'
import { FaAngleDown, FaRegCalendar } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { Button } from './ui/button'
import Department from './Department'
import MegaMenu from './MegaMenu'
import Commne from './Commne'

const menuItems = [
    "قسم العيون",
    "قسم الجلدية",
    "الطب النفسي",
    "قسم الأنف والأذن",
    "قسم الباطنة",
];
export default function DesctopNav({ className }: { className?: string }) {
    return (
        <Commne className={`${className} w-full`} show />
    )
}
