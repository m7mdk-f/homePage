"use client"
import React, { useState } from 'react'
import PodcastCard from './PodcastCard'
import { BsFillPlayFill } from 'react-icons/bs'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

function ShowVideo() {
    const [video, setVideo] = useState(false)
    const t = useTranslations("showViedo")
    return (
        <div>
            <PodcastCard video={video} setVideo={setVideo} >
                <div className="h-[90%] lg:w-[75%] md:w-[85%] w-[90%] mx-auto" onClick={(e) => e.stopPropagation()} >
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/ac4ivVsFlzk"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </PodcastCard>
            <div className="container py-20 bg-primary bg-opacity-[.05] " >
                <div className="lg:w-[90%] w-[90%] mx-auto lg:flex-row  flex-col-reverse flex gap-20">
                    <div className="w-full  flex  items-center">
                        <div className="flex flex-col  rtl:gap-6 gap-3 ">
                            <h1 className="rtl:lg:text-4xl   font-bold sm:text-3xl text-2xl lg:leading-relaxed   text-black ">{t("title")}</h1>
                            <p className="text-black/70 line-clamp-2 lg:w-[75%] rtl:md:text-xl  ltr:sm:text-base text-sm rtl:sm:text-lg ">{t("description")}</p>
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