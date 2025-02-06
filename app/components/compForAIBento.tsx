'use client';

import React from "react";
import Image from "next/image";

import obotJetpack from "@/public/assets/illustrations/obot-jetpack.png";
import obotSkater from "@/public/assets/illustrations/obot-skater.png";
import blur1 from "@/public/assets/illustrations/blurs/blur-box-1.svg";
import CompFunkyText from "@/app/components/compFunkyText";

export default function CompForAIBento() {
    return(
        <>
            <section id={"ObotBento"}>
                <div className={"sm:py-12 py-4"}>
                    <div className={"container mx-auto"}>
                        {/*Cards*/}
                        <div className={"sm:p-0 p-4"}>
                            <div className={"sm:flex sm:flex-row sm:space-x-4 sm:py-2"}>
                                {/*Card 1*/}
                                <div className={"sm:basis-3/6 pb-4"}>
                                    <div className={"pl-8 pr-8 pb-0 bg-slate-50 rounded-3xl h-[400px] " +
                                        "hover:-translate-y-0.5 duration-300 hover:bg-orange-50 overflow-hidden relative"}>
                                        <div className={"sm:pt-0 pt-4 px-4"}>
                                            <Image
                                                fill
                                                src={obotJetpack}
                                                alt={"Orenji Studio"}
                                                quality={100}
                                                className={"object-center z-10 obotjetpack"}
                                            />
                                            <Image
                                                fill
                                                src={blur1}
                                                alt={"Orenji Studio"}
                                                quality={100}
                                                className={"object-cover -mt-24 -z-10 obotjetpack"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/*Card 2*/}
                                <div className={"sm:basis-5/6 pb-4"}>
                                    <div className={"px-8 pb-0 bg-slate-50 rounded-3xl h-[400px] " +
                                        "hover:-translate-y-0.5 duration-300 hover:bg-orange-50 overflow-hidden relative"}>
                                        <div className={"sm:p-24 px-4 py-14 text-center"}>
                                            <div className={"flex flex-row flex-wrap gap-4 pb-14 sm:pb-8"}>
                                                <div className={"text-4xl font-bold tracking-tight pb-4 z-10"}>
                                                    {"AI apps can be"}
                                                </div>
                                                <div className={"-rotate-6 z-10"}>
                                                    <CompFunkyText
                                                        label={"funky 😎"}
                                                        className={"text-white text-4xl font-bold p-4 tracking-tight bg-gradient-to-b " +
                                                            "from-violet-400 to-violet-500 border-4 border-violet-200 text-center" +
                                                            "w-40 h-2 rounded-3xl z-10"}
                                                    />
                                                </div>
                                                <div className={"text-4xl font-bold tracking-tight z-10"}>
                                                    {"too!"}
                                                </div>
                                            </div>
                                            <p className={"text-lg sm:text-xl leading-relaxed sm:leading-relaxed text-slate-500 text-left z-10 relative"}>
                                                {"We specialize in building seamless, intuitive interfaces for AI-driven" +
                                                    " applications. Whether it’s a companion app or a productivity tool," +
                                                    " we design experiences that feel human and effortless."}
                                            </p>
                                            <Image
                                                fill
                                                src={blur1}
                                                alt={"Orenji Studio"}
                                                quality={100}
                                                className={"object-cover w-full h-full -z-10 obotjetpack"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"sm:flex sm:flex-row sm:space-x-4"}>
                                {/*Card 3*/}
                                <div className={"sm:basis-4/6 pb-4"}>
                                    <div className={"sm:px-8 px-2 pb-0 bg-slate-50 rounded-3xl h-[400px] " +
                                        "hover:-translate-y-0.5 duration-300 hover:bg-orange-50 overflow-hidden relative"}>
                                        <div className={"sm:p-24 px-10 py-20 text-center"}>
                                            <div className={"flex flex-row flex-wrap gap-4 sm:pb-12 pb-6"}>
                                                <div className={"text-4xl font-bold tracking-tight z-10"}>
                                                    {"While still"}
                                                </div>
                                                <div className={"rotate-6 z-10"}>
                                                    <CompFunkyText
                                                        label={"joyful 🫶"}
                                                        className={"text-white text-4xl font-bold p-4 tracking-tight bg-gradient-to-b " +
                                                            "from-pink-400 to-pink-500 border-4 border-pink-200 text-center" +
                                                            "w-40 h-2 rounded-3xl z-10"}
                                                    />
                                                </div>
                                                <div className={"text-4xl font-bold tracking-tight z-10"}>
                                                    {"to use"}
                                                </div>
                                            </div>
                                            <p className={"text-lg sm:text-xl leading-relaxed sm:leading-relaxed text-slate-500 text-left z-10 relative"}>
                                                {
                                                    "We specialize in building seamless, intuitive interfaces for AI-driven" +
                                                    " applications. Whether it’s a companion app or a productivity tool," +
                                                    " we design experiences that feel human and effortless."
                                                }
                                            </p>
                                        </div>
                                        <Image
                                            fill
                                            src={blur1}
                                            alt={"Orenji Studio"}
                                            quality={100}
                                            className={"object-cover -z-10 obetjetpack"}
                                        />
                                    </div>
                                </div>
                                {/*Card 4*/}
                                <div className={"sm:basis-2/6 pb-4"}>
                                    <div className={"pl-8 pr-8 pb-0 bg-slate-50 rounded-3xl h-[400px] " +
                                        "hover:-translate-y-0.5 hover:bg-orange-50 duration-300 overflow-hidden relative"}>
                                        <div className={"sm:pt-0 pt-4 px-4"}>
                                            <Image
                                                height={400}
                                                width={400}
                                                src={obotSkater}
                                                alt={"Orenji Studio"}
                                                quality={100}
                                                className={"object-center z-10 pt-8"}
                                            />
                                            <Image
                                                fill
                                                src={blur1}
                                                alt={"Orenji Studio"}
                                                quality={100}
                                                className={"object-cover -mt-24 -z-10"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}