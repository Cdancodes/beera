
"use client";

import React from 'react';
import img1 from '@/public/assets/jimg1.png';
import img2 from '@/public/assets/jimg2.png';
import img3 from '@/public/assets/jimg3.png';
import img4 from '@/public/assets/jimg4.png';
import img5 from '@/public/assets/jimg5.png';
import img6 from '@/public/assets/jimg6.png';
import img7 from '@/public/assets/jimg7.png';
import img8 from '@/public/assets/jimg8.png';
import Card from '../components/cards/Page';
import Left from '@/public/assets/left.png';
import Right from '@/public/assets/right.png';
import Image from 'next/image';

const Page = () => {

  const data = [
    { img: img1, title: 'NECKLACE MURATO' },
    { img: img2, title: 'NECKLACE MURATO' },
    { img: img3, title: 'NECKLACE MURATO' },
    { img: img4, title: 'NECKLACE MURATO' },
    { img: img5, title: 'NECKLACE MURATO' },
    { img: img6, title: 'NECKLACE MURATO' },
    { img: img7, title: 'NECKLACE MURATO' },
    { img: img8, title: 'NECKLACE MURATO' }
  ]

  return (
    <section className="text-gray-600 body-font bg-defaultColor flex justify-center">
      <div className="flex flex-col justify-center container px-5 py-24 mx-auto space-y-5">

        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="text-sm font-medium title-font mb-2 text-goldMid">FREE SHIPPING FR</h1>
          <p className="lg:w-1/2 text-2xl font-bold text-textColor w-full leading-relaxed flex justify-center items-center">
            <div>
              <Image
                src={Left}
                alt="left-img"
                height={100}
                width={100}
                layout='responsive' />
            </div>
            <span className='mx-3'> The BestSellers </span>
            <div>
              <Image
                src={Right}
                alt="left-img"
                height={100}
                width={100}
                layout='responsive' />
            </div>
          </p>
        </div>

        <div className="flex flex-wrap -m-2 gap-4 justify-center">
          {data?.map((item, i) => (
            <Card key={i} img={item.img} title={item.title} />
          ))}
        </div>

        <button
          className='bg-goldMid text-defaultColor mx-auto font-semibold font-serif px-8 py-2'
        >
          See All jwellery
        </button>

      </div>
    </section>
  )
}

export default Page