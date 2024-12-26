import Link from 'next/link'
import React, { ReactNode } from 'react'

function Links({ link, className, children }: { link: string, children: ReactNode, className?: string }) {
    return (
        <Link className={`${className || 'hover:opacity-80 '}  duration-300`} href={link}>{children}</Link>
    )
}

export default Links