"use client"
import { Link } from '@/navigation'
import React, { SetStateAction, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import AnimationDiv from './AnimationDiv'
import { AnimatePresence } from 'framer-motion'
import { LiaFilterSolid } from "react-icons/lia";
import { useTranslations } from 'next-intl'

function FilterDetailse() {

    const [active, setactive] = useState(false)
    const t = useTranslations("FillterPageBlog")
    return (
        <div className='w-full'>
            <h1 className='md:text-lg text-sm font-semibold mb-3 md:block hidden'>{t("Categories")}</h1>
            <button className='flex md:hidden gap-1 items-center text-primary text-left w-full justify-end mb-5' onClick={() => setactive(true)}>
                <LiaFilterSolid />
                <h1>{t("Categories")}</h1>
            </button>

            <Link href='/blog/public' className='hover:text-primary md:block hidden duration-300 text-sm '>{t("public")}</Link>
            <AnimatePresence mode='wait'>
                {active &&
                    <AnimationDiv onClick={() => setactive(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .5 }} className=' md:hidden  fixed top-0 left-0 md:bg-transparent bg1   w-full h-full z-50 flex justify-end items-end'>
                        <AnimationDiv onClick={(e) => e.stopPropagation()} initial={{ y: 150 }} animate={{ y: 0 }} exit={{ y: 150 }} transition={{ duration: .7 }} className='w-full  h-28 flex flex-col  md:bg-transparent bg-white rounded-t-lg'>
                            <div className='flex justify-between items-center px-5 my-3 md:hidden '>
                                <h1>{t("Categories")}</h1>
                                <IoCloseOutline className='text-danger cursor-pointer   ' onClick={() => setactive(false)} />
                            </div>
                            <hr className='md:hidden' />
                            <div className='px-5 text-lg md:my-0 my-auto '>
                                <Link href='/blog/public' className='hover:text-primary duration-300 text-sm '>{t("public")}</Link>
                            </div>
                        </AnimationDiv>
                    </AnimationDiv>}
            </AnimatePresence>

        </div>
    )
}

export default FilterDetailse