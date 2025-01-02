import React from 'react'
import { Button } from './ui/button'
import { GrFormPrevious } from 'react-icons/gr'


function ButtonHover({ text, style, className, styleHover }: { styleHover?: string, className?: string, text: string, style?: "outline" | "default" | 'ghost' }) {
    return (
        
        <Button variant={style || "default"} className={`${className || ""}  group duration-500`}>
            {text}
            <GrFormPrevious className={`${styleHover || 'group-hover:text-white'}relative rtl:group-hover:-translate-x-2 ltr:group-hover:translate-x-2 ltr:rotate-180  duration-500 `} />
        </Button>
    )
}

export default ButtonHover