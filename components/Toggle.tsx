"use client"
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useAppContext } from '@/app/Context/AppContext'
import InputRadios from './InputRadios'
import Image from 'next/image'
import AnimationDiv from './AnimationDiv'
import { AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Button } from './ui/button'

function Toggle() {
    const { ShowSection, toggleDarkMode, changeLanguage } = useAppContext()
    let t = useTranslations("")
    const [selected, setSelected] = useState(t("locale"))
    t = useTranslations("langage")
    const pathname = usePathname()
    const router = useRouter()

    const handiling = (str: string) => {
        const current = (str == 'ar') ? 'en' : 'ar'
        router.replace(pathname.replace(current, str))
    }

    return (
        <AnimatePresence mode='wait'>
            {ShowSection && (
                <AnimationDiv
                    onClick={toggleDarkMode}
                    initial={{ opacity: 0 }}
                    transition={{ duration: .5 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed bg1 flex items-center justify-center w-screen h-screen top-0 left-0 z-[60]"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white w-96 p-6 duration rounded-lg shadow-lg relative"
                    >
                        <div className="flex justify-between mb-4">
                            <h2 className="text-lg font-medium">{t("title")}</h2>
                            <button
                                onClick={toggleDarkMode}
                                className="text-danger text-xl hover:text-gray-600"
                            >
                                <IoMdClose />
                            </button>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
                            <div className="flex justify-between">
                                <InputRadios
                                    checked={selected == "ar"}
                                    title="العربي"
                                    onChange={() => setSelected('ar')}
                                />
                                <div className="relative w-7 h-4">
                                    <Image fill src='/Images/lang1.webp' alt="" className="object-cover" />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <InputRadios
                                    checked={selected !== "ar"}
                                    title="English"
                                    onChange={() => setSelected("en")}
                                />
                                <div className="relative w-7 h-4">
                                    <Image fill alt=" " src="/Images/lang2.png" className="object-cover" />
                                </div>
                            </div>
                            <Button onClick={() => {
                                handiling(selected)
                                toggleDarkMode()
                            }}>
                                {t("done")}
                            </Button>
                        </form>
                    </div>
                </AnimationDiv>
            )}
        </AnimatePresence>
    )
}

export default Toggle
