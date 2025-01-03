import { Doctor } from '@/app/schema/db'
import Image from 'next/image'
import React from 'react'
import { FaRegCalendar } from 'react-icons/fa'
import { Button } from './ui/button'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'

function DoctursUs({ doctors, titleStyle, className }: { doctors: Doctor, titleStyle?: string, className?: string }) {
  const t = useTranslations()
  return (
    <Link href={`/doctersDetails/${doctors.id}`}>
      <div className='relative group lg:h-[435px] h-96  rounded-xl overflow-hidden'>
        <Image fill src={doctors.image[0]} className='object-cover ' alt='c' />
        <div className='w-full h-full absolute top-0 left-0  bgradus duration-500 md:translate-y-16 translate-y-0 group-hover:translate-y-0 opacity-80  md:opacity-0 group-hover:opacity-80'></div>
        <div className='absolute md:translate-y-24 group-hover:translate-y-0 py-4 bottom-0 group-hover:bg-opacity-0 duration-500 text-center w-full md:bg-white    '>
          <div className={`${className} flex flex-col gap-4 w-[70%] mx-auto font-semibold  md:text-black text-white group-hover:text-white`}>
            <p className={`${titleStyle} text-xl duration-300`}>
              {doctors.Specialization}   {doctors.name}
            </p>
            <p className="">{doctors.department}</p>

            <Button variant='default' className='w-[90%] mx-auto mb-5  overflow-hidden  border border-primary hover:bg-dark font-bold'>
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