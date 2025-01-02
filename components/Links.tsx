import { Link } from '@/navigation'
import React, { ReactNode, SetStateAction } from 'react'

function Links({ link, className, children, setActive }: { setActive?: React.Dispatch<SetStateAction<boolean>>, link: string, children: ReactNode, className?: string }) {
    return (
        <Link className={`${className || 'hover:opacity-80 '}  duration-300 relative rtl:text-base ltr:text-sm`} href={link}>
            {children}
            <div className='w-full h-full top-0 left-0 absolute ' onClick={() => {
                console.log(1)
                setActive && setActive(false);
            }}></div>
        </Link>
    )
}

export default Links