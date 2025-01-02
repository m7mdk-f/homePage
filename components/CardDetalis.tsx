import { useTranslations } from 'next-intl';
import React from 'react'
import Card from './Card';
import { cardsData } from '@/app/schema/db';

function CardDetalis() {
    let t = useTranslations();
    const locale = t("locale");
    return (
        <div className="grid grid-cols-1 py-5 sm:grid-cols-2  gap-6">
            {(locale === "ar" || locale === "en") && cardsData[locale].map((card, index) => (
                <Card key={index} showAllClass="hidden" className='h-60 hover:opacity-90 duration-300' disaplyDom ImageHover='none' {...card} />
            ))}
        </div>
    )
}

export default CardDetalis