import { Link } from '@/navigation'
import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import { LuUserRound } from 'react-icons/lu'

function DateComp({ date, className }: { date: string, className?: string }) {
    return (
        <div className={`${className || 'text-black/70'} flex flex-wrap mb-3 text-[15px]  items-center gap-3`}>
            <div className='flex items-center gap-1'>
                <CiCalendar />
                <p>{date.slice(10)}</p>
            </div>
            <Link href="/blog/Demo Store" className='flex gap-1 items-center hover:underline hover:text-black duration-300 '>
                <LuUserRound />
                <p>Demo Store</p>
            </Link>
        </div>
    )
}

export default DateComp