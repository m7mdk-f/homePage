import { Doctor, doctors } from "@/app/schema/db";
import React from "react";
import CardDoctor from "./CardDoctor";

const DoctorCards: React.FC = () => {
    return (
        <div className=" py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {doctors.slice(0, 6).map((doctor, index) => (
                    <CardDoctor doctors={doctor} key={index} />
                ))}
            </div>
        </div>
    );
};

export default DoctorCards;
