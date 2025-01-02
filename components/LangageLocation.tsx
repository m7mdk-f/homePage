"use client";
import { useAppContext } from '@/app/Context/AppContext';
import Image from 'next/image';
import React, { SetStateAction, useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { useTranslations } from 'next-intl';

function LangageLocation({ className, setActive }: { setActive?: React.Dispatch<SetStateAction<boolean>>, className?: string }) {
    const { toggleDarkMode, toggleLocation, selectedBranch } = useAppContext();

    console.log(selectedBranch)
    const t = useTranslations();
    const [text, setText] = useState("")
    useEffect(() => {
        if (window !== undefined) {
            setText(t(`Locations.${selectedBranch}`))
        }
    }, [selectedBranch])    
    return (
        <div className={`${className} flex items-center space-x-4 rtl:space-x-reverse`}>
            <div onClick={(() => {
                toggleDarkMode()
                setActive && setActive(false)
            })} className="cursor-pointer flex items-center space-x-2 rtl:space-x-reverse border-l pl-3">
                <div className="w-6 items-center flex h-4 rounded-sm overflow-hidden relative">
                    <Image fill src={t("imageLan")} alt="Arabic Language" className="object-cover" />
                </div>
                <span className="text-xs font-semibold">{t('languageArabic')}</span>
            </div>

            <div onClick={() => {
                toggleLocation()
                setActive && setActive(false)
            }} className="flex gap-2 cursor-pointer text-sm">
                <span>ر.س</span>
                <CiLocationOn className="text-base mt-0.5" />
                <span className='line-clamp-1'>{text}</span>
            </div>
        </div>
    );
}

export default LangageLocation;
