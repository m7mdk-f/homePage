"use client"
import { cardsData } from '@/app/schema/db'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import AnimationDiv from './AnimationDiv'
import SwiperType from 'swiper'
import { Link } from '@/navigation'
import { LuUserRound } from "react-icons/lu";
import { CiCalendar } from 'react-icons/ci'
import DateComp from './DateComp'
import { useTranslations } from 'next-intl'

function SliderCom() {
  const [swiper, setSwiper] = useState<SwiperType | null>()
  const [number, setNumber] = useState(0)
  const [numbers, setNumbers] = useState(0)
  const [state, setState] = useState(true)
  const t = useTranslations();
  const locale = t("locale");
  const str = locale == 'ar' ? 'ar' : 'en'

  useEffect(() => {
    console.log(number)
    setNumbers(number + 1)
    setState(number == numbers)
  }, [number])
  useEffect(() => {
    console.log(state)
  }, [state])
  return (
    <div className='w-full bg-black mx-auto  rounded-lg overflow-hidden'>
      <Swiper

        spaceBetween={50}
        slidesPerView={1}
        speed={700}
        dir={str}
        autoplay={{ delay: 10000 }}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        // onSwiper={(swiper: any) => setSwiper(swiper)}
        onSlideChange={(swiper: any) => setNumber(swiper.activeIndex)}
        className='w-full h-full'
      >

        {cardsData[str].map((card, i) => {
          return <SwiperSlide key={card.id} className="!h-[500px] flex justify-center w-full items-center relative">
            <div className='w-full h-full relative'>
              <Image alt='swiper img' className='object-cover' src={card.image} fill />
            </div>
            <div className='absolute bg-black/70  inset-0 text-white'>
              <AnimationDiv initial={{ x: -200, opacity: 0 }} transition={{ duration: .7 }} whileInView={{ x: 0, opacity: 1 }} className='lg:w-1/2 md:w-2/3 w-full lg:rtl:pr-10 px-5 lg:ltr:pl-10 flex flex-col gap-5 absolute bottom-[20%]'>
                <DateComp date={card.date} className='text-white' />
                <Link href='/' className='font-bold md:text-2xl text-xl'>{card.title}</Link>
                <p className='line-clamp-2 text-[13px]'>{card.description}</p>
              </AnimationDiv>
            </div>

          </SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}

export default SliderCom