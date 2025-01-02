import { useTranslations } from 'next-intl'
import React from 'react'
import { BsHandbag } from 'react-icons/bs'

function EmtyDiv({ text }: { text: string }) {
    const t = useTranslations()
    return (
        <div className='w-full h-56 flex justify-center items-center'>
            <div className='flex flex-col items-center'>
                <div className='rounded-full p-8  bg-gray-100 text-gray-300'>
                    <BsHandbag className='w-20 h-20' />
                </div>
                <h1 className='mt-2'>{text}</h1>
            </div>
        </div>
    )
}

export default EmtyDiv