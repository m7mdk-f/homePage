import React, { SetStateAction, useEffect, useState } from "react";
import { FaAngleDown, FaRegCalendar } from "react-icons/fa";
import { Button } from "./ui/button";
import Image from "next/image";
import { doctors } from "@/app/schema/db";
import Links from "./Links";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

function MegaMenu({ show = false, setactive }: { show?: boolean, setactive?: React.Dispatch<SetStateAction<boolean>> }) {
    const [active, setActive] = useState(show);
    const t = useTranslations();
    const locale = t("locale");


    return (
        <div className="group  z-10">
            <div className="flex justify-between md:block relative">
                <Links link="/offers" className="group-hover:opacity-80 md:flex hidden md:gap-1 justify-between">
                    {t("MegaMenu.sections")}
                    <FaAngleDown className="mt-1 md:block hidden md:text-white/70 text-black/50" />
                </Links>
                <div className="group-hover:opacity-80 md:hidden flex md:gap-1 justify-between">
                    {t("MegaMenu.sections")}
                    <FaAngleDown className="mt-1 md:block hidden md:text-white/70 text-black/50" />
                </div>
                <div className="w-full h-full  absolute top-0 left-0 cursor-pointer" onClick={() => {
                    setActive(!active);
                }}></div>
                <FaAngleDown
                    onClick={() => {
                        setActive(!active);
                    }}
                    className={`${active ? "rotate-180" : "rotate-0"} mt-1 duration-300 md:hidden md:text-white/70 text-black/50`}
                />
            </div>
            <div className={`${active ? "max-h-10" : "max-h-0"} overflow-hidden  duration-300 w-full md:hidden`}>
                <Link onClick={() => {
                    setactive && setactive(false)
                }} href="/offers" className="text-black/80 hover:opacity-80 text-sm">
                    {t("MegaMenu.megaMenuLink")}
                </Link>
            </div>
            <div className={`hidden md:block md:absolute max-w-[1300px] w-screen  ltr:-left-[5%] rtl:-right-[5%] relative pointer-events-none group-hover:opacity-100 md:opacity-0 group-hover:translate-y-0 md:translate-y-10 duration-300 group-hover:pointer-events-auto md:pt-0  `}>
                <div
                    className={` overflow-hidden duration-500 bg-white md:flex gap-2 py-1 rounded-md container`}
                >
                    <div className="md:w-[30%] md:border-l p-3">
                        <Link href="/offers" className="text-black/80 hover:opacity-80 text-base">
                            {t("MegaMenu.megaMenuLink")}
                        </Link>
                    </div>
                    <div className="md:grid  w-full grid-cols-4 gap-4 p-4">
                        {(locale == "ar" || locale == "en") && doctors[locale].slice(0, 4).map((item, index: number) => (
                            <div key={index} className="md:border rounded-lg overflow-hidden">
                                <Link href={`/doctersDetails/${item.id}`}>
                                    <div className="relative w-full md:h-32 h-48">
                                        <Image
                                            src={item.image[0]}
                                            alt={item.name}
                                            fill
                                            className="object-cover object-right-top"
                                        />
                                        {item.badge && (!item.badge.includes("خصم") && !item.badge.includes("Discount")) && (
                                            <span className="absolute top-2 line-clamp-1 max-w-[70%] left-2 bg-blue-500 text-white text-sm px-2 py-1 rounded">
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>
                                </Link>

                                <div className="p-3 flex flex-col gap-2">
                                    <Link href={`/doctersDetails/${item.id}`} className="rtl:text-sm duration-300 hover:text-primary line-clamp-1 font-bold text-gray-800">
                                        {item.Specialization}
                                        {item.name}
                                    </Link>
                                    <p className="text-gray-600 rtl:text-sm ltr:text-xs">
                                        {item.department}
                                    </p>
                                    <div className="mt-2 text-gray-900 font-bold">{item.price} ر.س</div>
                                    <Button variant="outline" className="w-full font-bold">
                                        <FaRegCalendar size={20} />
                                        {t("MegaMenu.bookNow")}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MegaMenu;
