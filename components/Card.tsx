import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrFormPrevious } from "react-icons/gr";

interface CardProps {
    image: string;
    date: string;
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ image, date, title, description, link }) => {
    const t = useTranslations()
    return (
        <div className="bg-white border  rounded-xl  overflow-hidden flex flex-col">
            <div className="h-[350px] w-full cursor-pointer overflow-hidden relative">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className=" hover:scale-110 duration-300 object-cover "
                />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <p className="text-sm text-black/40 my-3">{date}</p>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                    <p className="text-base text-black/50 w-[95%]  mb-4 line-clamp-3 leading-6">{description}</p>
                </div>
                <hr className="w-[95%] mx-auto mb-6 mt-3" />
                <Link
                    href={link}
                    className="text-primary  font-medium mt-auto  flex group items-center"
                >
                    {t("learnmore")}
                    <GrFormPrevious className="text-base rtl:-translate-x-1 mt-0.5 duration-100 rtl:group-hover:-translate-x-2 ltr:rotate-180 ltr:group-hover:translate-x-2 " />

                </Link>
            </div>
        </div>
    );
};

export default Card;
