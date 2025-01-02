import React, { ReactNode } from 'react'

export default function Continer({ children, title }: { title?: string, children: ReactNode }) {
    return (
        <div className='mt-12  '>
            <div className='rounded-lg border w-[95%] mb-20 shadow-md p-6 max-w-4xl mx-auto'>
                {title && <h2 className="text-xl  font-bold  mb-7">{title}</h2>}
                {children}
            </div>
        </div>
    )
}