"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Links from "./Links";

export default function Department({ show = false }: { show?: boolean }) {
    const [active, setActive] = useState(show);
    const t = useTranslations();

    const menuItems = [
        t("Department.ophthalmology"),
        t("Department.dermatology"),
        t("Department.psychiatry"),
        t("Department.ent"),
        t("Department.internalMedicine"),
    ];

    const additionalItems = [
        t("Department.childrenDepartment"),
        t("Department.gynecology"),
    ];

    return (
        <div className="group relative z-10">
            <div className="flex justify-between md:block">
                <Links
                    link="/"
                    className="group-hover:opacity-80 flex md:gap-1 justify-between"
                >
                    {t("Department.sections")}
                    <FaAngleDown className="mt-1 md:block hidden md:text-white/70 text-black/50" />
                </Links>
                <FaAngleDown
                    onClick={() => setActive(!active)}
                    className="mt-1 md:hidden md:text-white/70 text-black/50"
                />
            </div>
            <div className="pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 md:opacity-0 group-hover:translate-y-0 md:translate-y-10 duration-300 z-10 md:pt-6 md:w-56 w-full relative md:absolute md:-top-0.5 md:-left-24">
                <ul
                    className={`${active ? "max-h-[250px] mt-5" : "max-h-0 mt-0"
                        } md:overflow-visible overflow-hidden md:pt-3 mt-1 mx-auto duration-300 bg-white`}
                >
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`${index + 1 == menuItems.length ? "li items-center flex pb-4" : ""
                                } pr-2 hover:text-gray-400 group relative duration-300  mr-1 md:text-sm ltr:text-xs rtl:text-base px-2 cursor-pointer text-gray-700`}
                        >
                            {item}
                            {index + 1 == menuItems.length && (
                                <FaAngleDown className="mt-1 mr-auto md:inline-block hidden text-black/70" />
                            )}
                            {index + 1 !== menuItems.length ? (
                                <div className="md:w-[95%] bg-black/10 h-[0.5px] w-0 my-3" ></div>
                            ) : (
                                    <div className="my-3 next translate-x-20 opacity-0 duration-300 bg-white w-full text-gray-700 py-3 absolute flex flex-col gap-2 -top-5 rtl:right-[100%] ltr:left-[100%]">
                                    <div className="w-[90%] mx-auto">
                                        {additionalItems.map((item, i) => (
                                            <React.Fragment key={i}>
                                                <p className="hover:text-gray-400">{item}</p>
                                                {i !== additionalItems.length - 1 && (
                                                    <div className="md:w-[95%] bg-black/10 w-0 h-[0.5px]  my-3" ></div>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
