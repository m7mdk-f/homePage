'use client'
import { Doctor, doctors } from '@/app/schema/db'
import CardDoctor from '@/components/CardDoctor';
import EmtyDiv from '@/components/EmtyDiv';
import FilterBar from '@/components/FilterBar';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import Comheader from '@/components/Comheader';
import ClickDiv from '@/components/ClickDiv';
import { AnimatePresence } from 'framer-motion';
import AnimationDiv from '@/components/AnimationDiv';
import FilterSection from '@/components/FilterSection';

function page() {

    const { id } = useParams()
    let t = useTranslations()
    let image = {
        title: '',
        ImageSrc: '',
        desc: '',
    }
    const [active, setactive] = useState(false)

    const l = t('locale')
    t = useTranslations()
    let filteredDoctors: Doctor[] = [];
    let IDs: number[] = []
    if (id && typeof id === 'string') {

        console.log(id)
        if (id == 'Obstetrics') {
            image = {
                title: t('Depts.heading'),
                ImageSrc: '/Images/backchile1.webp',
                desc: t('Depts.description'),
            }
        }
        if (id == 'internalMedicine') {
            filteredDoctors = doctors['en'].filter(item => item.department.includes('Obstetrics') || item.department.includes('Pediatrics'));
        }
        else
            filteredDoctors = doctors['en'].filter(item => item.department.trim().toLocaleLowerCase().includes(id.trim().toLocaleLowerCase()));
        IDs = filteredDoctors.map(item => (item.id))


    } else {
        console.error('Invalid or missing id parameter');
        return;
    }
    if (l === 'ar' || l === 'en') {
        if (id == 'all') {
            filteredDoctors = doctors[l]
        }

        else
            filteredDoctors = doctors[l].filter(doctor => IDs.includes(doctor.id));
    }

    return (
        <>
            <Comheader title={image.title} Imagesrc={image.ImageSrc} desc={image.desc} currentPage={filteredDoctors[0] ? (
                id == 'internalMedicine' ? t('Department.internalMedicine') : filteredDoctors[0].department
            ) : id}>
                <AnimatePresence mode='wait'>
                    {active &&
                        <AnimationDiv className='relative z-50' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <ClickDiv className='' setActive={setactive} active={active} >
                                <FilterSection />
                            </ClickDiv>
                        </AnimationDiv>}
                </AnimatePresence>
                <div className='container py-10 '>
                    <div className='flex justify-between mb-10'>
                        <h1 className='text-lg font-semibold'>{filteredDoctors[0] ? (
                            id == 'internalMedicine' ? t('Department.internalMedicine') : filteredDoctors[0].department
                        ) : id}</h1>
                        <FilterBar setactive={setactive} />
                    </div>
                    {filteredDoctors.length !== 0 ? <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {filteredDoctors.map((item) => (
                            <CardDoctor key={item.id} doctors={item} />
                        ))}
                    </div> : <EmtyDiv text={t('Emtey')} />}
                </div>
            </Comheader>
        </>
    )
}

export default page