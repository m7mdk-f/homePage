import Continer from '@/components/Continer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'
import Comheader from '@/components/Comheader';
import CardContact from '@/components/CardContact';




function page() {
    let t = useTranslations()
    const local = t('locale')
    t = useTranslations('BookedNow')
    const comments = {
        ar: [
            {
                id: 1,
                name: "تغريد الحارثي",
                avatar: "/Images/Avatar1.webp",
                comment: "ززززز",
                timeAgo: "منذ 3 أيام"
            },
            {
                id: 2,
                name: "عبدالحكيم البهلول",
                avatar: "/Images/Avatar2.webp",

                comment: "منصوص",
                timeAgo: "منذ شهر"
            },
            {
                id: 3,
                name: "محمد علي",
                avatar: "/Images/Avatar2.webp",

                comment: "سؤال",
                timeAgo: "منذ 7 أشهر"
            }
        ],
        en: [
            {
                id: 1,
                name: "Taghreed Alharthi",
                avatar: "/Images/Avatar1.webp",
                comment: "Zzzzz",
                timeAgo: "3 days ago"
            },
            {
                id: 2,
                name: "Abdulhakim Albahlool",
                avatar: "/Images/Avatar2.webp",
                comment: "Text",
                timeAgo: "1 month ago"
            },
            {
                id: 3,
                name: "Mohamed Aly",
                avatar: "/Images/Avatar2.webp",
                comment: "Question",
                timeAgo: "7 months ago"
            }
        ],
    };
    return (
        <Comheader currentPage={t('title')}>
            <Continer title={t('title')}>
                <h1 className='mb-5 text-black/70'>{t('header')}</h1>
                {(local == 'en' || local == 'ar') && comments[local].map((comment, index) => (
                    <CardContact key={index} comment={comment} />
                ))}
            </Continer>
        </Comheader>

    )
}

export default page






