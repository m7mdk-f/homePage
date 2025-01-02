"use client";
import React, { SetStateAction, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Links from "./Links";

export default function Department({ show = false, setactive }: { show?: boolean, setactive?: React.Dispatch<SetStateAction<boolean>> }) {
    const [active, setActive] = useState(show);
    const [hide, setHide] = useState(false)
    const t = useTranslations();

    const menuItems = [
        {
            text: t("Department.ophthalmology"),
            link: "/DepartMext/Eyes",
        },
        {
            text: t("Department.dermatology"),
            link: "/DepartMext/dermatology",

        },
        {
            text: t("Department.psychiatry"),
            link: "/DepartMext/psychiatry",
        },
        {
            text: t("Department.ent"),
            link: "/DepartMext/Ear",

        },
        {
            text: t("Department.internalMedicine"),
            link: "/DepartMext/internalMedicine",
        }

    ];

    const additionalItems = [
        {
            text: t("Department.childrenDepartment"),
            link: '/DepartMext/Pediatrics'
        },
        {
            text: t("Department.gynecology"),
            link: '/DepartMext/Obstetrics'
        },
    ];

    return (
        <div className="group relative z-10">
            <div className="flex justify-between md:block relative">
                <div
                    className="group-hover:opacity-80 md:hidden  flex md:gap-1 justify-between"
                >
                    {t("Department.sections")}
                    <FaAngleDown className="mt-1 md:block hidden md:text-white/70 text-black/50" />

                </div>
                <Links
                    link="/DepartMext/all"
                    className="group-hover:opacity-80 md:flex hidden md:gap-1 justify-between"
                >
                    {t("Department.sections")}
                    <FaAngleDown className="mt-1 md:block hidden md:text-white/70 text-black/50" />
                </Links>
                <div onClick={() => setActive(!active)} className="w-full h-full md:-z-10 z-10 cursor-pointer top-0 left-0 absolute"></div>
                <FaAngleDown

                    className={`${active ? "rotate-180" : "rotate-0"}  mt-1 duration-300 md:hidden md:text-white/70 text-black/50`}
                />
            </div>
            <div className="pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 md:opacity-0 group-hover:translate-y-0 md:translate-y-10 duration-300 z-10 md:mt-6 md:w-56 w-full relative md:absolute md:-top-0.5 md:-left-24">
                <ul
                    className={`${active ? "max-h-[450px] mt-5" : "max-h-0 mt-0"
                        } md:overflow-visible  overflow-hidden md:pt-3 mt-1 mx-auto duration-300 bg-white`}
                >
                    <li className=" md:hidden md:pr-2 hover:text-gray-400 group relative duration-300  mr-1 md:text-sm ltr:text-xs rtl:text-base md:px-2 cursor-pointer text-gray-700">
                        <Links setActive={setactive} link="/DepartMext/all">
                            {t("departments.showall")}
                        </Links>
                        <div className="md:w-[95%] bg-black/10 h-[0.5px] w-0 my-3"></div>
                    </li>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`${index + 1 == menuItems.length ? "li md:items-center md:flex   md:pb-4 " : ""
                                } md:pr-2 hover:text-gray-400 group relative duration-300  mr-1 md:text-sm ltr:text-xs rtl:text-base md:px-2 cursor-pointer text-gray-700`}
                        >
                            <div className="flex justify-between w-full relative ">
                                <Links className="w-full" setActive={setactive} link={item.link}>
                                    {item.text}
                                </Links>
                                {index + 1 == menuItems.length && (
                                    <>
                                        <FaAngleDown className={`${hide && active ? "rotate-180" : "rotate-0"} rtl:md:rotate-90 ltr:md:-rotate-90  duration-300 mt-1  mr-auto inline-block  text-black/70`} />
                                        <div className=" w-full  h-full md:hidden  absolute top-0 left-0" onClick={() => setHide(!hide)}></div>
                                    </>
                                )}
                            </div>
                            {index + 1 !== menuItems.length ? (
                                <div className="md:w-[95%] bg-black/10 h-[0.5px] w-0 my-3" ></div>
                            ) : (<>
                                <ul className={`${hide && active ? "max-h-[100px]" : "max-h-0"} duration-300 md:hidden text-black/70 mt-3 flex flex-col gap-2`}>
                                    <li>
                                        <Links setActive={setactive} link={item.link}>
                                            {t("departments.showall")}
                                        </Links>
                                    </li>
                                    {additionalItems.map((item, index) => (
                                        <li key={index}>
                                            <Links setActive={setactive} link={item.link}>
                                                {item.text}
                                            </Links>
                                        </li>
                                    ))}
                                </ul>
                                <div className="my-3 hidden next translate-x-20 opacity-0 duration-300 bg-white w-full text-gray-700 py-3 absolute md:flex flex-col gap-2 -top-5 rtl:right-[100%] ltr:left-[100%]">
                                    <div className="w-[90%] mx-auto">
                                        {additionalItems.map((item, i) => (
                                            <React.Fragment key={i}>
                                                <Links className=" w-full" setActive={setactive} link={item.link}>
                                                    {item.text}
                                                </Links>

                                                {i !== additionalItems.length - 1 && (
                                                    <div className="md:w-[95%] bg-black/10 w-0 h-[0.5px]  my-3" ></div>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
}
