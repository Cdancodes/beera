
"use client";

import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidPlane, BiSupport } from 'react-icons/bi';
import { AiOutlineReload } from 'react-icons/ai';
import { MdPrivacyTip } from 'react-icons/md';
import bgImage from "@/public/assets/tap.png";

const Footer = () => {

  const SocailIcons = [
    { icon: <FaFacebookF />, title: "Facebook" },
    { icon: <FaLinkedinIn />, title: "Linkedin" },
    { icon: <FaTwitter />, title: "Twitter" },
    { icon: <AiFillInstagram />, title: "Instagram" }
  ];

  const NavItem = [
    { title: "Home", path: "#" },
    { title: "Necklaces", path: "#" },
    { title: "Bracelets", path: "#" },
    { title: "Rings", path: "#" },
    { title: "Earrings", path: "#" },
    { title: "Ankle Bracelets", path: "#" },
    { title: "All", path: "#" },
  ];

  const data = [
    { icon: <BiSolidPlane className='w-10 h-10 text-defaultColor' />, title: "FREE TRAKCED DELIVERY" },
    { icon: <AiOutlineReload className='w-10 h-10 text-defaultColor' />, title: "QUICK RETURNS AND EXCHNAGE" },
    { icon: <BiSupport className='w-10 h-10 text-defaultColor' />, title: "24X7 CUSTOMER SERVICE" },
    { icon: <MdPrivacyTip className='w-10 h-10 text-defaultColor' />, title: "100% SECURE PAYMENT" },
  ]


  return (
    <footer className="relative text-gray-600 body-font bg-footerColor w-full">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:pr-20 mt-16 md:text-left text-center order-first justify-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 space-y-4">
            <h2 className="title-font font-semibold text-goldMid tracking-widest text-md mb-3">MY ACCOUNT</h2>

            <p className='text-sm leading-6 text-slate-500'>Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem
              Ipsum has been the industry's standard
              dummy text ever since the 1500s</p>

            <div className='flex space-x-3 mx-auto'>
              {SocailIcons?.map((item, i) => (
                <div key={i} className='border border-slate-500 cursor-pointer rounded-full p-2 flex justify-center font-medium hover:scale-125 transition-transform duration-200 hover:bg-goldMid hover:shadow-xl'>
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex justify-center">
            <nav className="list-none mb-10">
              <h2 className="title-font font-semibold text-goldMid tracking-widest text-md mb-3">MENU</h2>
              {NavItem?.map((item, i) => (
                <li key={i} className="font-medium">
                  <a className="text-gray-600 hover:scale-105 transition-transform duration-200 hover:text-goldMid cursor-pointer">{item.title}</a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex justify-center">
            <nav className="list-none mb-10">
              <h2 className="title-font font-semibold text-goldMid tracking-widest text-md mb-3">FOLLOW US ON</h2>
              {SocailIcons?.map((item, i) => (
                <li key={i} className="font-medium">
                  <a className="text-gray-600 hover:scale-105 transition-transform duration-200 hover:text-goldMid cursor-pointer">{item.title}</a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col">
            <nav className="list-none mb-10">
              <h2 className="title-font font-semibold text-goldMid tracking-widest text-md mb-3">ABOUT US</h2>
              <p className="font-medium hover:scale-105 transition-transform duration-200 hover:text-goldMid cursor-pointer"><strong>Email:- </strong> berra_jewel@gmail.com</p>
              <p className="font-medium hover:scale-105 transition-transform duration-200 hover:text-goldMid cursor-pointer"> <strong>Phone:- </strong> +91 123456789</p>
            </nav>
          </div>
        </div>

        <div className="absolute flex flex-wrap justify-center items-center text-center 
                bottom-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 
                max-w-[80%] w-full mx-auto overflow-hidden py-5 z-10 
                bg-gradient-to-r from-goldMid via-goldDark to-goldDark">

          {/* Background Image */}
          {/* <Image
                        src={bgImage}
                        alt="Background Image"
                        layout="responsive"
                        height={100}
                        width={100}
                        objectFit="cover"
                        className="absolute top-0 left-0 w-full h-full z-[-1]"
                    /> */}

          {data?.map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center justify-center w-full p-3 md:p-5 text-white space-y-2 md:space-y-4">
                <div>{item.icon}</div>
                <h2 className="text-xs text-defaultColor text-center">{item.title}</h2>
              </div>

              {i !== data.length - 1 && (
                <div className="hidden md:block lg:block sm:block h-12 md:h-20 w-[1px] bg-white mx-2 "></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </footer>
  )
}

export default Footer