import React from 'react'

const ProjectCards = () => {
    return (
        <div>
            <div>
                <div className="relative overflow-hidden rounded-md">
                    <a href="/projects/vmr-travel-management">
                        <img src="/ujs_services_design.png" className="transition-transform duration-500 transform hover:scale-110 object-fill w-full h-full rounded-md">
                        </img>
                    </a>
                </div>
                <div>
                    <div className="flex justify-between items-baseline my-6">
                        <h2 className="uppercase font-medium text-base max-w-[60%] md:text-xl md:max-w-[70%]">VMR Travel Management</h2>
                        <div className="flex gap-2 items-center ">
                            <div className="w-[0.3rem] h-[0.3rem] bg-black rounded-full">
                            </div><p className="uppercase font-medium text-xs">P / 02</p>
                        </div>
                    </div>
                    <p className="text-gray-500 text-[15px] mb-16 max-w-[360px]">Elevating the global standard of corporate travel across continents.</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCards