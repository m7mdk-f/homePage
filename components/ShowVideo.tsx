"use client"
import React, { useState } from 'react'
import PodcastCard from './PodcastCard'
import { BsFillPlayFill } from 'react-icons/bs'
import Image from 'next/image'

function ShowVideo() {
    const [video, setVideo] = useState(false)
    return (
        <div>
            <PodcastCard video={video} setVideo={setVideo} />
            <div className="container py-20 bg-primary bg-opacity-[.05] " >
                <div className="lg:w-[90%] w-[90%] mx-auto lg:flex-row  flex-col-reverse flex gap-20">
                    <div className="w-full  flex  items-center">
                        <div className="flex flex-col  gap-6 ">
                            <h1 className="lg:text-4xl  font-bold sm:text-3xl text-2xl lg:leading-relaxed   text-black ">عيادات د. موسى ماهر الطبية لزراعة وتجميل الأسنان</h1>
                            <p className="text-black/70 line-clamp-2 lg:w-[75%] md:text-xl text-sm sm:text-lg ">تمتع بالعديد من العروض المختلفة من مختبراتنا للتأكد من صحتك اليوم..</p>
                        </div>
                    </div>
                    <div className="relative w-full md:h-96 h-72">
                        <div className="flex justify-center absolute  z-20 items-center  w-full h-full">
                            <div onClick={() => setVideo(true)} className="rounded-full bg-primary cursor-pointer p-1 relative">
                                <BsFillPlayFill className="text-white rounded-full h-10 w-10 overflow-hidden" />
                            </div>
                        </div>
                        <Image fill alt="" src='/Images/4.webp' className="object-cover rounded-tr-2xl rounded-bl-2xl z-10" />
                        <div className=" bg-primary lg:w-[70%] w-[80%] rounded-xl md:h-[120%] h-[110%] absolute md:-top-9 -top-4 sm:-left-6 -left-3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowVideo