import React from "react";
import HeaderDiv from "./HeaderDiv";
import { FaBriefcase, FaHandPointUp, FaHeartbeat, FaHistory, FaIdBadge, FaRegCalendarAlt } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import { useTranslations } from "next-intl";
import Details from "./Details";

const services = [
    {
        ar: {
            title: "العيادات الخارجية",
            description: "هذا النص هو مثال لنص يمكن أن يستبدل بنص آخر في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي",
        },
        en: {
            title: "Outpatient Clinics",
            description: "This is a sample text that can be replaced with another in the same space, generated from the Arabic text generator.",
        },
        icon: <FaHeartbeat className="text-2xl text-primary z-1" />,
    },
    {
        ar: {
            title: "الجراحة",
            description: "هذا النص هو مثال لنص يمكن أن يستبدل بنص آخر في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي",
        },
        en: {
            title: "Surgery",
            description: "This is a sample text that can be replaced with another in the same space, generated from the Arabic text generator.",
        },
        icon: <FaIdBadge className="text-2xl text-primary z-1" />,
    },
    {
        ar: {
            title: "الاستشارات الطبية",
            description: "هذا النص هو مثال لنص يمكن أن يستبدل بنص آخر في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي",
        },
        en: {
            title: "Medical Consultations",
            description: "This is a sample text that can be replaced with another in the same space, generated from the Arabic text generator.",
        },
        icon: <FaBriefcase className="text-2xl text-primary z-1" />,
    },
    {
        ar: {
            title: "التحاليل والمختبرات",
            description: "هذا النص هو مثال لنص يمكن أن يستبدل بنص آخر في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي",
        },
        en: {
            title: "Labs and Tests",
            description: "This is a sample text that can be replaced with another in the same space, generated from the Arabic text generator.",
        },
        icon: <FaRegCalendarAlt className="text-2xl text-primary z-1" />,
    },
    {
        ar: {
            title: "عمليات اليوم الواحد",
            description: "هذا النص هو مثال لنص يمكن أن يستبدل بنص آخر في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي",
        },
        en: {
            title: "One-Day Procedures",
            description: "This is a sample text that can be replaced with another in the same space, generated from the Arabic text generator.",
        },
        icon: <FaHistory className="text-2xl text-primary z-1" />,
    },
    {
        ar: {
            title: "النوادي الصحية",
            description: "هذا النص هو مثال لنص يمكن أن يستبدل بنص آخر في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي",
        },
        en: {
            title: "Health Clubs",
            description: "This is a sample text that can be replaced with another in the same space, generated from the Arabic text generator.",
        },
        icon: <FaHandPointUp className="text-2xl text-primary z-1" />,
    },
];

const ServicesSection: React.FC = () => {
    const t = useTranslations();
    const locale = t("locale");

    return (
        <section className="py-12">
            <div className="container">
                <HeaderDiv text={t("servece.header")} />
                <Details text={t("servece.description")} />
                <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(locale == "ar" || locale == "en") && services.map((service, index) => {
                        return <ServiceCard
                            key={index}
                            service={{
                                title: service[locale].title,
                                description: service[locale].description,
                                icon: service.icon,
                            }}
                        />
                    }
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
