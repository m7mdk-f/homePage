import { doctors } from '@/app/schema/db';
import CardDoctor from '@/components/CardDoctor';
import DetailsImage from '@/components/DetailsImage';
import { useTranslations } from 'next-intl';
import React from 'react';
import Comheader from '@/components/Comheader';

function Page() {
    let t = useTranslations();
    const locale = t('locale')
    t = useTranslations('offers')
    return (
        <Comheader currentPage={t('titlePage')} title={t('title')} Imagesrc='/Images/bg1.webp' desc={t('description')}>
            <div className="container py-16  pb-28 flex flex-col gap-3">
                <h1>{t('header')}</h1>
                <div className="grid md:grid-cols-3 gap-7 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                    {(locale == 'ar' || locale == 'en') && doctors[locale].map((item, index) => {
                        return item.dicount ? (
                            <CardDoctor doctors={item} key={index} />
                        ) : null;
                    })}
                </div>
            </div>
        </Comheader>
    );
}

export default Page;
