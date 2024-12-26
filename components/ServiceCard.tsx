import React, { ReactNode } from 'react'

function ServiceCard({ service }: { service: { title: string, icon: ReactNode, description: string } }) {
    return (
        <div
            className="bg-white hover:text-white text-black hover:bg-primary duration-300 gap-3 group flex shadow-md rounded-lg p-6 text-right  items-end"
        >
            <div className="text-4xl group-hover:bg-white duration-300 p-4 text-primary bg-primary bg-opacity-[.05] flex justify-center items-center  mb-4 rounded-full">
                {service.icon}
            </div>
            <div>
                <h3 className="sm:text-2xl text-lg font-semibold mb-2 ">{service.title}</h3>
                <p className="sm:text-base text-xs opacity-80 line-clamp-3">{service.description}</p>
            </div>
        </div>
    )
}

export default ServiceCard