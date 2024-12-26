import React from "react";
import { MdStorefront } from "react-icons/md";

interface StatCardProps {
    title: string;
    value: number | string;
    lastUpdated: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, lastUpdated }) => {
    return (
        <div className=" p-6 py-10 bg-white overflow-hidden  rounded-xl shadow-md text-center">
            <div className="flex justify-center items-center mb-4">
                <div className="bg-blue-100 p-5  rounded-full">
                    <MdStorefront className="text-2xl text-primary z-1" />
                </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-500 mt-2">آخر تحديث: {lastUpdated}</p>
        </div>
    );
};

const StatsCards: React.FC = () => {
    const stats = [
        { title: "عدد الزيارات", value: 40000, lastUpdated: "آخر تحديث شثسبشسيب" },
        { title: "عدد الأطباء", value: 34, lastUpdated: "الثلاثاء 30 نوفمبر 2024" },
        { title: "عدد طاقم العمل", value: 234, lastUpdated: "الثلاثاء 30 نوفمبر 2024" },
    ];

    return (
        <div className="container bg-primary rounded-xl bg-opacity-[.05]">
            <div className="grid w-[90%] mx-auto py-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        lastUpdated={stat.lastUpdated}
                    />
                ))}
            </div>
        </div>
    );
};

export default StatsCards;
