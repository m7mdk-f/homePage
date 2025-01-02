"use client"

import React, { useEffect, useRef, useState } from "react"
import { AiOutlineUser } from "react-icons/ai"
import Toggle from "./Toggle"
import { useAppContext } from "@/app/Context/AppContext"
import { Button } from "./ui/button"
import { useTranslations } from "next-intl"
import { GrFormNextLink } from "react-icons/gr"

function Loginuser() {
    const { users, toggleUser } = useAppContext()
    const InputRef = useRef<HTMLInputElement>(null)
    const [checed, setCheced] = useState(true)
    const [showVerificationSection, setShowVerificationSection] = useState(false)
    const [email, setEmail] = useState("")
    let t = useTranslations("loginpage")
    const [seconds, setSeconds] = useState<number>(30);
    const [isActive, setIsActive] = useState<boolean>(true);

    useEffect(() => {
        setSeconds(30)
    }, [showVerificationSection])

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isActive && seconds > 0) {
            timer = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        } else if (seconds === 0) {
            setIsActive(false);
        }

        return () => clearInterval(timer);
    }, [isActive, seconds]);

    const handleLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (InputRef.current) {
            const isValidEmail = emailRegex.test(InputRef.current.value)
            setCheced(isValidEmail)

            if (isValidEmail) {
                setEmail(InputRef.current.value);
                setShowVerificationSection(true)
            }
        }
    }

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number,
        inputs: React.RefObject<HTMLInputElement>[]
    ) => {
        const value = e.target.value
        if (!/^\d$/.test(value)) {
            e.target.value = ""
            return
        }
        if (inputs[index - 1]?.current) {
            inputs[index - 1].current?.focus()
        }
    }

    const inputs = Array.from({ length: 4 }, () => React.createRef<HTMLInputElement>())

    return (
        <Toggle title="" toggleDarkMode={toggleUser} ShowSection={users}>

            <form onSubmit={(e) => e.preventDefault()} className={`max-h-screen relative duration-300 flex flex-col gap-3`}>
                <div className="flex gap-2 items-center justify-center">
                    <div className="border md:p-7 p-2 rounded-full">
                        <AiOutlineUser className="w-8 h-8 text-black/50" />
                    </div>
                </div>
                {showVerificationSection && <div onClick={() => setShowVerificationSection(false)} className="absolute cursor-pointer -top-6 rounded-full text-2xl p-2 ltr:rotate-180 rtl:rotate-0 bg-gray-100 ltr:left-0 rtl:right-0">
                    <GrFormNextLink />
                </div>}
                <h1 className="text-center text-lg font-semibold">{t("login")}</h1>
                {!showVerificationSection ? <>
                    <div className="flex flex-col gap-3">
                        <h1>{t("email")}</h1>
                        <div>
                            <input
                                type="text"
                                dir="ltr"
                                onChange={() => setCheced(true)}
                                ref={InputRef}
                                placeholder={t("email_placeholder")}
                                className={`${checed ? "border" : "border-danger border"} w-full p-2 text-sm outline-0 focus:border-primary text-left rounded-lg focus:ring-primary`}
                            />
                            <p
                                className={`${checed ? "opacity-0" : "opacity-100"} duration-300 text-danger text-sm mt-0.5`}
                            >
                                {t("incorrect_email")}
                            </p>
                        </div>
                    </div>
                    <Button onClick={handleLogin}>{t("login")}</Button>
                </>
                    :
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-center">
                            <p className="text-gray-500 text-center ltr:text-sm rtl:text-base mx-auto rtl:md:w-3/4 ">
                                {t("verification_required")}
                                {t("verification_sent")}
                                <br />
                            </p>
                            <span className="text-black text-sm font-bold">{email}</span>
                        </div>
                        <div className="flex ltr:flex-row-reverse gap-2 w-full">
                            {inputs.map((inputRef, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    dir="ltr"
                                    maxLength={1}
                                    ref={inputRef}
                                    onChange={(e) => handleInputChange(e, index, inputs)}
                                    className="w-full h-10 text-center border rounded-lg focus:outline-primary focus:ring-primary text-lg font-semibold"
                                />
                            ))}
                        </div>
                        <Button className="w-full">{t("check_code")}</Button>
                        {!isActive ? <button className="w-full">{t("send")}</button> :
                            <p className="text-gray-400 text-sm mt-2">
                                {t("send_code_after")}{" "}
                                <span className="text-primary font-semibold">
                                    {`00:${seconds.toString().padStart(2, "0")}`}
                                </span>
                            </p>
                        }
                    </div>}
            </form>

        </Toggle>
    )
}

export default Loginuser
