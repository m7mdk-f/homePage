import React from 'react'
import { Button } from './ui/button'
import { GrFormPrevious } from 'react-icons/gr'
import HeaderDiv from './HeaderDiv'
import ButtonHover from './ButtonHover'
import { useTranslations } from 'next-intl'

function ShowAll({ text }: { text: string }) {
    const t = useTranslations("home")
    return (
        <div className="flex sm:flex-nowrap flex-wrap text-center   justify-between ">
            <div className="">
                <HeaderDiv text={text} />
            </div>
            <div className="sm:block hidden">
                <ButtonHover text={t("viewAll")} style="outline" />
            </div>
        </div>
    )
}

export default ShowAll