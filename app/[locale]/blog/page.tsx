
import SliderCom from '@/components/SliderCom'
import { Link } from '@/navigation';
import React, { useState } from 'react'
import Comheader from '@/components/Comheader';
import CardDetalis from '@/components/CardDetalis';
import FilterDetailse from '@/components/FilterDetailse';

export default function page() {

    return (
        <Comheader currentPage='المدونة'>
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
