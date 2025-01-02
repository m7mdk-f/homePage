import { cardsData } from '@/app/schema/db'
import { Link } from '@/navigation'
import Image from 'next/image'
import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import { LuUserRound } from 'react-icons/lu'

function SectionCard({ article }: { article: cardsData }) {
    return (
        <Link
            href={`/carddetails/${article.id}`}

            key={article.id}
            className="flex items-center gap-4 border rounded-lg p-4 hover:shadow-md transition"
        >
            <div className='relative h-20 w-24 rounded-md overflow-hidden'>
                <Image
                    fill
                    src={article.image}
                    alt={article.title}
                    className=" object-cover"
                />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex text-black/70 items-center gap-1'>
                    <CiCalendar />
                    <p>{article.date.slice(10)}</p>
                </div>
                <h4 className="text-sm font-semibold hover:underline duration-300 text-black/90 mb-1 line-clamp-2">{article.title}</h4>

            </div>
        </Link>
    )
}

export default SectionCard