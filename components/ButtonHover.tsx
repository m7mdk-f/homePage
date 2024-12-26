import React from 'react'
import { Button } from './ui/button'
import { GrFormPrevious } from 'react-icons/gr'


function ButtonHover({ text, style, className }: { className?: string, text: string, style: "outline" | "default" }) {
    return (
        <Button variant={style} className={`${className || ""}  group duration-500`}>
            {text}
            <GrFormPrevious className="relative group-hover:-translate-x-2 group-hover:text-white duration-500 " />
        </Button>
    )
}

export default ButtonHover