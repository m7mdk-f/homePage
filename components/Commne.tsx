"use client";
import React, { SetStateAction, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useTranslations } from "next-intl";
import Links from "./Links";
import Department from "./Department";
import MegaMenu from "./MegaMenu";
import AnimationDiv from "./AnimationDiv";
import LangageLocation from "./LangageLocation";
import { usePathname } from "next/navigation";

export default function Commne({
    className,
    show = false,
    active,
    setActive,
}: {
    active?: boolean;
    setActive?: React.Dispatch<SetStateAction<boolean>>;
    className?: string;
    show?: boolean;
}) {
    const t = useTranslations();
    const pathname = usePathname();

    return (
        <div
            onClick={() => {
                setActive && setActive(false);
            }}
            className={`${className || ""
                } md:flex fixed md:relative md:bg-transparent top-0 right-0 md:w-auto md:h-auto bg1 w-full h-screen z-50 md:text-white text-black/80`}
        >
            <AnimationDiv
                initial={{ x: t("locale") == "ar" ? 100 : -100 }}
                transition={{ delay: 0.05, duration: 0.3 }}
                animate={{ x: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={`sm:w-[40%] relative w-full md:overflow-y-visible overflow-y-auto h-screen md:w-auto md:bg-transparent bg-white md:h-full`}
            >
                <div className="w-[90%] py-10  md:py-0 md:w-auto mx-auto z-10 flex flex-col md:font-normal md:text-base text-base font-semibold md:flex-row rtl:gap-8 ltr:gap-4 ">
                    {active && (
                        <AnimationDiv
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ delay: 0.8, duration: 0.3 }}
                            className="w-[40%] fixed top-2 rtl:right-0 ltr:left-0 z-50 h-20 pointer-events-none hidden sm:block md:hidden"
                        >
                            <div className="w-[50%] rtl:mr-auto ltr:ml-auto h-full bg-white"></div>
                        </AnimationDiv>
                    )}
                    {active && (
                        <AnimationDiv
                            initial={{ opacity: 0, x: t("locale") == "ar" ? 50 : -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                            className={`rtl:right-[40%] ltr:left-[40%]  fixed top-5 hidden sm:block md:hidden`}
                        >
                            <button
                                onClick={() => {
                                    setActive && setActive(false);
                                }}
                                className={`p-1 pr-2 rtl:rotate-0 rotate-180 rounded-l-full clos text-white `}
                            >
                                <IoMdClose className="w-6 h-6" />
                            </button>
                        </AnimationDiv>
                    )}

                    <div className="fixed top-5 rtl:left-5 ltr:right-5 z-50 flex justify-end sm:hidden">
                        <button
                            onClick={() => {
                                setActive && setActive(false);
                            }}
                            className="p-1 border rounded-full bg-danger text-white"
                        >
                            <IoMdClose className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Use translated text */}
                    <Links setActive={setActive} link="/">{t("NavBar.home")}</Links>
                    <Links setActive={setActive} link={`/offers`}>{t("NavBar.offers")}</Links>
                    <Links setActive={setActive} link="/Douctors">{t("NavBar.doctors")}</Links>
                    <Department show={show} setactive={setActive} />
                    <Links setActive={setActive} link="/WhoUs">{t("NavBar.aboutUs")}</Links>
                    <Links setActive={setActive} link="/BookNow">{t("NavBar.bookNow")}</Links>
                    <Links setActive={setActive} link="/ConcatUs">{t("NavBar.contactUs")}</Links>
                    <MegaMenu show={show} setactive={setActive} />
                    <hr className="md:hidden" />
                    <LangageLocation setActive={setActive} className="md:hidden" />
                </div>
            </AnimationDiv>
        </div>
    );
}
