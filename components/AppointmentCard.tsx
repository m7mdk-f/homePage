import Image from "next/image";
import Slider from "./Slider/Slider";
import { CiCamera, CiHeart, CiShare2 } from "react-icons/ci";
import DivFav from "./DivFav";
import { IoScan } from "react-icons/io5";
import PodcastCard from "./PodcastCard";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import AddNotise from "./AddNotise";
import { IoIosLink } from "react-icons/io";
import { Button } from "./ui/button";
import { Doctor } from "@/app/schema/db";
import { useTranslations } from "next-intl";

const AppointmentCard = ({ doctor }: { doctor: Doctor }) => {
    const t = useTranslations("AppointmentCard");

    const [active, setActive] = useState(false);
    const [selectedImage, setSelectedImage] = useState(doctor.image[0]);
    const [imageList, setImageList] = useState<string[]>([]);
    const [showNotes, setShowNotes] = useState(false);
    const [showFileUpload, setShowFileUpload] = useState(false);

    useEffect(() => {
        const filteredImages = doctor.image.filter((item) => item !== selectedImage);
        filteredImages.unshift(selectedImage);
        setImageList(filteredImages);
    }, [selectedImage, doctor.image]);

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
        setActive(true);
    };

    return (
        <div className="flex flex-col md:flex-row items-start gap-5 lg:mt-10">
            <PodcastCard setVideo={setActive} video={active}>
                <div onClick={(e) => e.stopPropagation()} className=" max-w-lg max-h-[500px]  bg-primary/5  h-full w-full ">
                    {doctor.image.length > 1 ? (
                        <Slider
                            secend
                            classButton="bg-black/70 text-white p-1 w-12 h-12"
                            iconClass="text-2xl w-10 h-10"
                            goback
                            containerclass="h-full w-full"
                            className="h-full w-full"
                            divcontainSlid
                        >
                            {imageList.map((item, index) => (
                                <div key={index} className=" w-full h-full relative">
                                    <Image
                                        src={item}
                                        alt={`Image ${index}`}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <div className="w-full relative h-full">
                            <Image fill alt="Doctor" className="object-contain" src={selectedImage} />
                        </div>
                    )}
                </div>
            </PodcastCard>

            <div className="md:sticky top-14 h-[450px] w-full md:w-2/5 lg:w-[410px]">
                <div
                    className={`${doctor.image.length > 1 ? "bg-gray-100 border" : ""} relative w-full h-[90%] pt-2`}
                >
                    {doctor.image.length > 1 ? (
                        <Slider divcontainSlid classButton="bg-transparent" iconClass="w-8 h-8 text-black/70">
                            {doctor.image.map((item, index) => (
                                <div key={index} className="w-full relative h-96">
                                    <Image src={item} alt={t("doctorImageAlt", { index })} fill className="object-contain" />
                                    <div
                                        onClick={() => handleImageClick(item)}
                                        className="w-full h-full absolute top-0 left-0 flex justify-start items-end cursor-pointer"
                                    >
                                        <div className="bg-white rounded-full p-2 m-3">
                                            <IoScan className="w-6 h-6 hover:scale-110 duration-300" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <div className="w-full relative h-96">
                            <Image src={selectedImage} alt="cd" fill className="object-cover" />
                            <div
                                onClick={() => handleImageClick(selectedImage)}
                                className="w-full h-full absolute top-0 left-0 flex justify-start items-end cursor-pointer"
                            >
                                <div className="bg-white rounded-full p-2 m-3">
                                    <IoScan className="w-6 h-6 hover:scale-110 duration-300" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex w-full mt-3 items-center justify-center gap-2.5">
                    <DivFav text={t("addToFavorites")} icon={<CiHeart className="w-5 h-5" />} />
                    <DivFav text={t("share")} icon={<CiShare2 className="w-5 h-5" />} />
                </div>
            </div>

            {/* Right: Details Section */}
            <div className="sticky top-24 w-full flex-1 border p-5 rounded flex flex-col gap-3">
                {/* Doctor Info */}
                <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        {doctor.Specialization} {doctor.name}
                    </h1>
                    <h3 className="text-black/50 font-medium">{doctor.department}</h3>
                </div>

                {/* Price and Rating */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-col gap-2">
                        <div className="text-black/70 text-xl font-bold">
                            {doctor.price} {t("currency")}
                        </div>
                    </div>
                    <div className="flex items-center gap-0.5 text-gray-300">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} />
                        ))}
                    </div>
                </div>
                <p className="text-black/30 text-sm">{t("description")}</p>

                {/* Notes and File Upload */}
                <div className="border rounded-lg p-3">
                    <div className="mx-auto flex flex-col gap-4">
                        <p className="text-[13px] font-bold text-black/70">{t("attachments")}</p>
                        <div className="flex justify-between gap-3">
                            <AddNotise
                                onClick={() => setShowNotes(!showNotes)}
                                text={t("addNote")}
                                icon={<BiMessageAltDetail className="text-base mt-0.5" />}
                            />
                            <AddNotise
                                onClick={() => setShowFileUpload(!showFileUpload)}
                                text={t("attachFile")}
                                icon={<IoIosLink className="text-base mt-0.5" />}
                            />
                        </div>
                        <div className={`${showNotes ? "max-h-32" : "max-h-0"} overflow-hidden duration-300`}>

                            <textarea
                                className={` focus:outline-primary w-full border h-32 rounded-lg p-3 bg-black/5 text-black focus:ring-primary`}
                                placeholder={t("addNotePlaceholder")}
                            />
                        </div>

                        <div className={`${showFileUpload ? "max-h-32" : "max-h-0"} overflow-hidden duration-300`}>
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100">
                                <div className="flex flex-col items-center justify-center pt-5 text-gray-700 text-base pb-6">
                                    <CiCamera className="w-6 h-6" />
                                    <p>{t("dropFileHere")}</p>
                                    <p className="text-gray-500">
                                        <u>{t("browse")}</u>
                                    </p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>
                </div>

                <Button className="w-full" variant="default">
                    {t("bookNow")}
                </Button>
            </div>
        </div>
    );
};

export default AppointmentCard;
