import React from "react";
import HeaderDiv from "./HeaderDiv";
import { useTranslations } from 'next-intl';  // Hook for translations

const WorkingHours = () => {
    const t = useTranslations('workingHours');  // Fetch localized text for the 'workingHours' section

    return (
        <div className="my-10">
            <div className="relative container text-gray-800">
                <div className="absolute md:top-0 w-full pointer-events-none bottom-3 md:right-10 md:max-w-96 rounded-xl">
                    <div className="bg-white pointer-events-auto w-[90%] mx-auto md:w-full shadow-lg">
                        <div className="flex flex-col gap-2 mt-10 mx-auto w-[90%] pt-5">
                            <div><HeaderDiv className="" text={t('header')} /></div>
                            <ul className="rtl:md:text-lg text-base text-black/50">
                                <li className="flex gap-1 items-center py-1">
                                    <span>{t('saturdayToWednesday')}</span>
                                    <span> ... </span>
                                    <span>{t('workingHours')}</span>
                                </li>
                                <li className="flex gap-1 items-center py-1">
                                    <span>{t('thursday')}</span>
                                    <span>...</span>
                                    <span>{t('workingHours')}</span>
                                </li>
                                <li className="flex justify-between items-center py-1">
                                    <span>{t('friday')}</span>
                                    <span className="text-red-500 font-semibold">{t('closed')}</span>
                                </li>
                            </ul>
                            <hr className="mt-4" />
                            <div className="my-4 mb-8 text-black font-semibold">
                                <h1>{t('followUs')}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345094694!2d144.96305761531793!3d-37.81410797975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce720!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1639555710038!5m2!1sen!2sus"
                        className="w-full h-[70vh] md:h-96 rounded-lg"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default WorkingHours;
