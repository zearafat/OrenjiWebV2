// app/components/compForAISlider.tsx
import React from "react";
import Image from 'next/image';
import Link from "next/link";

// 1st Row
import Porto17 from '@/public/assets/images/portofolios/porto-17.webp';
import Porto18 from '@/public/assets/images/portofolios/porto-18.webp';
import Porto19 from '@/public/assets/images/portofolios/porto-20.webp';
import Porto20 from '@/public/assets/images/portofolios/porto-22.webp';
import Porto21 from '@/public/assets/images/portofolios/porto-25.webp';
import Porto22 from '@/public/assets/images/portofolios/porto-26.webp';
import Porto23 from '@/public/assets/images/portofolios/porto-24.webp';
import Porto24 from '@/public/assets/images/portofolios/porto-23.webp';
import Porto25 from '@/public/assets/images/portofolios/porto-21.webp';
import Porto26 from '@/public/assets/images/portofolios/porto-27.webp';

import CompFunkyText from "@/app/components/compFunkyText";
import CompButtonCTA from "@/app/components/compButtonCTA";

export default function CompForAISlider() {
    return (
        <>
            <section id={"For AI Sliders"}>
                <div className={"container mx-auto px-6 sm:px-0"}>
                    <div className={"sm:flex sm:flex-row sm:flex-wrap"}>
                        <div className={"text-left pb-8"}>
                            <div className={"sm:text-4xl text-3xl font-bold tracking-tight z-10 pb-6"}>
                                {"Designs that’ll make your"}
                            </div>
                            <div className={"flex flex-row gap-4"}>
                                <div className={"sm:text-4xl text-3xl font-bold tracking-tight z-10"}>
                                    {"AI apps goes"}
                                </div>
                                <div className={"-rotate-6 z-10"}>
                                    <CompFunkyText
                                        label={"Brrr... 🔥"}
                                        className={"text-white sm:text-4xl text-3xl font-bold p-4 tracking-tight bg-gradient-to-b " +
                                            "from-amber-400 to-amber-500 border-4 border-amber-200 text-center" +
                                            "w-40 h-2 rounded-3xl z-10"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"flex-1"}>
                        </div>
                        <div className={"py-4"}>
                            <div className={"sm:flex sm:flex-row sm:gap-4"}>
                                <div className={"tracking-tight py-2 pb-8"}>
                                    <p className={"w-96 text-xl"}>{"To simply put, we are kinda good at it 👌 Don’t believe us? Just press this button ➡"}</p>
                                </div>
                                <a href={"https://dribbble.com/orenjistudio"} target="_blank" rel="noopener noreferrer">
                                    <CompButtonCTA label={"View more"} />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={"sm:py-20 py-8"}>
                    <div className={"relative"}>
                        <div className="overflow-hidden whitespace-nowrap">
                            {/*2nd Row Marquee*/}
                            <div className="animate-marquee-bottom flex sm:space-x-4 space-x-2">
                                <Image
                                    src={Porto17}
                                    alt={`Portfolio AI 17`}
                                    sizes={"100vw"}
                                    quality={100}
                                    className={"rounded-lg w-[70%] sm:w-[35%]"}
                                />
                                <Image
                                    src={Porto18}
                                    alt={`Portfolio AI 18`}
                                    quality={100}
                                    className={"rounded-lg w-[70%] sm:w-[35%]"}
                                />
                                <Image
                                    src={Porto19}
                                    alt={`Portfolio AI 19`}
                                    sizes={"100vw"}
                                    quality={100}
                                    className={"rounded-lg w-[70%] sm:w-[35%]"}
                                />
                                <Image
                                    src={Porto20}
                                    alt={`Portfolio AI 20`}
                                    sizes={"100vw"}
                                    quality={100}
                                    className={"rounded-lg w-[70%] sm:w-[35%]"}
                                />
                                <Image
                                    src={Porto21}
                                    alt={`Portfolio AI 21`}
                                    sizes={"100vw"}
                                    quality={100}
                                    className={"rounded-lg w-[70%] sm:w-[35%]"}
                                />
                                <Image
                                    src={Porto22}
                                    alt={`Portfolio AI 22`}
                                    sizes={"100vw"}
                                    quality={100}
                                    className={"rounded-lg w-[70%] sm:w-[35%]"}
                                />
                                <Image
                                    src={Porto23}
                                    alt={`Portfolio AI 23`}
                                    sizes={"100vw"}
                                    quality={100}
                                    className={"rounded-lg w-[70%] sm:w-[35%]"}
                                />
                                <Image
                                    src={Porto24}
                                    alt={`Portfolio AI 24`}
                                    sizes={"100vw"}
                                    quality={100}
                                    className={"rounded-lg w-[70%] sm:w-[35%]"}
                                />
                                <Image
                                    src={Porto25}
                                    alt={`Portfolio AI 25`}
                                    sizes={"100vw"}
                                    quality={100}
                                    className={"rounded-lg w-[70%] sm:w-[35%]"}
                                />
                                <Image
                                    src={Porto26}
                                    alt={`Portfolio AI 26`}
                                    sizes={"100vw"}
                                    quality={100}
                                    className={"rounded-lg w-[70%] sm:w-[35%]"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}