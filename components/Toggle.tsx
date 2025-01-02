"use client"
import React, { ReactNode } from 'react'
import { IoMdClose } from 'react-icons/io'
import AnimationDiv from './AnimationDiv'
import { AnimatePresence } from 'framer-motion'


function Toggle({ children, toggleDarkMode, ShowSection, title, className }: { className?: string, title?: string, children: ReactNode, toggleDarkMode: () => void, ShowSection: boolean }) {
    return (
        <AnimatePresence mode='wait'>
            {ShowSection && (
                <AnimationDiv
                    onClick={toggleDarkMode}
                    initial={{ opacity: 0 }}
                    transition={{ duration: .5 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed bg1  flex items-center justify-center w-screen h-screen top-0 left-0 z-[60]"
                >
                    <AnimationDiv
                        initial={{ scale: 0 }}
                        transition={{ duration: .5 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className={`${className || ' w-96 p-6  '} rounded-lg shadow-lg relative bg-white`}
                    >
                        <div className="flex justify-between ">
                            <h2 className="text-lg font-medium">{title}</h2>
                            <button
                                onClick={toggleDarkMode}
                                className="text-danger text-xl hover:text-gray-600"
                            >
                                <IoMdClose />
                            </button>
                        </div>

                        {children}

                    </AnimationDiv>
                </AnimationDiv>
            )}
        </AnimatePresence>
    )
}

export default Toggle
