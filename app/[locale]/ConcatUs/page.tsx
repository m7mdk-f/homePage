import Continer from '@/components/Continer'
import React from 'react'
import Comheader from '@/components/Comheader'
import { useTranslations } from 'next-intl'
import CardContact from '@/components/CardContact'

function page() {
    const t = useTranslations()

    const local = t('locale')
    const comments = {
        ar: [
            {
                id: 1,
                name: "Demo Account",
                avatar: "/Images/log.webp",
                comment: "تعليق",
                timeAgo: "منذ سنة"
            },

        ],
        en: [
            {
                id: 1,
                name: "Demo Account",
                avatar: "/Images/Avatar1.webp",
                comment: "Comment",
                timeAgo: "1 years ago"
            },
        ],
    };
    return (
        <Comheader currentPage={t('ConcatUs')} >
            <Continer title={t('ConcatUs')}>
                <h1 className='mb-5 text-sm text-black/70'>{t('ConcatUs')}</h1>

                {(local == 'en' || local == 'ar') && comments[local].map((comment, index) => (
                    <CardContact key={index} comment={comment} />
                ))}

            </Continer>
        </Comheader>
    )
}

export default page