"use client"
import React, { SetStateAction } from 'react';
import { IoClose } from "react-icons/io5";
import AnimationDiv from './AnimationDiv';
import { AnimatePresence } from 'framer-motion';

const PodcastCard = ({ video, setVideo }: { video: boolean, setVideo: React.Dispatch<SetStateAction<boolean>> }) => {
    return (
        <>
            <AnimatePresence mode='wait'>
                {video &&
                    <AnimationDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setVideo(false)} className="fixed  top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-40 rounded-lg  flex justify-center items-center ">
                        <div onClick={() => setVideo(false)} className='fixed cursor-pointer top-0 right-0 text-white bg-gray-900 p-2 text-2xl '>
                            <IoClose />
                        </div>
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
                    </AnimationDiv>}
            </AnimatePresence>
        </>
    );
};

export default PodcastCard;
