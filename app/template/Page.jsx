
"use client";

import React from 'react';
import img1 from '@/public/assets/temimg.png';
import img2 from '@/public/assets/temimg2.png';
import Image from 'next/image';

const Page = () => {
    return (
        <section className="bg-defaultColor body-font flex justify-center">
            <div className="container px-5 py-10 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full justify-center">
                    <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 h-full">
                        <div className="relative flex items-center justify-center bg-black">
                            <div className="absolute inset-0">
                                <Image
                                    src={img2}
                                    alt="Background"
                                    layout="responsive"
                                    height={100}
                                    width={100}
                                    objectFit="cover"
                                    className="opacity-30"
                                />
                            </div>

                            <div className="relative z-10 w-[400px] bg-black/60 bg-opacity-65 p-10 rounded-lg max-w-lg text-center shadow-slate-500 top-20 left-11">
                                <h2 className="text-goldMid text-2xl font-bold mb-4 font-serif">OUR VALUES</h2>
                                <p className="text-textColor leading-5 text-xs">
                                    At Azzana, we believe that you deserve the best, and that you should not choose
                                    between quality, affordable prices, and real values.
                                </p>
                                <p className="text-white text-xs mt-4">
                                    Quality has never been so affordable thanks to our collection of more than 200
                                    minimalist jewels, ready to accompany you everywhere!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" >
                        <Image
                            src={img1}
                            alt="img"
                            width={100}
                            height={100}
                            layout='responsive'
                            className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page