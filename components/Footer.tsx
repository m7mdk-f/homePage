import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiSmartphone } from "react-icons/fi";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 text-gray-700">
            <div className="container mx-auto px-4 py-10">
                <div className="flex md:w-[75%] gap-7 sm:gap-0  sm:flex-row  flex-col justify-between  md:items-start">
                    <div className='flex flex-col gap-5'>
                        <div className=" md:text-right mb-6 md:mb-0 relative sm:w-64 w-full h-12">
                            <Image fill src='/Images/logo2.avif' className='object-contain' alt='' />
                        </div>
                        <p>متجر تجريبي - Demo Store</p>
                    </div>
                    {/* Links */}
                    <div className=" md:text-right mb-6 md:mb-0">
                        <h4 className="font-semibold text-base">روابط مهمة</h4>
                        <ul className=" space-y-5 mt-5 text-sm text-black/70">
                            <li>
                                <Link href="/" className="hover:text-black/50 duration-300">
                                    المدونة
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-black/50 duration-300">
                                    من نحن
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-black/50 duration-300">
                                    اتصل بنا
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-black/50 duration-300">
                                    احجز الآن
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className=" md:text-right">
                        <h4 className="font-semibold text-base">تواصل معنا</h4>
                        <p className="mt-5 hover:opacity-70 duration-300 cursor-pointer flex ">
                            <span className="inline-block ml-2 border-l-2  text-primary border-black/20 pl-2 ">
                                <FiSmartphone className='w-4 h-4 ' />
                            </span>
                            <span className="inline-block">8001111210</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
