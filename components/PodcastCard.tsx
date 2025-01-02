"use client"
import React, { ReactNode, SetStateAction } from 'react';
import { IoClose } from "react-icons/io5";
import AnimationDiv from './AnimationDiv';
import { AnimatePresence } from 'framer-motion';

const PodcastCard = ({ video, setVideo, children }: { children: ReactNode, video: boolean, setVideo: React.Dispatch<SetStateAction<boolean>> }) => {
    return (
        <>
            <AnimatePresence mode='wait'>
                {video &&
                    <AnimationDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setVideo(false)} className="fixed  top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-40 rounded-lg  flex justify-center items-center ">
                        <div onClick={() => setVideo(false)} className='fixed cursor-pointer top-0 right-0 text-white bg-gray-900 p-2 text-2xl '>
                            <IoClose />
                        </div>
                        {children}
                     
                    </AnimationDiv>}
            </AnimatePresence>
        </>
    );
};

export default PodcastCard;
