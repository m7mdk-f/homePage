"use client";
import { useState } from "react";
import Selected from "./Selected";
import { Button } from "./ui/button";
import ButtonHover from "./ButtonHover";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

const SearchSection = () => {
    const [branch, setBranch] = useState<string | null>(null);
    const [department, setDepartment] = useState<string | null>(null);

    const t = useTranslations()
    const branchOptions = [
        { value: "branch1", label: { ar: "الفرع الرئيسي", en: "Main Branch" } },
        { value: "branch2", label: { ar: "فرع مكة", en: "Makkah Branch" } },
        { value: "branch3", label: { ar: "فرع المدينة المنورة", en: "Madinah Branch" } },
    ];
    const departmentOptions = [
        { value: "department1", label: { ar: "قسم الأطفال", en: "Pediatrics" } },
        { value: "department2", label: { ar: "قسم حديثي الولادة", en: "Neonatal" } },
        { value: "department3", label: { ar: "قسم الأنف والأذن", en: "ENT" } },
        { value: "department4", label: { ar: "قسم النساء والولادة", en: "Gynecology & Obstetrics" } },
    ];

    const timeOptions = [
        { value: "time1", label: { ar: "موعد 1", en: "Appointment 1" } },
        { value: "time2", label: { ar: "موعد 2", en: "Appointment 2" } },
    ];
    const locale = t("locale");
    const getLabel = (option: { label: { ar: string; en: string } }) => option.label[locale as "ar" | "en"];

    return (
        <div className="bg-[#f3f7ff] mt-10" style={{ backgroundImage: 'url("/Images/mainbg.png")' }}>
            <section className="flex flex-col-reverse container items-center justify-center ltr:gap-4   md:flex-row-reverse md:py-28 px-6 py-10  md:justify-between">
                <div className="bg-white p-6 rounded-[10px] shadow-md ltr:w-full rtl:w-full max-w-sm">
                    <h2 className="text-xl font-bold text-black/60  mb-6">{t("searchForDoctor.search")}</h2>
                    <div className="space-y-4">
                        <Selected
                            label={t("selectBranch")}
                            options={branchOptions.map((option) => ({
                                value: option.value,
                                label: getLabel(option),
                            }))}
                            value={branch}
                            onChange={(value) => {
                                setBranch(value);
                                setDepartment(null);
                            }}
                            placeholder={t("selectBranch")}
                        />
                        <Selected
                            label={t("selectDepartment")}
                            options={departmentOptions.map((option) => ({
                                value: option.value,
                                label: getLabel(option),
                            }))}
                            value={department}
                            onChange={setDepartment}
                            disabled={!branch}
                            placeholder={t("selectBranchFirst")}
                        />
                        <Selected
                            label={t("selectTime")}
                            options={timeOptions.map((option) => ({
                                value: option.value,
                                label: getLabel(option),
                            }))}
                            value={null}
                            onChange={() => { }}
                            disabled={!department}
                            placeholder={t("selectDepartmentFirst")}
                        />
                        <button
                            disabled={!department}
                            className={`${!department && "opacity-50"} w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600`}>
                            {t("searchButton")}
                        </button>
                    </div>
                </div>

                {/* Right side - Info */}
                <div className="mt-8 md:mt-0 rtl:md:ml-12 rtl:lg:w-[45%] ltr:lg:w-[50%] md:h-1/2 ltr:sm:w-full  rtl:sm:w-[60%] w-full text-center ltr:md:text-left rtl:md:text-right">
                    <h1 className="rtl:lg:text-[40px] rtl:md:text-3xl ltr:text-xl sm:text-2xl text-xl font-semibold lg:leading-normal">
                        {t("searchForDoctor.titleInfo")}
                    </h1>
                    <p className="text-gray-600 text-lg mt-4 lg:max-w-md">
                        {t("searchForDoctor.description")}
                    </p>
                    <Link href="/DepartMext/dermatology">
                        <ButtonHover text={t("searchForDoctor.learnMoreButton")} style="default" className="py-4 px-6 my-6" />
                    </Link>
                </div>

            </section>
        </div>

    );
};

export default SearchSection;
