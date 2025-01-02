import Continer from '@/components/Continer'
import React from 'react'
import Comheader from '@/components/Comheader'
import { useTranslations } from 'next-intl'

function page() {
    const t = useTranslations()
    return (
        <Comheader currentPage={t('WhoUs')} >
            <Continer title={t('WhoUs')}>
                <h1 className='mb-5 text-sm text-black/70'>{t('WhoUs')}</h1>
            </Continer>
        </Comheader>
    )
}

export default page