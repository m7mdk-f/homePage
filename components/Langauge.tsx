"use client"
import React, { useState } from 'react'
import Toggle from './Toggle'
import InputRadios from './InputRadios'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { useAppContext } from '@/app/Context/AppContext'

function Langauge() {
    const { ShowSection, toggleDarkMode } = useAppContext()

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
        <Toggle title={t("title")} toggleDarkMode={toggleDarkMode} ShowSection={ShowSection}>
            <form onSubmit={(e) => e.preventDefault()} className="flex mt-4 flex-col gap-3">
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
        </Toggle>
    )
}

export default Langauge