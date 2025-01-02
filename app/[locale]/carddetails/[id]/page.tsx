"use client"
import { cardsData } from '@/app/schema/db';
import DateComp from '@/components/DateComp';
import SectionCard from '@/components/SectionCard';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'
import Comheader from '@/components/Comheader';

function page() {
    const { id } = useParams()
    const t = useTranslations();
    const locale = t("locale");
    if (!(id && !isNaN(Number(id.toString().trim())) && (locale === "ar" || locale === "en"))) {
        return
    }

    const item = cardsData[locale].find(item => item.id == Number(id))
    const allitem = cardsData[locale].filter(item => item.id !== Number(id))
    if (!item)
        return
    return (
        <Comheader currentPage='المدونة' option={item.title} linkOption='/blog'>
            <div className="flex flex-col md:flex-row gap-8  top-10 container py-8 ">
                <div className="lg:w-2/3 md:w-1/2 w-full md:sticky top-10 ">
                    <div className="border rounded-lg overflow-hidden shadow-sm">
                        <div className='w-[90%] mx-auto my-7'>
                            <h2 className="lg:text-3xl text-xl  font-semibold mb-2">{item.title}</h2>
                            <div className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                                <DateComp date={item.date} />
                            </div>
                            <div className='relative w-full h-80 rounded-lg overflow-hidden'>
                                <Image
                                    fill
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover"
                                />
                            </div>
                            <div className="">
                                <p className="text-gray-700 mt-10 text-sm line-clamp-2">{item.description}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="lg:w-1/3 md:w-1/2   md:h-[450px] overflow-hidden w-full md:sticky top-14  ">
                    <h3 className="text-lg font-semibold mb-4">مقالات ذات صلة</h3>
                    <div className="flex flex-col gap-4">
                        {allitem.slice(0, 3).map((article) => (
                            <SectionCard key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            </div>
        </Comheader>
    )
}

export default page