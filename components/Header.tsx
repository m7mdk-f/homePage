import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import LangageLocation from "./LangageLocation";

const Header = () => {
    return (
        <header className="bg-white pt-4 pb-3 md:block hidden">
            <div className=" container shadow-sm p-4 flex items-center gap-7 ">
                {/* Left Section */}
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className=" md:text-right mb-6 md:mb-0 relative sm:w-64 w-full h-12">
                        <Image fill src='/Images/logo2.avif' className='object-contain' alt='' />
                    </div>
                </div>
                <div className="flex-1 mx-4">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full py-3 px-9 border border-gray-300 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="ابحث عن قسم ، موعد .."
                        />
                        <span className="absolute top-2.5 right-3 text-gray-400">
                            <IoIosSearch className="text-2xl" />
                        </span>
                    </div>
                </div>

                {/* Right Section */}
                <LangageLocation />
            </div>
        </header>
    );
};

export default Header;
