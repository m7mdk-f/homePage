"use client"

import React from 'react';
import Comheader from '@/components/Comheader';
import EmtyDiv from '@/components/EmtyDiv';
import { Button } from '@/components/ui/button';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

function Page() {
    const t = useTranslations("shoppinPage");

    return (
        <div>
            <Comheader currentPage={t("cart")}>
                <EmtyDiv text={t("empty_cart")} />
                <div className='flex justify-center mb-20 items-center w-full'>
                    <Link href="/" className=''>
                        <Button variant="outline">
                            {t("return_home")}
                        </Button>
                    </Link>
                </div>
            </Comheader>
        </div>
    )
}

export default Page;
