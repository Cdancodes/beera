
"use client";

import React from 'react';
import CarouselImg from '../components/carouselImg/page';
import carImg from '@/public/assets/earrings/Mimg.png';
import Accordion from '../components/accordion/page';
import img1 from '@/public/assets/earrings/img1.png';
import img2 from '@/public/assets/earrings/img2.png';
import img3 from '@/public/assets/earrings/img3.png';
import img4 from '@/public/assets/earrings/img4.png';
import img5 from '@/public/assets/earrings/img5.png';
import img6 from '@/public/assets/earrings/img6.png';
import img7 from '@/public/assets/earrings/img7.png';
import img8 from '@/public/assets/earrings/img8.png';
import img9 from '@/public/assets/earrings/img9.png';
import img10 from '@/public/assets/earrings/img10.png';
import img11 from '@/public/assets/earrings/img11.png';
import img12 from '@/public/assets/earrings/img12.png';
import img13 from '@/public/assets/earrings/img13.png';
import img14 from '@/public/assets/earrings/img14.png';
import img15 from '@/public/assets/earrings/img15.png';
import img16 from '@/public/assets/earrings/img16.png';
import img17 from '@/public/assets/earrings/img17.png';
// import img18 from '@/public/assets/earrings/img18.png';
import Card from '../components/cards/Page';




const Earrings
 = () => {

    const images = [
        { img: img1, title: 'Earring' },
        { img: img2, title: 'Earring' },
        { img: img3, title: 'Earring' },
        { img: img4, title: 'Earring' },
        { img: img5, title: 'Earring' },
        { img: img6, title: 'Earring' },
        { img: img7, title: 'Earring' },
        { img: img8, title: 'Earring' },
        { img: img9, title: 'Earring' },
        { img: img10, title: 'Earring' },
        { img: img11, title: 'Earring' },
        { img: img12, title: 'Earring' },
        { img: img13, title: 'Earring' },
        { img: img14, title: 'Earring' },
        { img: img15, title: 'Earring' },
        { img: img16, title: 'Earring' },
        { img: img17, title: 'Earring' },
        // { img: img18, title: 'Earring' },
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

export default Earrings
