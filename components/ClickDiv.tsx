import React, { ReactNode, SetStateAction } from 'react'
import AnimationDiv from './AnimationDiv';
import { useTranslations } from 'next-intl';
import { IoMdClose } from 'react-icons/io';

function ClickDiv({ className, active, setActive, children }: { children: ReactNode, className?: string, active?: boolean; setActive?: React.Dispatch<SetStateAction<boolean>>; }) {
    const t = useTranslations();

    return (
        <div
            onClick={() => {
                console.log(1)
                setActive && setActive(false)
                console.log(active)
            }}
            className={`${className || ""
                } md:flex fixed   top-0 right-0   bg1 w-full h-screen z-[70] md:text-white text-black/80`}
        >
            <AnimationDiv
                initial={{ x: t("locale") == "ar" ? 100 : -100 }}
                transition={{ delay: 0.05, duration: 0.3 }}
                animate={{ x: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={`sm:w-[40%] md:w-[30%]  relative w-full  h-screen   bg-white `}
            >
                <div className="w-[90%] py-10  md:py-0  mx-auto z-10 flex flex-col md:font-normal md:text-base text-base font-semibold md:flex-row rtl:gap-8 ltr:gap-4 ">
                    {active && (
                        <AnimationDiv
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ delay: 0.8, duration: 0.3 }}
                            className="w-[40%] md:w-[30%]  fixed top-2 rtl:right-0 ltr:left-0 z-50 h-20 pointer-events-none  sm:block hidden "
                        >
                            <div className="w-[50%] rtl:mr-auto ltr:ml-auto h-full bg-white"></div>
                        </AnimationDiv>
                    )}
                    {active && (
                        <AnimationDiv
                            initial={{ opacity: 0, x: t("locale") == "ar" ? 50 : -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                            className={`rtl:right-[40%] ltr:left-[40%]  rtl:md:right-[30%] ltr:md:left-[30%] fixed top-5 hidden sm:block `}
                        >
                            <button
                                onClick={() => {
                                    setActive && setActive(false);
                                }}
                                className={`p-1 pr-2 rtl:rotate-0 rotate-180 rounded-l-full clos text-white `}
                            >
                                <IoMdClose className="w-6 h-6" />
                            </button>
                        </AnimationDiv>
                    )}

                    <div className="fixed top-5 rtl:left-5 ltr:right-5 z-50 flex justify-end sm:hidden">
                        <button
                            onClick={() => {
                                setActive && setActive(false);
                            }}
                            className="p-1 border rounded-full bg-danger text-white"
                        >
                            <IoMdClose className="w-6 h-6" />
                        </button>
                    </div>
                    <div className='z-[70] relative w-full'>
                        {children}
                    </div>
                </div>
            </AnimationDiv>
        </div>
    )
}

export default ClickDiv