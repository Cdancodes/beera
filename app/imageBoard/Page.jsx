
"use client";

import React from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import img1 from "@/public/assets/jimg1.png";
import img6 from "@/public/assets/jimg6.png";
import img7 from "@/public/assets/jimg7.png";
import Neck from "@/public/assets/neck.png";
import Bangle from "@/public/assets/bangle.png";
import Image from 'next/image';
import { BiSolidPlane, BiSupport } from 'react-icons/bi';
import { AiOutlineReload } from 'react-icons/ai';
import { MdPrivacyTip } from 'react-icons/md';
import bgIMage from "@/public/assets/tap.png";


const ImageBoard = () => {


    const data = [
        { icon: <BiSolidPlane className='w-10 h-10 text-defaultColor' />, title: "FREE TRAKCED DELIVERY" },
        { icon: <AiOutlineReload className='w-10 h-10 text-defaultColor' />, title: "QUICK RETURNS AND EXCHNAGE" },
        { icon: <BiSupport className='w-10 h-10 text-defaultColor' />, title: "24X7 CUSTOMER SERVICE" },
        { icon: <MdPrivacyTip className='w-10 h-10 text-defaultColor' />, title: "100% SECURE PAYMENT" },
    ]

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container mx-auto relative">
                <div className="flex flex-wrap -m-4">
                    <div className="flex flex-col lg:w-1/2 bg-[#F6F4F2]">
                        <div className="h-full flex flex-col space-y-4 py-[8%] px-[9%]">
                            <p className='text-goldMid'>FREE SHIPPING FR</p>
                            <h1 className='text-defaultColor font-serif text-3xl font-semibold leading-7'>The BestSellers</h1>
                            <p className='text-sm text-slate-400 font-thin leading-6 break-words'>
                                At Azzana, we believe that you deserve the best, and that you should
                                not choose between quality, affordable prices,and real values.At Azzana,
                                we believe that you deserve the best, and that you should not choose
                                between quality, affordable prices, and real values. At Azzana, we believe
                                that you deserve the best.
                            </p>
                            <div className='flex space-x-2'>
                                <span className='text-goldMid text-xs'>VIEW</span>
                                <HiOutlineArrowNarrowRight className='text-goldMid' />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full lg:w-1/2 bg-slate-300">
                        <Image src={img1} alt="img" layout='responsive' className='w-[200px]' width={100} height={100} />
                        <Image src={img7} alt="img" layout='responsive' width={100} height={100} />
                    </div>
                    <div className="w-full lg:w-1/2 bg-slate-400">
                        <Image src={Bangle} alt="img" layout='responsive' height={100} width={100} />
                    </div>
                    <div className="w-full flex lg:w-1/2 bg-slate-100">
                        <Image src={img6} alt="img" layout='responsive' className='w-[200px]' width={100} height={100} />
                        <Image src={Neck} alt="img" layout='responsive' width={100} height={100} />
                    </div>
                </div>

                {/* Golden Section - Placed Above */}
                <div className="absolute flex justify-center top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] mx-auto overflow-hidden py-5 z-10">
                    {/* Background Image */}
                    <Image
                        src={bgIMage}
                        alt="Background Image"
                        layout="responsive"
                        height={100}
                        width={100}
                        objectFit="cover"
                        className="absolute top-0 left-0 w-full h-full z-[-1]"
                    />

                    {data?.map((item, i) => (
                        <div key={i} className="flex items-center">
                            <div className="flex flex-col items-center justify-center w-full p-5 text-white space-y-4">
                                <div>{item.icon}</div>
                                <h2 className="mx-auto text-xs text-defaultColor">{item.title}</h2>
                            </div>

                            {i !== data.length - 1 && (
                                <div className="h-20 w-[1px] bg-white mx-2"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default ImageBoard