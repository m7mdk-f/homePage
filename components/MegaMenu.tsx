import React, { useState } from "react";
import { FaAngleDown, FaRegCalendar } from "react-icons/fa";
import { Button } from "./ui/button";
import Image from "next/image";
import { doctors } from "@/app/schema/db";
import Link from "next/link";
import Links from "./Links";
import { useTranslations } from "next-intl";

function MegaMenu({ show = false }: { show?: boolean }) {
    const [active, setActive] = useState(show);
    const t = useTranslations();
    const locale = t("locale");
    return (
        <div className="group z-10">
            <div className="flex justify-between md:block">
                <Links link="/" className="group-hover:opacity-80 flex md:gap-1 justify-between">
                    {t("MegaMenu.sections")} {/* Translated sections text */}
                    <FaAngleDown className="mt-1 md:block hidden md:text-white/70 text-black/50" />
                </Links>
                <FaAngleDown
                    onClick={() => {
                        setActive(!active);
                    }}
                    className="mt-1 md:hidden md:text-white/70 text-black/50"
                />
            </div>
            <div className="md:fixed relative pointer-events-none group-hover:opacity-100 md:opacity-0 group-hover:translate-y-0 md:translate-y-10 duration-300 group-hover:pointer-events-auto md:pt-10 w-full left-0">
                <div
                    className={`${active ? "max-h-[10000px]" : "max-h-0"
                        } overflow-hidden duration-500 bg-white md:flex gap-2 py-1 rounded-md container`}
                >
                    <div className="md:w-[30%] md:border-l p-3">
                        <Link href="/" className="text-black/80 hover:opacity-80 text-lg">
                            {t("MegaMenu.megaMenuLink")}
                        </Link>
                    </div>
                    <div className="grid w-full md:grid-cols-4 gap-4 p-4">
                        {(locale == "ar" || locale == "en") && doctors[locale].slice(0, 4).map((item, index: number) => (
                            <div key={index} className="md:border rounded-lg overflow-hidden">
                                <div className="relative w-full md:h-32 h-48">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover object-right-top"
                                    />
                                    {/* Discount */}
                                    {item.badge && (!item.badge.includes("خصم") && !item.badge.includes("Discount")) && (
                                        <span className="absolute top-2 line-clamp-1 max-w-[70%] left-2 bg-blue-500 text-white text-sm px-2 py-1 rounded">
                                            {item.badge}
                                        </span>
                                    )}
                                </div>
                                <div className="p-3 flex flex-col gap-2">
                                    <h3 className="rtl:text-sm line-clamp-1 font-bold text-gray-800">
                                        {item.Specialization}
                                        {item.name}
                                    </h3>
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
