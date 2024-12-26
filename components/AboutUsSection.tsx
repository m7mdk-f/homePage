"use client";

import { TbHeartbeat, TbMacro } from "react-icons/tb";
import { IoIosGitCompare } from "react-icons/io";

const AboutUsSection = () => {
    const features = [
        {
            icon: <TbHeartbeat />,
            title: "مميزات العيادة",
            description:
                "هذا النص هو مثال لنص يمكن أن يستبدل بنص آخر في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي.",
        },
        {
            icon: <IoIosGitCompare />,
            title: "أوقات العمل",
            description:
                "هذا النص هو مثال لنص يمكن أن يستبدل بنص آخر في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي.",
        },
        {
            icon: <TbMacro />,
            title: "فريق العمل",
            description:
                "هذا النص هو مثال لنص يمكن أن يستبدل بنص آخر في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي.",
        },
    ];

    return (
        <section className="py-16 px-6 bg-white text-center">
            <div className="container mx-auto">
                <h3 className="text-primary  text-lg">تعرف علينا</h3>
                <h2 className="text-3xl font-bold mt-2">نحن عيادات د. موسى ماهر الطبية</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    تمكنك سهولة بسيطة من البيع للعملاء الأفراد أو الشركات، من خلال نموذج مخصص تتم الموافقة عليه من قبل مدير المتجر.
                </p>
                <div className="grid grid-cols-1  md:grid-cols-3 gap-8 mt-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${index == 0 ? "" : " "} p-6  relative rounded-lg flex flex-col items-center text-center`}
                        >
                            {index !== 0 && <div className="md:h-36 h-[1px] w-52 md:w-[1px] bg-black/20 absolute md:top-10 top-0  md:right-0"></div>}
                            <div className="text-4xl text-primary mb-4 bg-primary bg-opacity-10 p-4  rounded-full">
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
