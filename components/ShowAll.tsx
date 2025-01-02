import React from 'react'
import HeaderDiv from './HeaderDiv'
import ButtonHover from './ButtonHover'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'

function ShowAll({ text, link }: { link?: string, text: string }) {
    const t = useTranslations("home")
    return (
        <div className="flex sm:flex-nowrap flex-wrap text-center   justify-between ">
            <div className="">
                <HeaderDiv text={text} />
            </div>
            <div className="sm:block hidden">
                <Link href={`${link || '/Douctors'}`}>

                    <ButtonHover text={t("viewAll")} style="outline" />
                </Link>
            </div>
        </div>
    )
}

export default ShowAll