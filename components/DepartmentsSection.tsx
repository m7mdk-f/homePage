import Image from "next/image";
import DivHover from "./DivHover";
import ShowAll from "./ShowAll";
import HeaderDiv from "./HeaderDiv";

const DepartmentsSection = () => {
    const departments = [
        { name: "قسم العيون", imageUrl: "/images/section1.webp" },
        { name: "قسم الجلدية", imageUrl: "/images/section1.webp" },
        { name: "قسم الأطفال", imageUrl: "/images/section1.webp" },
        { name: "قسم الباطنة", imageUrl: "/images/section1.webp" },
    ];

    return (
        <section className="sm:mb-40 mb-10 ">
            <div className="container  mx-auto lg:h-screen sm:h-[50vh]  h-auto">
                <HeaderDiv  text="أبرز الأقسام" />
                <div className="grid mt-10 h-full sm:grid-rows-2 sm:grid-cols-3 grid-cols-1 lg:gap-6 gap-3">
                    <div className=" bg-center relative overflow-hidden  w-full sm:h-full h-40 rounded-xl  group" style={{ backgroundImage: 'url("/Images/back1.webp")', backgroundSize: "cover" }} >
                        <DivHover text="قسم الجلدية" />
                    </div>
                    <div className="  bg-center relative overflow-hidden group sm:h-full h-40 rounded-xl w-full" style={{ backgroundImage: 'url("/Images/back2.webp")', backgroundSize: "cover" }}>
                        <DivHover text="قسم العيون" />
                    </div>
                    <div className="bg-center relative overflow-hidden group sm:row-span-2 sm:h-full h-40 rounded-xl w-full" style={{ backgroundImage: 'url("/Images/back4.webp")', backgroundSize: "cover" }} >
                        <DivHover text="قسم الباطنة" />
                    </div>
                    <div className="bg-center relative overflow-hidden group sm:col-span-2  sm:h-full h-40 rounded-xl w-full" style={{ backgroundImage: 'url("/Images/back3.webp")', backgroundSize: "cover" }} >
                        <DivHover text="الطب النفسي" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DepartmentsSection;
