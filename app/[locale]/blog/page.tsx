
import SliderCom from '@/components/SliderCom'
import { Link } from '@/navigation';
import React, { useState } from 'react'
import Comheader from '@/components/Comheader';
import CardDetalis from '@/components/CardDetalis';
import FilterDetailse from '@/components/FilterDetailse';
import { useTranslations } from 'next-intl';

export default function page() {
    const t = useTranslations()
    return (
        <Comheader currentPage={t("blogpage")}>
            <div className=''>
                <div className='container flex md:flex-row flex-col justify-between'>
                    <div className='md:w-1/4 w-full '>
                        <FilterDetailse />
                    </div>
                    <div className='md:w-3/4 w-full'>
                        <SliderCom />
                        <CardDetalis />
                    </div>
                </div>
            </div>
        </Comheader>

    )
}
