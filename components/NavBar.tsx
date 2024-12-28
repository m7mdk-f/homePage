"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { AiOutlineUser } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
import MibileNav from './MibileNav';
import DesctopNav from './DesctopNav';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Header from './Header';

function NavBar() {
  const [active, setActive] = useState(false)
  useEffect(() => {
    active ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden")
  }, [active])
  return (
    <>
      <Header />
      <nav className='bg-primary relative w-full  py-5'>
        <div className='container  flex  justify-between'>
          <div className='text-white md:hidden text-2xl flex sm:gap-3 '>
            <IoMenuSharp className='cursor-pointer sm:w-9 sm:h-9 ' onClick={() => { setActive(true) }} />
            <div className='relative h-full sm:w-40  w-28 scale-125 rtl:mr-5 ltr:ml-5 '>
              <Image fill alt='' src='/Images/logo.webp' className='object-contain  '></Image>
            </div>
          </div>
          <DesctopNav className='hidden md:flex' />
          <MibileNav active={active} setActive={setActive} className='flex md:hidden' />
          <div className='flex gap-7 text-white text-xl'>
            <AiOutlineUser className='text-2xl' />
            <div className="relative inline-block">
              <FaRegCalendarAlt />
              {(
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {0}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>

  )
}

export default NavBar