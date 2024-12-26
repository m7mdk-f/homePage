import React from 'react'
import { Button } from './ui/button'
import { GrFormPrevious } from 'react-icons/gr'
import HeaderDiv from './HeaderDiv'
import ButtonHover from './ButtonHover'

function ShowAll({ text }: { text: string }) {
    return (
        <div className="flex sm:flex-nowrap flex-wrap text-center   justify-between ">
            <div className="">
                <HeaderDiv text={text} />
            </div>
            <div className="sm:block hidden">
                <ButtonHover text="عرض الكل" style="outline" />
            </div>
        </div>
    )
}

export default ShowAll