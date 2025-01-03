import React from 'react';
import { useTranslations } from 'next-intl';
import { MdMinimize } from 'react-icons/md';
import ShowDiv from './ShowDiv';
import { Button } from './ui/button';

const FilterSection: React.FC = () => {
    const t = useTranslations('Fillter');

    return (
        <div className="p-4 w-full">
            {/* Product Categories */}
            <div className="mb-6 text-black">
                <ShowDiv title={t('categories')}>
                    <div className="flex gap-5 text-gray-500 text-sm ">
                        <input
                            type="radio"
                            name="category"
                            className="accent-primary"
                            defaultChecked
                        />
                        <label className="rtl:ext-right text-sm">{t('women_and_maternity')}</label>
                    </div>
                </ShowDiv>
            </div>

            <ShowDiv title={t('price')}>
                <div className="flex gap-3 items-center">
                    <input
                        type="text"
                        placeholder={t('from')}
                        className="border border-gray-300 rounded-lg px-3 py-2 rtl:ext-right w-28"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                        type="text"
                        placeholder={t('to')}
                        className="border border-gray-300 rounded-lg px-3 py-2 rtl:ext-right w-28"
                    />
                </div>
            </ShowDiv>

            <Button variant="link" className="w-full mt-10">
                {t('clear_filters')}
            </Button>
        </div>
    );
};

export default FilterSection;
