
"use client";

import React from 'react';
import CarouselImg from '../components/carouselImg/page';
import carImg from '@/public/assets/bangales/Mimg.png';
import Accordion from '../components/accordion/page';
import img1 from '@/public/assets/bangales/img1.png';
import img2 from '@/public/assets/bangales/img2.png';
import img3 from '@/public/assets/bangales/img3.png';
import img4 from '@/public/assets/bangales/img4.png';
import img5 from '@/public/assets/bangales/img5.png';
import img6 from '@/public/assets/bangales/img6.png';
import img7 from '@/public/assets/bangales/img7.png';
import img8 from '@/public/assets/bangales/img8.png';
import img9 from '@/public/assets/bangales/img9.png';
import img10 from '@/public/assets/bangales/img10.png';
import img11 from '@/public/assets/bangales/img11.png';
import img12 from '@/public/assets/bangales/img12.png';
import img13 from '@/public/assets/bangales/img13.png';
import img14 from '@/public/assets/bangales/img14.png';
import img15 from '@/public/assets/bangales/img15.png';
import img16 from '@/public/assets/bangales/img16.png';
import img17 from '@/public/assets/bangales/img17.png';
import img18 from '@/public/assets/bangales/img18.png';
import Card from '../components/cards/Page';




const Bangles = () => {

    const images = [
        { img: img1, title: 'bangales' },
        { img: img2, title: 'bangales' },
        { img: img3, title: 'bangales' },
        { img: img4, title: 'bangales' },
        { img: img5, title: 'bangales' },
        { img: img6, title: 'bangales' },
        { img: img7, title: 'bangales' },
        { img: img8, title: 'bangales' },
        { img: img9, title: 'bangales' },
        { img: img10, title: 'bangales' },
        { img: img11, title: 'bangales' },
        { img: img12, title: 'bangales' },
        { img: img13, title: 'bangales' },
        { img: img14, title: 'bangales' },
        { img: img15, title: 'bangales' },
        { img: img16, title: 'bangales' },
        { img: img17, title: 'bangales' },
        { img: img18, title: 'bangales' },
    ]

    return (

        <div className='w-full mx-auto bg-defaultColor'>

            <CarouselImg Img={carImg} />

            <section className="text-gray-600 body-font w-full pb-24">
                <div className="px-5 py-16 w-full flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 p-4">
                        <Accordion />
                    </div>
                    <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        {images.map((item, index) => (
                           <Card key={index} img={item.img} title={item.title} />
                        ))}
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Bangles