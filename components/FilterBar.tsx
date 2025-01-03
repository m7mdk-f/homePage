'use client';

import React, { SetStateAction } from 'react';
import { CiFilter } from 'react-icons/ci';
import { TbFilter } from 'react-icons/tb';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';

const FilterBar = ({ setactive }: { setactive: React.Dispatch<SetStateAction<boolean>> }) => {
    const t = useTranslations('seleteoption');

    return (
        <div className="flex items-center gap-3 justify-center flex-wrap">
            <div className="flex gap-2 items-center text-sm">
                <label
                    htmlFor="product-filter"
                    className="hidden sm:block text-base whitespace-nowrap"
                >
                    {t('sort_by')}
                </label>
                <select
                    id="product-filter"
                    className="form-input rtl:md:pl-10 ltr:md:pr-10 border-none bg-white text-gray-700 rounded-md shadow-sm outline-none focus:outline-none focus:ring-primary focus:border-primary"
                >
                    <option value="ourSuggest" disabled>
                        {t('our_suggestions')}
                    </option>
                    <option value="bestSell">{t('best_selling')}</option>
                    <option value="topRated">{t('top_rated')}</option>
                    <option value="priceFromTopToLow">{t('price_high_to_low')}</option>
                    <option value="priceFromLowToTop">{t('price_low_to_high')}</option>
                </select>
            </div>

            <Button variant="outline" onClick={() => setactive(true)}>
                <TbFilter className="w-10 h-10" />
                <span>{t('filter_and_sort')}</span>
            </Button>
        </div>
    );
};

export default FilterBar;
