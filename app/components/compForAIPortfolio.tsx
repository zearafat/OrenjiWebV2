import React from "react";
import Link from "next/link";
import Image from "next/image";

import CompFunkyText from "@/app/components/compFunkyText";

import PortoAsah from '@/public/assets/images/portofolios/ai-projects/porto-asah.webp';
import PortoFable from '@/public/assets/images/portofolios/ai-projects/porto-fable.webp';
import PortoPluxia from '@/public/assets/images/portofolios/ai-projects/porto-pluxia.webp';


export default function CompForAIPortfolio() {
    return (
        <>
            <div className={"container mx-auto"}>
                <div className={"flex flex-row gap-4 pb-12"}>
                    <div className={"text-4xl font-bold tracking-tight z-10"}>
                        {"Some of our"}
                    </div>
                    <div className={"rotate-6 z-10"}>
                        <CompFunkyText
                            label={"real 🦄"}
                            className={"text-white text-4xl font-bold p-4 tracking-tight bg-gradient-to-b " +
                                "from-pink-500 to-amber-300 border-4 border-pink-100 text-center" +
                                "w-40 h-2 rounded-3xl z-10"}
                        />
                    </div>
                    <div className={"text-4xl font-bold tracking-tight z-10"}>
                        {"projects"}
                    </div>
                </div>
                {/*PORTO*/}
                <div className={"flex flex-col gap-20"}>
                    {/*PORTO 1*/}
                    <div>
                        <div className={"p-14 w-full bg-pink-100 rounded-3xl overflow-hidden"}>
                            <Image
                                src={PortoPluxia}
                                alt={"Pluxia AI"}
                                style={{width: '100%', height: 'auto'}}
                                sizes={"100vw"}
                                quality={100}
                                className={"rounded-lg -mb-72"}
                            />
                        </div>
                        <div className={"py-4 flex flex-row"}>
                            <h1 className={"text-2xl font-medium tracking-tight py-2"}>
                                Pluxia AI /
                                <span className={"px-4"}>
                                <a href={"https://pluxia.ai"} className={"hover:underline text-orange-600"}
                                   target="_blank" rel="noopener noreferrer">
                                    Visit →
                                </a>
                            </span>
                            </h1>

                            <div className={"flex-1"}></div>

                            <div className={"flex flex-row gap-2"}>
                                <span className={"px-6 py-3 bg-slate-100 font-medium rounded-full"}>
                                    UI/UX design
                                </span>
                                <span className={"px-6 py-3 bg-slate-100 font-medium rounded-full"}>
                                    brand design
                                </span>
                                <span className={"px-6 py-3 bg-slate-100 font-medium rounded-full"}>
                                    video animation
                                </span>
                            </div>
                        </div>
                    </div>

                    {/*PORTO 2*/}
                    <div>
                        <div className={"p-14 w-full bg-orange-100 rounded-3xl overflow-hidden"}>
                            <Image
                                src={PortoAsah}
                                alt={"Daily Friend"}
                                style={{width: '100%', height: 'auto'}}
                                sizes={"100vw"}
                                quality={100}
                                className={"rounded-lg -mb-36 -mt-20"}
                            />
                        </div>
                        <div className={"py-4 flex flex-row"}>
                            <h1 className={"text-2xl font-medium tracking-tight py-2"}>
                                DailyFriend /
                                <span className={"px-4"}>
                                <a href={"https://pluxia.ai"} className={"hover:underline text-orange-600"}
                                   target="_blank" rel="noopener noreferrer">
                                    Visit →
                                </a>
                            </span>
                            </h1>

                            <div className={"flex-1"}></div>

                            <div className={"flex flex-row gap-2"}>
                                <span className={"px-6 py-3 bg-slate-100 font-medium rounded-full"}>
                                    UI/UX design
                                </span>
                                <span className={"px-6 py-3 bg-slate-100 font-medium rounded-full"}>
                                    custom illustrations
                                </span>
                                <span className={"px-6 py-3 bg-slate-100 font-medium rounded-full"}>
                                    brand design
                                </span>
                                <span className={"px-6 py-3 bg-slate-100 font-medium rounded-full"}>
                                    video animation
                                </span>
                            </div>
                        </div>
                    </div>

                    {/*PORTO 3*/}
                    <div>
                        <div className={"p-14 w-full bg-violet-100 rounded-3xl overflow-hidden"}>
                            <Image
                                src={PortoFable}
                                alt={"Daily Friend"}
                                style={{width: '100%', height: 'auto'}}
                                sizes={"100vw"}
                                quality={100}
                                className={"rounded-lg -mb-72"}
                            />
                        </div>
                        <div className={"py-4 flex flex-row"}>
                            <h1 className={"text-2xl font-medium tracking-tight py-2"}>
                                Fable AI /
                                <span className={"px-4"}>
                                <a href={"https://pluxia.ai"} className={"hover:underline text-orange-600"}
                                   target="_blank" rel="noopener noreferrer">
                                    Visit →
                                </a>
                            </span>
                            </h1>

                            <div className={"flex-1"}></div>

                            <div className={"flex flex-row gap-2"}>
                                <span className={"px-6 py-3 bg-slate-100 font-medium rounded-full"}>
                                    UI/UX design
                                </span>
                                <span className={"px-6 py-3 bg-slate-100 font-medium rounded-full"}>
                                    custom illustrations
                                </span>
                                <span className={"px-6 py-3 bg-slate-100 font-medium rounded-full"}>
                                    brand design
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-12 h-0.5 border-t-0 bg-slate-100" />
            </div>
        </>
    )
}