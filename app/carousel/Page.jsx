
"use client";

import Img from "@/public/assets/car1.png";
import Image from "next/image";
import { Grandiflora_One, Poppins } from "next/font/google";

const grandifloraOne = Grandiflora_One({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200"],
  variable: "--font-poppins",
});

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
          className="mt-[50px] sm:mt-[100px]"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
          <div className="absolute left-0 w-full md:w-[50%] top-1/2 transform -translate-y-1/2 text-white p-8 space-y-4">

            <h2 className={`${grandifloraOne.className} text-3xl md:text-5xl font-grandiflora mb-0 md:mb-4 text-[#CFA500] leading-tight md:leading-[3rem]`}>
              IMPECCABLE
              <span className="block md:my-4">CRAFTSMANSHIP AND</span>
              FINESSE
            </h2>


            <p className={` ${poppins.className} w-[70%] break-words text-xs md:text-sm text-slate-300 font-light tracking-wider`}>
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>

            <button className="bg-[#CFA500] hover:text-defaultColor text-white px-4 text-thin py-2  hover:scale-110 inline-block transition-transform duration-200 cursor-pointer">Discover the jewellery</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
