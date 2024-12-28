import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiSmartphone } from "react-icons/fi";
import { useTranslations } from 'next-intl'; // Import useTranslations

const Footer: React.FC = () => {
    const t = useTranslations('Footer'); // 'Footer' is the namespace for translations

    return (
        <footer className="bg-gray-50 text-gray-700">
            <div className="container mx-auto  py-10">
                <div className="flex md:w-[75%] rtl:md:text-right ltr:text-left gap-7 sm:gap-0 sm:flex-row flex-col justify-between md:items-start">
                    <div className="flex flex-col gap-5">
                        <div className=" mb-6 md:mb-0 relative sm:w-64 w-full h-12">
                            <Image fill src="/Images/logo2.avif" className="object-contain" alt="" />
                        </div>
                        <p>{t('storeDescription')}</p>
                    </div>
                    {/* Links */}
                    <div className=" mb-6 md:mb-0">
                        <h4 className="font-semibold text-base line-clamp-1">{t('importantLinks')}</h4>
                        <ul className="space-y-5 mt-5 text-sm text-black/70">
                            <li>
                                <Link href="/" className="hover:text-black/50 duration-300">
                                    {t('blog')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-black/50 duration-300">
                                    {t('aboutUs')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-black/50 duration-300">
                                    {t('contactUs')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-black/50 duration-300">
                                    {t('bookNow')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <h4 className="font-semibold text-base">{t('contactUsTitle')}</h4>
                        <p className="mt-5 hover:opacity-70 duration-300 cursor-pointer flex items-center">
                            <span className="inline-block rtl:ml-2 ltr:mr-2 rtl:border-l-2 ltr:border-r-2 text-primary border-black/20 rtl:pl-2 ltr:pr-2">
                                <FiSmartphone className="w-4 h-4" />
                            </span>
                            <span className="inline-block">{t('phone')}</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
