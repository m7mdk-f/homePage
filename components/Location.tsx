"use client"
import React, { useState } from 'react'
import Toggle from './Toggle'
import InputRadios from './InputRadios'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { useAppContext } from '@/app/Context/AppContext'
import { CiLocationOn } from 'react-icons/ci'

function Location() {
    const { ShowLocation, toggleLocation, selectedBranch, setBranch } = useAppContext()
    const [selectedInpu, setSelectedInpu] = useState("");

    let t = useTranslations()

    const [selected, setSelected] = useState(t("locale"))
    t = useTranslations("Locations")
    const pathname = usePathname()
    const router = useRouter()

    const handiling = () => {

        setBranch(selectedInpu)
    }
    return (
        <Toggle className='w-full max-w-3xl p-7' title="" toggleDarkMode={toggleLocation} ShowSection={ShowLocation}>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
                <div className='flex gap-2 items-center'>
                    <div className='border md:p-3 p-2   rounded-full'>
                        <CiLocationOn className='md:h-10 md:w-10 h-7 w-7 text-primary' />
                    </div>
                    <div className='text-black/50 md:text-lg text-sm'>
                        <h1>{t('chooseBranch')}</h1>
                        <h2>{t(selectedBranch)}</h2>
                    </div>
                </div>
                <h1 className='font-semibold mb-5 mt-3'>{t("chooseBranch")}</h1>
                <InputRadios
                    checked={selectedBranch === "MainBranch" || selectedBranch == undefined}
                    title={t("MainBranch")}
                    onChange={() => setSelectedInpu("MainBranch")}
                />
                <InputRadios
                    checked={selectedBranch === "MeccaBranch"}
                    title={t("MeccaBranch")}
                    onChange={() => setSelectedInpu("MeccaBranch")}
                />
                <InputRadios
                    checked={selectedBranch === "MadinahBranch"}
                    title={t("MadinahBranch")}
                    onChange={() => setSelectedInpu("MadinahBranch")}
                />
                <Button onClick={() => {
                    handiling()
                    toggleLocation()
                }}>
                    تاكيد
                </Button>
            </form>
        </Toggle>
    )
}

export default Location