
"use client";

import Image from "next/image";

const CarouselImg = ({ Img }) => {

    return (
        <div className="w-full h-[90vh] overflow-hidden bg-black">
            <Image
                src={Img}
                alt="img"
                layout="responsive"
                height={100}
                width={100}
                className="h-full object-cover"
                loading="lazy"
            />
        </div>


    );
};

export default CarouselImg;
