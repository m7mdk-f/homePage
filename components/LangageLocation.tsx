"use client";
import { useAppContext } from '@/app/Context/AppContext';
import Image from 'next/image';
import React, { SetStateAction } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { useTranslations } from 'next-intl';

function LangageLocation({ className, setActive }: { setActive?: React.Dispatch<SetStateAction<boolean>>, className?: string }) {
    const { toggleDarkMode } = useAppContext();
    const t = useTranslations();
    return (
        <div className={`${className} flex items-center space-x-4 rtl:space-x-reverse`}>
            {/* Language Selector */}
            <div onClick={(() => {
                toggleDarkMode()
                setActive && setActive(false)
            })} className="cursor-pointer flex items-center space-x-2 rtl:space-x-reverse border-l pl-3">
                <div className="w-6 items-center flex h-4 rounded-sm overflow-hidden relative">
                    <Image fill src={t("imageLan")} alt="Arabic Language" className="object-cover" />
                </div>
                <span className="text-xs font-semibold">{t('languageArabic')}</span>
            </div>

            <div className="flex gap-2 text-sm">
                <span>ر.س</span>
                <CiLocationOn className="text-base mt-0.5" />
                <span className='line-clamp-1'>{t('mainBranch')}</span>
            </div>
        </div>
    );
}

export default LangageLocation;
