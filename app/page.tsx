import DoctorCards from "@/components/DoctorCards";
import DoctursUs from "@/components/DoctursUs";
import HeaderDiv from "@/components/HeaderDiv";
import ShowAll from "@/components/ShowAll";
import { Button } from "@/components/ui/button";
import { GrFormPrevious } from "react-icons/gr";
import { doctors } from "./schema/db";
import Image from "next/image";
import ServicesSection from "@/components/ServicesSection";
import StatsCards from "@/components/StatCard";
import InsurancePartners from "@/components/InsurancePartners";

import { BsFillPlayFill } from "react-icons/bs";
import PodcastCard from "@/components/PodcastCard";
import ShowVideo from "@/components/ShowVideo";
import Card from "@/components/Card";
import FindMore from "@/components/FindMore";
import SearchSection from "@/components/SearchSection";
import AboutUsSection from "@/components/AboutUsSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import WorkingHours from "@/components/WorkingHours";

const cardsData = [
  {
    id: 1,
    image:
      "/Images/section1.webp",
    date: "الاثنين 24 يوليو 2023",
    title: "توليد هذا النص من مولد النص العربي هذا النص هو",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل بنص أخر فى نفس المساحة , لقد تم توليد هذا النص من مولد النص العربي هذا النص هو مثال لنص يمكن أن يستبدل بنص أخر فى نفس المساحة , لقد تم توليد هذا النص من مولد النص العربي هذا النص هو مثال لنص يمكن أن يستبدل بنص أخر فى نفس المساحة , لقد تم توليد هذا النص من مولد النص العربي",
    link: "#",
  },
  {
    id: 2,
    image:
      "/Images/section2.webp",
    date: "الثلاثاء 25 يوليو 2023",
    title: "هذا النص هو مثال لنص يمكن أن يستبدل بنص أخر",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل بنص أخر فى نفس المساحة , لقد تم توليد هذا النص من مولد النص العربي هذا النص هو مثال لنص يمكن أن يستبدل بنص أخر فى نفس المساحة , لقد تم توليد هذا النص من مولد النص العربي",
    link: "#",
  },
  {
    id: 3,
    image:
      "/Images/section3.webp",
    date: "الثلاثاء 25 يوليو 2023",
    title: "ما هي عمليات اليوم الواحد ؟",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل بنص أخر فى نفس المساحة , لقد تم توليد هذا النص من مولد النص العربي",
    link: "#",
  },
  {
    id: 4,
    image:
      "/Images/section4.webp",
    date: "الثلاثاء 25 يوليو 2023",
    title: "العيادات و الاطباء ذوو الكفاءة العالية لخدمتكم بشكل يرضيكم",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل بنص أخر فى نفس المساحة , لقد تم توليد هذا النص من مولد النص العربي",
    link: "#",
  },
];
export default function Home() {
  return (
    <div className=" ">
      <SearchSection />
      <AboutUsSection />

      <DepartmentsSection />
      <div className="bg-primary sm:py-20 py-10 bg-opacity-[.05]">
        <div className="container">
          <ShowAll text="أحدث العروض" />
          <p className="text-gray-400">نتميز بالعديد من العيادات و الاطباء ذوو الكفاءة العالية لخدمتكم بشكل يرضيكم</p>
          <DoctorCards />
          <Button variant="outline" className=" group sm:hidden flex  duration-500 w-full">
            عرض الكل
            <GrFormPrevious className="relative group-hover:-translate-x-2 group-hover:text-white duration-500 " />
          </Button>
        </div>
      </div>

      <div className=" py-20 ">
        <div className="container">
          <ShowAll text="أطبائنا" />
          <p className="text-gray-400">نتميز بالعديد من العيادات و الاطباء ذوو الكفاءة العالية لخدمتكم بشكل يرضيكم</p>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 my-7 ">
            {doctors.slice(4, 8).map((item, index) => {
              return <DoctursUs key={index} doctors={item} />
            })}
          </div>
          <Button variant="outline" className=" group sm:hidden flex  duration-500 w-full">
            عرض الكل
            <GrFormPrevious className="relative group-hover:-translate-x-2 group-hover:text-white duration-500 " />
          </Button>
        </div>
      </div>

      <div className="container py-20 bg-[#06133b]  " style={{ backgroundImage: "url('/Images/background.png')" }}>
        <div className="lg:w-[95%] w-[90%] mx-auto lg:flex-row  flex-col-reverse flex gap-20">
          <div className="w-full  flex  items-center">
            <div className="flex flex-col  gap-6 ">
              <h1 className="sm:text-5xl font-bold text-2xl  text-white ">عروض المختبرات الطبية..!</h1>
              <p className="text-white/70 line-clamp-2 text-base sm:text-lg lg:w-[90%]">تمتع بالعديد من العروض المختلفة من مختبراتنا للتأكد من صحتك اليوم..</p>
              <Button variant="default" className=" group  duration-500 w-40 ">
                تصفح العروض
                <GrFormPrevious className="relative group-hover:-translate-x-2 group-hover:text-white duration-500 " />
              </Button>
            </div>
          </div>
          <div className="relative w-full h-96">
            <Image fill alt="" src='/Images/4.webp' className="object-cover   rounded-tr-2xl rounded-bl-2xl z-10" />
            <div className="w-16 h-16 bg-primary absolute -top-4 sm:-left-6 -left-3"></div>
            <div className="w-12 h-12 bg-primary absolute -bottom-5 sm:-right-6 -right-3 z-0"></div>
          </div>
        </div>

      </div>

      <ServicesSection />

      <StatsCards />

      <InsurancePartners />

      <ShowVideo />

      <div className="container mx-auto  py-12 pt-16">
        <ShowAll text="المقالات والاخبار" />
        <p className="text-gray-400 py-2">نتميز بالعديد من العيادات و الاطباء ذوو الكفاءة العالية لخدمتكم بشكل يرضيكم</p>
        <div className="grid grid-cols-1 py-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.slice(0, 3).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <FindMore />
      <WorkingHours />
    </div>
  );
}
