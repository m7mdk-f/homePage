import React from "react";
import HeaderDiv from "./HeaderDiv";
import { FaBriefcase, FaHandPointUp, FaHeartbeat, FaHistory, FaIdBadge, FaRegCalendarAlt } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const services = [
    {
        title: "العيادات الخارجية",
        description: "هذا النص هو مثال نص يمكن أن يستبدل بنص آخر في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي",
        icon: <FaHeartbeat className="feature-icon" />,
    },
    {
        title: "الجراحة",
        description: "هذا النص هو مثال نص يمكن أن يستبدل بنص آخر في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي",
        icon: <FaIdBadge className="text-2xl text-primary z-1" />,
    },
    {
        title: "الاستشارات الطبية",
        description: "هذا النص هو مثال نص يمكن أن يستبدل بنص آخر في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي",
        icon: <FaBriefcase className="text-2xl text-primary z-1" />,
    },
    {
        title: "التحاليل والمختبرات",
        description: "هذا النص هو مثال نص يمكن أن يستبدل بنص آخر في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي",
        icon: <FaRegCalendarAlt className="text-2xl text-primary z-1" />,
    },
    {
        title: "عمليات اليوم الواحد",
        description: "هذا النص هو مثال نص يمكن أن يستبدل بنص آخر في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي",
        icon: <FaHistory className="text-2xl text-primary z-1" />
        ,
    },
    {
        title: "النوادي الصحية",
        description: "هذا النص هو مثال نص يمكن أن يستبدل بنص آخر في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي",
        icon: <FaHandPointUp className="text-2xl text-primary z-1" />,
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section className="py-12">
            <div className="container ">
                <HeaderDiv text="خدماتنا" />
                <p className="text-gray-600 mb-10">
                    نتميز بالعديد من العيادات و الأطباء ذوي الكفاءة العالية لخدمتكم بشكل يرضيكم
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {services.map((service, index) => (
                        <ServiceCard service={service} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
