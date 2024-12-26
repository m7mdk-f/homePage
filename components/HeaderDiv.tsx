import React from 'react'

function HeaderDiv({ text, className }: { className?: string, text: string }) {
  return (
    <h1 className='text-black  font-bold before:h-2 before:w-[50%] before:z-10 md:text-4xl sm:text-2xl text-xl  inline-block before:bg-primary before:absolute before:bottom-1 before:bg-opacity-30 before:right-0 relative before:duration-500 before:hover:w-[90%]  '>
      {text}
    </h1>
  )
}

export default HeaderDiv