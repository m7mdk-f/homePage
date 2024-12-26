"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'

function LangageLocation({ className }: { className?: string }) {
    const [selectedBranch, setSelectedBranch] = useState("main");

    return (
        <div className={`${className} flex items-center space-x-4 rtl:space-x-reverse`}>

            <div className="flex items-center space-x-2 rtl:space-x-reverse border-l pl-3">
                <div className="w-6 items-center flex h-4 rounded-sm overflow-hidden relative">
                    <Image fill src="/Images/lang1.webp" alt="" className="object-cover" />
                </div>
                <span className="text-xs font-semibold">العربية</span>
            </div>
            <div className="flex gap-2 text-sm">
                <span>ر.س</span>
                <CiLocationOn className="text-base mt-0.5" />
                <span className='line-clamp-1'>الفرع الرئيسي</span>
            </div>

{/* 
            <div className="fixed  flex items-center justify-center w-screen h-screen top-0 left-0 bg-black z-[60]">
                <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
                    <button
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                        onClick={() => console.log("Close modal")}
                    >
                        &times;
                    </button>
                    <h2 className="text-lg font-medium mb-4">التسوق من فرع آخر</h2>
                    <form>
                        {[
                            { id: "main", label: "الفرع الرئيسي" },
                            { id: "makkah", label: "فرع مكة" },
                            { id: "madinah", label: "فرع المدينة المنورة" },
                        ].map((branch) => (
                            <div key={branch.id} className="flex items-center mb-3">
                                <input
                                    type="radio"
                                    id={branch.id}
                                    name="branch"
                                    value={branch.id}
                                    checked={selectedBranch === branch.id}
                                    onChange={(e) => setSelectedBranch(e.target.value)}
                                    className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <label
                                    htmlFor={branch.id}
                                    className="ml-2 text-gray-700 cursor-pointer"
                                >
                                    {branch.label}
                                </label>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                            onClick={() => console.log("Confirm Selection:", selectedBranch)}
                        >
                            تأكيد
                        </button>
                    </form>
                </div>
            </div> */}
        </div>
    )
}

export default LangageLocation