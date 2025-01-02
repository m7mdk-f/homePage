import React, { ReactElement } from 'react'
import { CiHeart } from 'react-icons/ci'

function DivFav({ icon, text }: { icon: ReactElement, text: string }) {
    return (
        <div className='flex items-center gap-2 text-gray-500'>
            <div className='rounded-full border p-2 '>
                {icon}
            </div>
            <h1 className='line-clamp-1'>
                {text}
            </h1>
        </div>
    )
}

export default DivFav