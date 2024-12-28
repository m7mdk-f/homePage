import React from "react";
import Slider from "./Slider/Slider";
import Image from "next/image";
import HeaderDiv from "./HeaderDiv";
import { useTranslations } from "next-intl";
import Details from "./Details";

const InsurancePartners = () => {

    const t = useTranslations("insurancePartners");
    const companies = [
        { name: "الصقر للتأمين", logo: "/Images/slider1.webp" },
        { name: "التعاونية", logo: "/Images/slider2.webp" },
        { name: "سلامة", logo: "/Images/slider3.webp" },
        { name: "الجزيرة تكافل", logo: "/Images/slider4.webp" },
        { name: "التعاونية", logo: "/Images/slider5.webp" },
        { name: "سلامة", logo: "/Images/slider6.webp" },
        { name: "الجزيرة تكافل", logo: "/Images/slider1.webp" },
        { name: "التعاونية", logo: "/Images/slider2.webp" },
        { name: "سلامة", logo: "/Images/slider3.webp" },
    ];

    return (
        <div className="bg-white py-16  container">
            <HeaderDiv text={t("header")} />
            <Details text={t("description")} />
            <div className=" text-center pt-7">
                <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse">
                    <Slider classButton="rounded-full p-2 border " enableAutonPlay iconClass="w-6 h-6" spaceBetween={20} number={6} headerDivBut="absolute sm:block hidden -top-16 pointer-events-none rtl:left-0 ltr:right-0">
                        {companies.map((company, index) => (
                            <div
                                key={index}
                                className="border overflow-hidden cursor-pointer border-gray-200 rounded-md p-4 flex justify-center items-center hover:shadow-md transition"
                            >
                                <a href="#" className="brand-item block">
                                    <Image
                                        className="max-h-full hover:scale-125 duration-300 hover:grayscale-0 grayscale filter"
                                        src={company.logo}
                                        alt="Brand Image"
                                        width={400}
                                        height={220}
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default InsurancePartners;
