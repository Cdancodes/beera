
"use client";

import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

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


  return (
    <footer className="text-gray-600 body-font bg-footerColor w-full">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:pr-20 mt-16 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 space-y-4">
            <h2 className="title-font font-semibold text-goldMid tracking-widest text-md mb-3">MY ACCOUNT</h2>

            <p className='text-sm leading-6 text-slate-500'>Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem
              Ipsum has been the industry's standard
              dummy text ever since the 1500s</p>

            <div className='flex space-x-3 md:mx-auto'>
              {SocailIcons?.map((item, i) => (
                <div key={i} className='border border-slate-500 cursor-pointer rounded-full p-2 flex justify-center font-medium hover:scale-125 transition-transform duration-200 hover:bg-goldMid hover:shadow-xl'>
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-goldMid tracking-widest text-md mb-3">MENU</h2>
            <nav className="list-none mb-10">
              {NavItem?.map((item, i) => (
                <li key={i} className="font-medium hover:scale-105 transition-transform duration-200">
                  <a className="text-gray-600 hover:text-goldMid cursor-pointer">{item.title}</a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-goldMid tracking-widest text-md mb-3">FOLLOW US ON</h2>
            <nav className="list-none mb-10">
              {SocailIcons?.map((item, i) => (
                <li key={i} className="font-medium hover:scale-105 transition-transform duration-200">
                  <a className="text-gray-600 hover:text-goldMid cursor-pointer">{item.title}</a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-goldMid tracking-widest text-md mb-3">ABOUT US</h2>
            <nav className="list-none mb-10">
              <p className='className="font-medium hover:scale-105 transition-transform duration-200 hover:text-goldMid cursor-pointer'><strong>Email:- </strong> berra_jewel@gmail.com</p>
              <p className='className="font-medium hover:scale-105 transition-transform duration-200 hover:text-goldMid cursor-pointer'> <strong>Phone:- </strong> +91 123456789</p>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer