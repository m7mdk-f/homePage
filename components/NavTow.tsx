import { Link } from '@/navigation';
import { useTranslations } from 'next-intl'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { GrFormPrevious } from 'react-icons/gr'

interface NavTowProps {

}
function NavTow({ currentPage, option, linkOption }: { currentPage: string; option?: string, linkOption?: string }) {
    const t = useTranslations()
    return (
        <nav className="container w-full py-3  sm:py-4">
            <ol className="flex items-center md:mt-5 gap-1 flex-wrap text-sm">
                <li>
                    <Link href="/" className='text-primary'>
                        <AiOutlineHome className='w-5 h-5' />
                    </Link>
                </li>

                <li>
                    <GrFormPrevious className='ltr:rotate-180 text-primary' />
                </li>
                <li>
                    {option && linkOption ? <Link href={linkOption} className='text-primary'>
                        {currentPage}
                    </Link> :
                        <span className=" opacity-70 text-gray-500">{currentPage}</span>}
                </li>
                {option && linkOption && <li>
                    <GrFormPrevious className='ltr:rotate-180 text-primary' />
                </li>}
                {option && linkOption && <li>
                    <span className=" opacity-70 text-gray-500">{option}</span>
                </li>}
            </ol>
        </nav>
    )
}

export default NavTow