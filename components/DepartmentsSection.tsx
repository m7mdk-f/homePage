"use client";
import DivHover from "./DivHover";
import HeaderDiv from "./HeaderDiv";
import { useTranslations } from "next-intl";

const DepartmentsSection = () => {
    const t = useTranslations("departments");

    return (
        <section className="sm:mb-40 mb-10">
            <div className="container mx-auto lg:h-screen sm:h-[50vh] h-auto">
                <HeaderDiv text={t("header")} />
                <div className="grid mt-10 h-full sm:grid-rows-2 sm:grid-cols-3 grid-cols-1 lg:gap-6 gap-3">
                    <div
                        className="bg-center relative overflow-hidden w-full sm:h-full h-40 rounded-xl group"
                        style={{
                            backgroundImage: 'url("/Images/back1.webp")',
                            backgroundSize: "cover",
                        }}
                    >
                        <DivHover text={t("dermatology")} />
                    </div>

                    <div
                        className="bg-center relative overflow-hidden group sm:h-full h-40 rounded-xl w-full"
                        style={{
                            backgroundImage: 'url("/Images/back2.webp")',
                            backgroundSize: "cover",
                        }}
                    >
                        <DivHover text={t("ophthalmology")} />
                    </div>

                    <div
                        className="bg-center relative overflow-hidden group sm:row-span-2 sm:h-full h-40 rounded-xl w-full"
                        style={{
                            backgroundImage: 'url("/Images/back4.webp")',
                            backgroundSize: "cover",
                        }}
                    >
                        <DivHover text={t("internalMedicine")} />
                    </div>

                    <div
                        className="bg-center relative overflow-hidden group sm:col-span-2 sm:h-full h-40 rounded-xl w-full"
                        style={{
                            backgroundImage: 'url("/Images/back3.webp")',
                            backgroundSize: "cover",
                        }}
                    >
                        <DivHover text={t("psychiatry")} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DepartmentsSection;
