"use client";
import React from "react";
import Comheader from "@/components/Comheader";
import Slider from "@/components/Slider/Slider";
import AppointmentCard from "@/components/AppointmentCard";
import ShowDetails from "@/components/ShowDetails";
import HeaderDiv from "@/components/HeaderDiv";
import { useTranslations } from "next-intl";
import { Doctor, doctors } from "@/app/schema/db";
import CardDoctor from "@/components/CardDoctor";
import { useParams } from "next/navigation";

const Page = () => {
    const { id } = useParams();
    const t = useTranslations();
    const locale = t("locale");
    let link: string | undefined

    // Find the doctor based on the ID and locale.
    let doctor: Doctor | undefined;
    if (id && !isNaN(Number(id.toString().trim())) && (locale === "ar" || locale === "en")) {
        link = doctors['en'].find((item) => item.id === Number(id.toString().trim()))?.department.split(" ")[0]
        doctor = doctors[locale]?.find((item) => item.id === Number(id.toString().trim()));
    }

    if (!doctor) {
        return (
            <Comheader currentPage="Details">
                <div className="container text-center py-20">
                    <p>{t("doctor_not_found")}</p>
                </div>
            </Comheader>
        );
    }

    return (
        <Comheader currentPage={doctor.department} option={`${doctor.Specialization} ${doctor.name}`} linkOption={`/DepartMext/${link}`}>
            {/* Doctor's Appointment Card */}
            <div className="container">
                <AppointmentCard doctor={doctor} />
            </div>

            {/* Details Section */}
            <div className="my-10 mt-20">
                <div className="rounded-xl border overflow-hidden container">
                    <ShowDetails
                        title={t("appointment_description_title")}
                        desc={t("appointment_description")}
                    />
                    <ShowDetails
                        title={t("follow_up_title")}
                        desc={t("follow_up_description")}
                    />
                    <ShowDetails
                        title={t("important_notes_title")}
                        desc={t("important_notes_description")}
                    />
                </div>
            </div>

            {/* Suggested Products Section */}
            <div className="bg-white  py-10 container">
                <HeaderDiv text={t("products_you_might_like")} />
                <div className="text-center pt-20 sm:pt-7">
                    <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse">
                        {(locale === "ar" || locale === "en") && (
                            <Slider
                                slidesView={{
                                    0: { slidesPerView: 1 },
                                    500: { slidesPerView: 2 },
                                    800: { slidesPerView: 3 },
                                }}
                                classButton="rounded-full p-2 border"
                                enableAutonPlay
                                iconClass="w-6 h-6"
                                spaceBetween={20}
                                number={3}
                                headerDivBut="absolute  -top-16 pointer-events-none rtl:left-0 ltr:right-0"
                            >
                                {doctors[locale].map((item, index) => (
                                    <CardDoctor doctors={item} key={index} />
                                ))}
                            </Slider>
                        )}
                    </div>
                </div>
            </div>
        </Comheader>
    );
};

export default Page;
