
"use client";

import React from 'react';
import CarouselImg from '../components/carouselImg/page';
import carImg from '@/public/assets/nacklecs/Carimg.png';
import Accordion from '../components/accordion/page';
import img1 from '@/public/assets/nacklecs/img1.png';
import img2 from '@/public/assets/nacklecs/img2.png';
import img3 from '@/public/assets/nacklecs/img3.png';
import img4 from '@/public/assets/nacklecs/img4.png';
import img5 from '@/public/assets/nacklecs/img5.png';
import img6 from '@/public/assets/nacklecs/img6.png';
import img7 from '@/public/assets/nacklecs/img7.png';
import img8 from '@/public/assets/nacklecs/img8.png';
import img9 from '@/public/assets/nacklecs/img9.png';
import img10 from '@/public/assets/nacklecs/img10.png';
import img11 from '@/public/assets/nacklecs/img11.png';
import img12 from '@/public/assets/nacklecs/img12.png';
import img13 from '@/public/assets/nacklecs/img13.png';
import img14 from '@/public/assets/nacklecs/img14.png';
import img15 from '@/public/assets/nacklecs/img15.png';
import img16 from '@/public/assets/nacklecs/img16.png';
import img17 from '@/public/assets/nacklecs/img17.png';
import img18 from '@/public/assets/nacklecs/img18.png';
import Card from '../components/cards/Page';




const Neckles = () => {

    const images = [
        { img: img1, title: 'Hecklace' },
        { img: img2, title: 'Hecklace' },
        { img: img3, title: 'Hecklace' },
        { img: img4, title: 'Hecklace' },
        { img: img5, title: 'Hecklace' },
        { img: img6, title: 'Hecklace' },
        { img: img7, title: 'Hecklace' },
        { img: img8, title: 'Hecklace' },
        { img: img9, title: 'Hecklace' },
        { img: img10, title: 'Hecklace' },
        { img: img11, title: 'Hecklace' },
        { img: img12, title: 'Hecklace' },
        { img: img13, title: 'Hecklace' },
        { img: img14, title: 'Hecklace' },
        { img: img15, title: 'Hecklace' },
        { img: img16, title: 'Hecklace' },
        { img: img17, title: 'Hecklace' },
        { img: img18, title: 'Hecklace' },
    ]

    return (

        <div className='w-full h-full mx-auto bg-defaultColor'>

            <div className='w-full'>
                <CarouselImg Img={carImg} />
            </div>

            <section className="w-full min-h-screen bg-defaultColor pb-16">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
                        <div className="w-full lg:w-1/4">
                            <div className="sticky top-4">
                                <Accordion />
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="w-full lg:w-3/4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {images.map((item, index) => (
                                    <Card key={index} img={item.img} title={item.title} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Neckles