
"use client"

import Image from 'next/image';
import React from 'react';

const Page = ({ img, title }) => {
    return (
        <div className="lg:w-[280px] bg-goldDark md:w-1/2 p-1 w-full hover:scale-105 transition-transform duration-200 hover:shadow-xl m-2">
            <a className="block relative h-50 rounded overflow-hidden">
                <Image
                    alt="ecommerce"
                    src={img}
                    layout='responsive'
                    height={100}
                    width={100}
                    className="object-cover object-center w-full h-full block" />
            </a>
            <div className="bg-goldDark border-t-4 border-yellow-500 p-4 flex justify-center">
                <h2 className="text-textColor text-sm tracking-widest title-font mb-1">
                    {title}
                </h2>
            </div>
        </div>
    )
}

export default Page