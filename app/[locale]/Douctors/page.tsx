import { doctors } from '@/app/schema/db';
import { useTranslations } from 'next-intl';
import React from 'react';
import Comheader from '@/components/Comheader';
import DoctursUs from '@/components/DoctursUs';

function Page() {
  let t = useTranslations();
  const locale = t('locale')
  t = useTranslations('DoctorsPage')
  return (
    <Comheader currentPage={t('titlePage')} title={t('title')} Imagesrc='/Images/bg2.jpg' desc={t('description')}>
      <div className="container py-16  pb-28 flex flex-col gap-3">
        <h1>{t('header')}</h1>
        <div className="grid md:grid-cols-3 gap-7 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {(locale == 'ar' || locale == 'en') && doctors[locale].map((item, index) => {
            return (
              <DoctursUs className='w-full font-normal text-xs md:text-black/70  ' titleStyle='text-lg line-clamp-1' doctors={item} key={index} />
            )
          })}
        </div>
      </div>
    </Comheader>
  );
}

export default Page;
