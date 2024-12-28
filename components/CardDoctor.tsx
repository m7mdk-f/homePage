import { Doctor } from '@/app/schema/db'
import React from 'react'
import { Button } from './ui/button'
import { FaRegCalendar } from "react-icons/fa";
import Image from 'next/image';
import { GoTriangleLeft } from 'react-icons/go';
import Link from 'next/link';
import { CiHeart } from 'react-icons/ci';
import { useTranslations } from 'next-intl';


function CardDoctor({ doctors }: { doctors: Doctor }) {
    const t = useTranslations();
    return (
        <div>
            <div
                key={doctors.id}
                className="bg-white shadow-md w-full   rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
            >
                <Link href="/">
                    <div className="relative h-96">
                        <Image
                            fill
                            src={doctors.image}
                            alt={doctors.name}
                            className=" object-cover "
                        />
                        {doctors.badge && (
                            <div className='absolute top-2 rtl:right-2 ltr:left-2 '>
                                <span className={`${doctors.badge.includes('خصم') || doctors.badge.includes('Discount') ? "bg-danger" : "bg-primary"} relative  text-white text-xs font-bold px-2 py-1 rounded`}>
                                    {doctors.badge}
                                    <div className={`${doctors.badge.includes('خصم') || doctors.badge.includes('Discount') ? "text-danger" : "text-primary"} absolute  top-0 rtl:-left-4 ltr:-right-4 ltr:rotate-180 `}>
                                        <GoTriangleLeft className='w-6 h-6' />
                                    </div>
                                </span>
                            </div>
                        )}
                    </div>
                </Link>
                <div className="p-4 relative">
                    <Button size='icon' variant='secondary' className='absolute  -top-7 bg-white rtl:left-5 ltr:right-5'>
                        <CiHeart className='scale-150' />
                    </Button>
                    <Link href='/' className="text-xl line-clamp-1 font-semibold hover:text-primary duration-300   text-gray-800">
                        {doctors.Specialization}   {doctors.name}
                    </Link>
                    <div className='text-sm'>
                        <p className="text-gray-500">{doctors.department}</p>
                        <p className="text-gray-400">{doctors.department}...</p>
                    </div>
                    <p className={`${doctors.dicount && "text-red-400"} mt-4 text-xl font-semibold my-7 text-gray-800`}>
                        {doctors.price} ر.س
                        {doctors.dicount && <span className='text-base mr-2 text-gray-300 font-normal'  ><s>{doctors.dicount}ر.س</s></span>}
                    </p>
                    <Button variant='outline' className='w-full  font-bold'>
                        <FaRegCalendar size={20} />
                        {t("BookNow")}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CardDoctor