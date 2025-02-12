
"use client";

import Img from "@/public/assets/car1.png";
import Image from "next/image";

const ImageCarousel = () => {




  return (
    <div
      className="relative w-full group"
    >
      <div
        className="w-full transition-transform duration-500 ease-out bg-black"
      >
        <Image
          src={Img}
          alt="img"
          layout="responsive"
          height={100}
          width={100}
          className="mt-[100px]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-8 w-1/2 space-y-4">
            <h2 className="text-4xl md:text-5xl font-grandiflora mb-4 shadow-lg text-[#CFA500]">
              IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h2>
            <p className="w-[70%] break-words text-sm text-slate-300 shadow-md font-light tracking-wider">
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>

            <button className="bg-[#CFA500] text-white px-4 text-thin py-2">Discover the Jewelry</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
