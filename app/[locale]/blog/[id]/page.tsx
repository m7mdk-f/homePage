"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import Comheader from '@/components/Comheader';
import { Link } from '@/navigation';
import CardDetalis from '@/components/CardDetalis';
import FilterDetailse from '@/components/FilterDetailse';

function page() {
    let { id } = useParams()
    id = id?.toString().replace('%20', ' ')

    return (
        <Comheader currentPage='المدونة' option={`${id}`} linkOption='/blog'>
            <div className=''>
                <div className='container flex md:flex-row flex-col justify-between'>
                    <div className='md:w-1/4 w-full '>
                        <FilterDetailse />
                    </div>
                    <div className='md:w-3/4 w-full'>
                        <h1>{id}</h1>
                        <CardDetalis />
                    </div>
                </div>
            </div>
        </Comheader>
    )
}

export default page