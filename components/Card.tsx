import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { GrFormPrevious } from "react-icons/gr";
import { LuUserRound } from "react-icons/lu";
import DateComp from "./DateComp";

interface CardProps {
    id: number,
    image: string;
    date: string;
    title: string;
    description: string;
    showAllClass?: string,
    className?: string,
    ImageHover?: string,
    disaplyDom?: boolean
}

const Card: React.FC<CardProps> = ({ id, image, date, title, description, showAllClass, className, ImageHover, disaplyDom = false }) => {
    const t = useTranslations()
    return (
        <div className="bg-white border  rounded-xl  overflow-hidden flex flex-col">
            <Link href={`/carddetails/${id}`}>
                <div className={` ${className || 'h-[350px]'}  w-full  overflow-hidden relative`}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className={`${ImageHover || 'hover:scale-110 duration-300'} object-cover`}
                    />
                </div>
            </Link>

            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    {disaplyDom ? <DateComp date={date} /> :
                        <p className="text-sm text-black/40 my-3">{date}</p>
                    }
                    <Link href={`/carddetails/${id}`} className="text-lg hover:text-primary duration-300 font-semibold text-gray-800 mb-2">{title}</Link>
                    <p className="text-base text-black/50 w-[95%]  mb-4  leading-6 line-clamp-2">{description}</p>
                </div>
                <hr className={`${showAllClass || ''} w-[95%] mx-auto mb-6 mt-3`} />
                <Link
                    href={`/carddetails/${id}`}
                    className={`${showAllClass || ''} text-primary font-medium mt-auto  flex group items-center`}
                >
                    {t("learnmore")}
                    <GrFormPrevious className="text-base rtl:-translate-x-1 mt-0.5 duration-100 rtl:group-hover:-translate-x-2 ltr:rotate-180 ltr:group-hover:translate-x-2 " />
                </Link>
            </div>
        </div>
    );
};

export default Card;
