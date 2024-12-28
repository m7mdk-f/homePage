import React from "react";
import { MdStorefront } from "react-icons/md";
import { useTranslations } from "next-intl";

interface StatCardProps {
    title: string;
    value: number | string;
    lastUpdated: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, lastUpdated }) => {
    return (
        <div className="p-6 py-10 bg-white overflow-hidden rounded-xl shadow-md text-center">
            <div className="flex justify-center items-center mb-4">
                <div className="bg-blue-100 p-5 rounded-full">
                    <MdStorefront className="text-2xl text-primary z-1" />
                </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-500 mt-2">{lastUpdated}</p>
        </div>
    );
};

const StatsCards: React.FC = () => {
    const t = useTranslations("stats");

    const stats = [
        { title: t("titleVisits"), value: 40000, lastUpdated: `${t("lastUpdated")}: ${t("dates.date2")}` },
        { title: t("titleDoctors"), value: 34, lastUpdated: `${t("lastUpdated")}: ${t("dates.date1")}` },
        { title: t("titleStaff"), value: 234, lastUpdated: `${t("lastUpdated")}: ${t("dates.date1")}` },
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
