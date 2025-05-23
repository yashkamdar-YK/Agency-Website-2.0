'use client'
import React from 'react'

const ProjectCards = ({imageUrl,title,projectNo,description}) => {
    console.log({ imageUrl, title, projectNo, description });
    return (
        <div>
            <div>
                <div className="relative overflow-hidden rounded-md">
                    <img
                        src={imageUrl}
                        className="transition-transform duration-500 transform hover:scale-110 object-fill w-full h-full rounded-md">
                    </img>
                </div>
                <div>
                    <div className="flex justify-between items-baseline my-6">
                        <h2 className="uppercase font-medium text-base max-w-[60%] md:text-xl md:max-w-[70%]">{title}</h2>
                        <div className="flex gap-2 items-center ">
                            <div className="w-[0.3rem] h-[0.3rem] bg-black rounded-full">
                            </div><p className="uppercase font-medium text-xs">{projectNo}</p>
                        </div>
                    </div>
                    <p className="text-gray-500 text-[15px] mb-16 max-w-[360px]">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCards