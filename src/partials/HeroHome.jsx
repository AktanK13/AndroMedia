import React, { useState } from 'react';

function HeroHome() {

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none opacity-30 " aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="20%" y1="2%" x2="80%" y2="100%" id="illustration-01">
              <stop stopColor="#4d5051" offset="0%" />
              <stop stopColor="#f7ec13" offset="50%" />
              <stop stopColor="#4d5051" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)">
            <circle cx="1232" cy="128" r="128"/>
            <circle cx="155" cy="443" r="64" />

          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16 z-50" >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-white " data-aos="zoom-y-out">Welcome to our web development and design  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-yellow-100">"Andromedia" agency</span></h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                where we specialize in creating exceptional websites, designing intuitive user interfaces, and developing comprehensive UI kits. Our team of skilled developers and designers are passionate about delivering top-notch solutions that help businesses succeed online.
              </p>
            </div>
          </div>


        </div>

      </div>
    </section>
  );
}

export default HeroHome;