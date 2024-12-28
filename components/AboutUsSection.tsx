"use client";

import { TbHeartbeat, TbMacro } from "react-icons/tb";
import { IoIosGitCompare } from "react-icons/io";
import { useTranslations } from "next-intl";

const AboutUsSection = () => {
    const t = useTranslations();

    const features = [
        {
            icon: <TbHeartbeat />,
            title: t("aboutUs.features.clinicFeatures"),
            description:
                t("aboutUs.introText"),
        },
        {
            icon: <IoIosGitCompare />,
            title: t("aboutUs.features.workingHours"),
            description:
                t("aboutUs.introText"),
        },
        {
            icon: <TbMacro />,
            title: t("aboutUs.features.team"),
            description:
                t("aboutUs.introText"),
        },
    ];

    return (
        <section className="py-16 px-6 bg-white text-center">
            <div className="container mx-auto">
                <h3 className="text-primary text-lg">{t("aboutUs.title")}</h3>
                <h2 className="text-3xl font-bold mt-2">{t("aboutUs.clinicName")}</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    {t("aboutUs.introText")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${index == 0 ? "" : " "} p-6 relative rounded-lg flex flex-col items-center text-center`}
                        >
                            {index !== 0 && (
                                <div className="md:h-36 h-[1px] w-52 md:w-[1px] bg-black/20 absolute lg:top-10 md:top-16  top-0  rtl:md:right-0 ltr:md:left-0"></div>
                            )}
                            <div className="text-4xl text-primary mb-4 bg-primary bg-opacity-10 p-4 rounded-full">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
