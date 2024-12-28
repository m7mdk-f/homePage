import { GrFormPrevious } from 'react-icons/gr';
import { Button } from './ui/button';
import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';  // Hook for translations
import ButtonHover from './ButtonHover';

const FindMore: React.FC = () => {
    const t = useTranslations('findMore');  // Fetch localized text for the 'findMore' section
    return (
        <section
            style={{ backgroundImage: "url('/Images/background2.png')" }}
            className="bg-primary bg-cover bg-center py-24 mt-10"
        >
            <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full  lg:w-1/2 text-center rtl:lg:text-right ltr:lg:text-left text-white">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4">{t('title')}</h2>
                    <p className="text-base lg:text-lg mb-6 text-gray-300">
                        {t('description')}
                    </p>
                    <ButtonHover style='ghost' styleHover="r" text={t('buttonText')} />
             
                </div>

                <div className="md:w-1/2 h-52 w-full relative">
                    <Image fill alt="" src='/images/FindMoreSection.webp' className="object-cover rounded-tr-2xl rounded-bl-2xl z-10" />
                </div>
            </div>
        </section>
    );
};

export default FindMore;
