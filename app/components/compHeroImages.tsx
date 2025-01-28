// app/components/compHeroImages.tsx
import React from "react";
import Image from 'next/image';
import Link from "next/link";

// 1st Row
import Porto1 from '@/public/assets/images/portofolios/porto-1.webp';
import Porto2 from '@/public/assets/images/portofolios/porto-2.webp';
import Porto3 from '@/public/assets/images/portofolios/porto-3.webp';
import Porto4 from '@/public/assets/images/portofolios/porto-4.webp';
import Porto5 from '@/public/assets/images/portofolios/porto-5.webp';
import Porto6 from '@/public/assets/images/portofolios/porto-6.webp';
import Porto7 from '@/public/assets/images/portofolios/porto-7.webp';
import Porto8 from '@/public/assets/images/portofolios/porto-8.webp';

// 2nd Row
import Porto9 from '@/public/assets/images/portofolios/porto-9.webp';
import Porto10 from '@/public/assets/images/portofolios/porto-10.webp';
import Porto11 from '@/public/assets/images/portofolios/porto-11.webp';
import Porto12 from '@/public/assets/images/portofolios/porto-12.webp';
import Porto13 from '@/public/assets/images/portofolios/porto-13.webp';
import Porto14 from '@/public/assets/images/portofolios/porto-14.webp';
import Porto15 from '@/public/assets/images/portofolios/porto-15.webp';
import Porto16 from '@/public/assets/images/portofolios/porto-16.webp';

