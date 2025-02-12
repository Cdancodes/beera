
"use client";

import React from 'react';
import { BiSolidPlane } from "react-icons/bi";
import { AiOutlineReload } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { MdPrivacyTip } from "react-icons/md";

const Feature = () => {

    const data = [
        { icon: <BiSolidPlane className='w-10 h-10 text-defaultColor' />, title: "FREE TRAKCED DELIVERY" },
        { icon: <AiOutlineReload className='w-10 h-10 text-defaultColor' />, title: "QUICK RETURNS AND EXCHNAGE" },
        { icon: <BiSupport className='w-10 h-10 text-defaultColor' />, title: "24X7 CUSTOMER SERVICE" },
        { icon: <MdPrivacyTip className='w-10 h-10 text-defaultColor' />, title: "100% SECURE PAYMENT" },
    ]

    return (
        <div className='w-[80%] mx-auto overflow-hidden flex bg-goldMid py-5'>
            {data?.map((item, i) => (
                <div key={i} className='flex flex-col items-center justify-center w-full p-5 text-white space-y-4'>
                    <div>{item.icon}</div>
                    <h2 className='ml-5 text-xs text-defaultColor'>{item.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default Feature