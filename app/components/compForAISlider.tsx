// app/components/compForAISlider.tsx
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

import CompFunkyText from "@/app/components/compFunkyText";
import CompButtonCTA from "@/app/components/compButtonCTA";

export default function CompForAISlider() {
    return (
        <>
            <section id={"For AI Sliders"}>
                <div className={"container mx-auto"}>
                    <div className={"flex flex-row"}>
                        <div className={"text-left "}>
                            <div className={"text-4xl font-bold tracking-tight z-10 pb-6"}>
                                {"Designs that’ll make your"}
                            </div>
                            <div className={"flex flex-row gap-4"}>
                                <div className={"text-4xl font-bold tracking-tight z-10"}>
                                    {"AI apps goes"}
                                </div>
                                <div className={"-rotate-6 z-10"}>
                                    <CompFunkyText
                                        label={"Brrr... 🔥"}
                                        className={"text-white text-4xl font-bold p-4 tracking-tight bg-gradient-to-b " +
                                            "from-amber-400 to-amber-500 border-4 border-amber-200 text-center" +
                                            "w-40 h-2 rounded-3xl z-10"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"flex-1"}>
                        </div>
                        <div className={"flex flex-row gap-4"}>
                            <div className={"tracking-tight py-2"}>
                                <p className={"w-96 text-xl"}>{"To simply put, we are kinda good at it 👌 Don’t believe us? Just press this button ➡"}</p>
                            </div>
                            <a href={"https://dribbble.com/alzea"} target="_blank" rel="noopener noreferrer">
                                <CompButtonCTA label={"View more"} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"py-20"}>
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
                    </div>
                </div>
            </section>
        </>
    )
}