export default function CompHeroImages() {
    return (
        <section id={"HeroImages"}>
            <svg className="balloon-bear" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 885 1059">
                <rect width="115" height="52" x="527.5" y="961.5" fill="#AF7128" stroke="#000" strokeWidth="6" rx="26"
                      transform="rotate(-90 527.5 961.5)"/>
                <path fill="#000"
                      d="M551.67 948.2a3 3 0 1 0-6 0h6Zm0 12v-12h-6v12h6ZM564.34 948.2a3 3 0 1 0-6 0h6Zm0 12v-12h-6v12h6Z"/>
                <path fill="#AF7128"
                      d="M505.65 673.43a36.87 36.87 0 0 1 5.48-45.1 36.87 36.87 0 0 1 52.14.03 36.9 36.9 0 0 1 9.02 37.51A84.83 84.83 0 0 1 608 687.24l14.16 14.16a84.85 84.85 0 0 1 21.32 35.55 36.9 36.9 0 0 1 37.41 9.04 36.87 36.87 0 0 1 .04 52.14 36.87 36.87 0 0 1-44.94 5.59 84.97 84.97 0 0 1-13.74 17.98l-47.07 47.07-77.58 77.58a36.99 36.99 0 0 0-5.2 6.54l-15.77 25.2c-3.2 5.12-6.75 10.46-12.38 12.65a22.04 22.04 0 0 1-23.58-4.96l-13.11-11.85-7.4-6.86-9-9.24c-8.61-8.6-5.84-20.2-1.03-30.6l13.32-23.07c-2.05-1.4-4.71-4.7-6.52-6.5-1.56-1.56-3.05-4.79-4.31-6.53L397.3 912.3c-6.51 8.42-20.24 9.85-28.85 1.25l-26.2-25.53c-8.6-8.6-15.46-21.05-4.98-36.77l46.35-60a29.03 29.03 0 0 1-1.28-8.56l-.05-63.04a28.97 28.97 0 0 1 29-29 29.07 29.07 0 0 1 29.04 29.04l.01 14.83 47.37-47.37a84.96 84.96 0 0 1 17.94-13.72Z"/>
                <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"
                      d="m575.2 868.77 47.06-47.07A84.97 84.97 0 0 0 636 803.72a36.87 36.87 0 0 0 44.93-5.59 36.87 36.87 0 0 0-.04-52.13 36.9 36.9 0 0 0-37.41-9.05 84.85 84.85 0 0 0-21.32-35.55l-14.16-14.16a84.83 84.83 0 0 0-35.72-21.37 36.9 36.9 0 0 0-9.02-37.5 36.87 36.87 0 0 0-52.14-.04 36.87 36.87 0 0 0-5.48 45.1 84.96 84.96 0 0 0-17.94 13.73l-47.37 47.36V719.7a29.07 29.07 0 0 0-29.05-29.04 28.97 28.97 0 0 0-29 29l.05 63.04c0 2.98.45 5.85 1.28 8.55l-46.35 60.01c-10.48 15.72-3.62 28.17 4.98 36.77l26.2 25.53c8.6 8.6 22.34 7.17 28.85-1.25l15.33-21.17c1.26 1.74 2.75 4.97 4.3 6.53 1.82 1.8 4.48 5.1 6.53 6.5l-13.31 23.06c-4.82 10.4-7.6 22 1.01 30.61l9 9.24 7.4 6.86 13.12 11.85a22.04 22.04 0 0 0 23.58 4.96c5.63-2.19 9.18-7.53 12.38-12.65l15.76-25.2a36.99 36.99 0 0 1 5.21-6.54l39.81-39.82"/>
                <path fill="#000"
                      d="M411.78 705.19a3 3 0 0 0 6 0h-6Zm0-12.01v12l6 .01v-12l-6-.01ZM399.68 705.18a3 3 0 0 0 6 0h-6Zm-.01-12.01v12l6 .01v-12l-6-.01Z"/>
                <path fill="#FF1E1E" d="m541.74 702.92 62.58 62.58-9.37 9.37-62.58-62.58z"/>
                <path fill="#000" fillRule="evenodd"
                      d="M650.16 753.1c2.52 22.88-6.43 46.1-20.82 60.5l-43.66-43.66a24.88 24.88 0 0 0-.11-35.08l-13.2-13.19a24.88 24.88 0 0 0-35.08-.11l-43.43-43.44c14.39-14.4 37.62-23.35 60.5-20.82 22.88 2.52 45.83 14.03 63.8 32 17.96 17.97 29.47 40.91 32 63.8Z"
                      clipRule="evenodd"/>
                <ellipse cx="582.1" cy="803.26" fill="#000" rx="8.09" ry="8.08" transform="rotate(45 582.1 803.26)"/>
                <ellipse cx="505.2" cy="726.37" fill="#000" rx="8.09" ry="8.08" transform="rotate(45 505.2 726.37)"/>
                <path fill="#000"
                      d="M548.05 789.86c-5.8 5.8-19.33 5.36-27.1-2.42-7.78-7.77-8.23-21.3-2.43-27.1 5.81-5.8 15.68-1.7 23.45 6.08 7.77 7.77 11.88 17.64 6.08 23.44Z"/>
                <path stroke="#000" strokeLinecap="round" strokeWidth="6"
                      d="m430.37 955.87-8.48 8.49M447.37 972.87l-8.49 8.48M357.44 882.93l-8.49 8.49M374.43 899.93l-8.49 8.49M426.5 821.5l-5-376"/>
                <circle className="balloon-bear__balloon" cx="421.5" cy="273.5" r="169" fillOpacity=".5" stroke="#000"
                        strokeWidth="6"/>
                <path className="balloon-bear__balloon" fillOpacity=".5" stroke="#000" strokeLinejoin="round"
                      strokeWidth="6" d="M405.5 444.5H437l9.5 20h-50l9-20Z"/>
                <path stroke="#000" strokeLinecap="round" strokeWidth="6" d="m380 757 62-42"/>
                <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".5" strokeWidth="30"
                      d="M384.12 142.74a136 136 0 0 0-98.13 119.17"/>
            </svg>
            <div className={"pb-12"}>
                <div className={"relative"}>
                    <div className="overflow-hidden whitespace-nowrap">
                        {/*1st Row Marquee*/}
                        <div className="animate-marquee-top flex sm:space-x-4 space-x-2 sm:mb-8 mb-4">
                            <Image
                                src={Porto1}
                                alt={`Portfolio 1`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto2}
                                alt={`Portfolio 2`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto3}
                                alt={`Portfolio 3`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto4}
                                alt={`Portfolio 4`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto5}
                                alt={`Portfolio 5`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto6}
                                alt={`Portfolio 6`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto7}
                                alt={`Portfolio 7`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto8}
                                alt={`Portfolio 8`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                        </div>

                        {/*2nd Row Marquee*/}
                        <div className="animate-marquee-bottom flex sm:space-x-4 space-x-2">
                            <Image
                                src={Porto9}
                                alt={`Portfolio 9`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto10}
                                alt={`Portfolio 10`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto11}
                                alt={`Portfolio 11`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto12}
                                alt={`Portfolio 12`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto13}
                                alt={`Portfolio 13`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto14}
                                alt={`Portfolio 14`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto15}
                                alt={`Portfolio 15`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto16}
                                alt={`Portfolio 16`}
                                sizes={"100vw"}
                                style={{width: '35%', height: 'auto'}}
                                quality={100}
                                className={"rounded-lg"}
                            />
                        </div>
                    </div>
                    {/* Overlay Gradient */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
                    {/* Floating button */}
                    <Link href="https://dribbble.com/orenjistudio"
                          target={"_blank"}
                          className="backdrop-filter backdrop-blur-lg bg-white/30 absolute bottom-0 mb-10
                              left-1/2 transform -translate-x-1/2 sm:px-6 px-4 sm:py-4 py-3 bg-white text-black sm:text-xl text-base font-medium
                              rounded-xl shadow-md hover:bg-orange-50 hover:-translate-y-1 duration-300">
                        View Portfolio ⤍
                    </Link>
                </div>
            </div>
        </section>
    );
}
