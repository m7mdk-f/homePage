"use client";
import { useState } from "react";
import Selected from "./Selected";
import { Button } from "./ui/button";
import ButtonHover from "./ButtonHover";

const SearchSection = () => {
    const [branch, setBranch] = useState<string | null>(null);
    const [department, setDepartment] = useState<string | null>(null);

    const branchOptions = [
        { value: "branch1", label: "الفرع الرئيسي" },
        { value: "branch2", label: "فرع مكة" },
        { value: "branch3", label: "فرع المدينة المنورة" },
    ];

    const departmentOptions = [
        { value: "department1", label: "قسم الأطفال" },
        { value: "department2", label: "قسم حديثي الولادة" },
        { value: "department3", label: "قسم الأنف والأذن" },
        { value: "department4", label: "قسم النساء والولادة" },
    ];

    const timeOptions = [
        { value: "time1", label: "موعد 1" },
        { value: "time2", label: "موعد 2" },
    ];

    return (
        <div className="bg-[#f3f7ff] mt-10" style={{ backgroundImage: 'url("/Images/mainbg.png")' }}>
            <section className="flex flex-col-reverse container items-center justify-center   md:flex-row-reverse py-28 px-6  md:justify-between">
                <div className="bg-white p-6 rounded-[10px] shadow-md w-full max-w-sm">
                    <h2 className="text-xl font-bold text-black/60  mb-6">ابحث عن طبيب</h2>
                    <div className="space-y-4">
                        <Selected
                            label="اختر الفرع"
                            options={branchOptions}
                            value={branch}
                            onChange={(value) => {
                                setBranch(value);
                                setDepartment(null);
                            }}
                        />
                        <Selected
                            label="اختر القسم"
                            options={departmentOptions}
                            value={department}
                            onChange={setDepartment}
                            disabled={!branch}
                            placeholder="اختر الفرع أولاً"
                        />
                        <Selected
                            label="اختر الموعد"
                            options={timeOptions}
                            value={null}
                            onChange={() => { }}
                            disabled={!department}
                            placeholder="اختر القسم أولاً"
                        />
                        <button className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
                            بحث
                        </button>
                    </div>
                </div>

                {/* Right side - Info */}
                <div className="mt-8 md:mt-0 md:ml-12 lg:w-[45%] md:h-1/2 sm:w-[60%]  w-full text-center md:text-right">
                    <h1 className="lg:text-[40px] md:text-3xl sm:text-2xl text-xl  font-semibold lg:leading-normal">عيادات د. موسى ماهر الطبية لزراعة وتجميل الأسنان</h1>
                    <p className="text-gray-600 text-lg  mt-4 lg:max-w-md">
                        نعتني بكم في كل وقت وزمان. تمتع اليوم بتجربة حجز سهلة وسريعة لراحتكم.
                    </p>
                    <ButtonHover text="اكتشف المزيد" style="default" className="py-4 px-6 my-6 " />
                </div>
            </section>
        </div>

    );
};

export default SearchSection;
