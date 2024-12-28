import { Doctor } from '@/app/schema/db'
import Image from 'next/image'
import React from 'react'
import { FaRegCalendar } from 'react-icons/fa'
import { Button } from './ui/button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

function DoctursUs({ doctors }: { doctors: Doctor }) {
  const t = useTranslations()
  return (
    <Link href="/">
      <div className='relative group lg:h-[435px] h-96  rounded-xl overflow-hidden'>
        <Image fill src={doctors.image} className='object-cover ' alt='c' />
        <div className='w-full h-full absolute top-0 left-0  bgradus duration-500 md:translate-y-16 translate-y-0 group-hover:translate-y-0 opacity-80  md:opacity-0 group-hover:opacity-80'></div>
        <div className='absolute md:translate-y-24 group-hover:translate-y-0 py-4 bottom-0 group-hover:bg-opacity-0 duration-500 text-center w-full md:bg-white    '>
          <div className='flex   flex-col gap-4 w-[70%] mx-auto md:text-black text-white group-hover:text-white'>
            <p className="text-xl  font-semibold  duration-300   ">
              {doctors.Specialization}   {doctors.name}
            </p>
            <p className="">{doctors.department}</p>

            <Button variant='default' className='w-full mb-5  overflow-hidden  border border-primary hover:bg-dark font-bold'>
              <FaRegCalendar size={20} />
              {t("BookNow")}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default DoctursUs