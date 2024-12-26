import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'
import { GrFormPrevious } from 'react-icons/gr'
import { Button } from './ui/button'

const FindMore = () => {
    return (
        <section style={{ backgroundImage: "url('/Images/background2.png')" }} className="bg-primary bg-cover bg-center py-24 mt-10">
            <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full lg:w-1/2 text-center lg:text-right text-white">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4">شهادات الاعتماد والخبرات</h2>
                    <p className="text-base lg:text-lg mb-6 text-gray-300">
                        نفخر بحصولنا على أبرز الشهادات والخبرات الطبية المتميزة
                    </p>
                    <Button variant='ghost' className='group' >
                        اكتشف المزيد <GrFormPrevious className="text-base -translate-x-1 duration-100 group-hover:-translate-x-2 " />
                    </Button>

                </div>

                <div className='md:w-1/2 h-52 w-full  relative'>
                    <Image className='md:object-cover object-contain' src={'/images/FindMoreSection.webp'} fill alt='img' />
                </div>
            </div>
        </section>
    )
}

export default FindMore