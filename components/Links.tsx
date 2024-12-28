import Link from 'next/link'
import React, { ReactNode } from 'react'

function Links({ link, className, children }: { link: string, children: ReactNode, className?: string }) {
    return (
        <Link className={`${className || 'hover:opacity-80 '}  duration-300 rtl:text-base ltr:text-sm`} href={link}>{children}</Link>
    )
}

export default Links