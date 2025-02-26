
"use client";

import React from 'react';
import CarouselImg from '../components/carouselImg/page';
import carImg from '@/public/assets/ankle/Mimg.png';
import Accordion from '../components/accordion/page';
import img1 from '@/public/assets/ankle/img1.png';
import img2 from '@/public/assets/ankle/img2.png';
import img3 from '@/public/assets/ankle/img3.png';
import img4 from '@/public/assets/ankle/img4.png';
import img5 from '@/public/assets/ankle/img5.png';
import img6 from '@/public/assets/ankle/img6.png';
import img7 from '@/public/assets/ankle/img7.png';
import img8 from '@/public/assets/ankle/img8.png';
import img9 from '@/public/assets/ankle/img9.png';
import img10 from '@/public/assets/ankle/img10.png';
import img11 from '@/public/assets/ankle/img11.png';
import img12 from '@/public/assets/ankle/img12.png';
import img13 from '@/public/assets/ankle/img13.png';
import img14 from '@/public/assets/ankle/img14.png';
import img15 from '@/public/assets/ankle/img15.png';
import img16 from '@/public/assets/ankle/img16.png';
import img17 from '@/public/assets/ankle/img17.png';
// import img18 from '@/public/assets/earrings/img18.png';
import Card from '../components/cards/Page';




const Earrings = () => {

    const images = [
        { img: img1, title: 'Ankle' },
        { img: img2, title: 'Ankle' },
        { img: img3, title: 'Ankle' },
        { img: img4, title: 'Ankle' },
        { img: img5, title: 'Ankle' },
        { img: img6, title: 'Ankle' },
        { img: img7, title: 'Ankle' },
        { img: img8, title: 'Ankle' },
        { img: img9, title: 'Ankle' },
        { img: img10, title: 'Ankle' },
        { img: img11, title: 'Ankle' },
        { img: img12, title: 'Ankle' },
        { img: img13, title: 'Ankle' },
        { img: img14, title: 'Ankle' },
        { img: img15, title: 'Ankle' },
        { img: img16, title: 'Ankle' },
        { img: img17, title: 'Ankle' },
        // { img: img18, title: 'Earring' },
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

export default Earrings
