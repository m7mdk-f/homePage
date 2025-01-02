"use client";

import DoctorCards from "@/components/DoctorCards";
import DoctursUs from "@/components/DoctursUs";
import ShowAll from "@/components/ShowAll";
import { Button } from "@/components/ui/button";
import { GrFormPrevious } from "react-icons/gr";
import { cardsData, doctors } from "../schema/db";
import Image from "next/image";
import ServicesSection from "@/components/ServicesSection";
import StatsCards from "@/components/StatCard";
import InsurancePartners from "@/components/InsurancePartners";
import ShowVideo from "@/components/ShowVideo";
import Card from "@/components/Card";
import FindMore from "@/components/FindMore";
import SearchSection from "@/components/SearchSection";
import AboutUsSection from "@/components/AboutUsSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import WorkingHours from "@/components/WorkingHours";
import { useTranslations } from "next-intl";
import Details from "@/components/Details";
import ButtonHover from "@/components/ButtonHover";
import { Link } from "@/navigation";



export default function Home() {
  let t = useTranslations();
  const locale = t("locale");
  t = useTranslations("home");

  return (
    <div>
      <SearchSection />
      <AboutUsSection />
      <DepartmentsSection />
      <div className="bg-primary sm:py-20 py-10 bg-opacity-[.05]">
        <div className="container">
          <ShowAll text={t("latestOffers")} />
          <Details text={t("doctorsDescription")} />
          <DoctorCards />
          <Link href="/Douctors">
            <Button variant="outline" className="group sm:hidden flex duration-500 w-full">
              {t("viewAll")}
              <GrFormPrevious className="relative group-hover:-translate-x-2 group-hover:text-white duration-500" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="py-20">
        <div className="container">
          <ShowAll text={t("ourDoctors")} />
          <Details text={t("doctorsDescription")} />
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 my-7">
            {(locale === "ar" || locale === "en") &&
              doctors[locale].slice(4, 8).map((item, index) => (
                <DoctursUs key={index} doctors={item} />
              ))}
          </div>
          <Link href="/Douctors">
            <Button variant="outline" className="group sm:hidden flex duration-500 w-full">
              {t("viewAll")}
              <GrFormPrevious className="relative group-hover:-translate-x-2 group-hover:text-white duration-500" />
            </Button>
          </Link>
        </div>
      </div>
      <div
        className="container py-20 bg-[#06133b]"
        style={{ backgroundImage: "url('/Images/background.png')" }}
      >
        <div className="lg:w-[95%] w-[90%] mx-auto lg:flex-row flex-col-reverse flex gap-20">
          <div className="w-full flex items-center">
            <div className="flex flex-col gap-6">
              <h1 className="rtl:sm:text-5xl ltr:text-4xl font-bold text-2xl text-white">
                {t("labOffers.title")}
              </h1>
              <p className="text-white/70  line-clamp-2 text-base  rtl:sm:text-lg lg:w-[90%]">
                {t("labOffers.description")}
              </p>
              <Link href="/offers">
                <ButtonHover className="w-40" text={t("labOffers.button")} />
              </Link>
            </div>
          </div>
          <div className="relative w-full h-96">
            <Image
              fill
              alt="Lab Offer Image"
              src="/Images/4.webp"
              className="object-cover rounded-tr-2xl rounded-bl-2xl z-10"
            />
            <div className="w-16 h-16 bg-primary absolute -top-4 sm:-left-6 -left-3"></div>
            <div className="w-12 h-12 bg-primary absolute -bottom-5 sm:-right-6 -right-3 z-0"></div>
          </div>
        </div>
      </div>

      <ServicesSection />
      <StatsCards />

      <InsurancePartners />
      <ShowVideo />
      <div className="container mx-auto py-12 pt-16">
        <ShowAll link="/blog" text={t("articlesAndNews")} />
        <Details text={t("doctorsDescription")} />
        <div className="grid grid-cols-1 py-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(locale === "ar" || locale === "en") && cardsData[locale].slice(0, 3).map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>

      <FindMore />
      <WorkingHours />
    </div>
  );
}
