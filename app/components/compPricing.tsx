'use client'

import React, {useState} from "react";

import Link from "next/link";
import Image from 'next/image';
import Banner from '@/public/assets/images/etc/banner.webp';

export default function CompPricing() {

    // --- STATE MANAGEMENT ---
    // We use React's useState to manage the selected billing cycle.
    // It can be 'monthly' or 'six-monthly'. It defaults to 'monthly'.
    const [billingCycle, setBillingCycle] = useState('monthly');

    // --- PRICE DEFINITIONS ---
    // Defining prices here makes them easy to manage and update.
    const prices = {
        monthly: {
            premium: 2999,
            development: 4999,
        },
        six_monthly: {
            // Applying the 25% discount (1 - 0.25 = 0.75)
            premium: 2999 * 0.75,
            development: 4999 * 0.75,
        }
    };

    const CheckmarkIcon = () => (
        <svg className={"flex-shrink-0 w-3.5 h-3.5"} aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
        </svg>
    );

    return(
        <div className={"container mx-auto"}>
            {/*Header*/}
            <div className={"text-center sm:pb-12 pb-6"}>
                <div className={"py-4"}>
                    <h2 className={"sm:text-4xl text-2xl font-bold tracking-tighter"}>
                        {"Simple pricing"}
                        <span className={"text-orange-600"}>.</span>
                    </h2>
                </div>
                <div className={"py-4"}>
                    <p className={"text-slate-600 sm:px-[450px] text-lg px-4"}>
                        Simple, flat, no hidden-cost. Pay once every month, get all our services, unlimited. <strong>Pause or cancel anytime</strong>. No question asked.
                    </p>
                </div>
            </div>

            {/* --- BILLING CYCLE SWITCHER (SEGMENTED CONTROL) --- */}
            <div className="flex justify-center items-center space-x-2 bg-slate-200/80 p-1.5 rounded-full w-fit mx-auto mb-12 shadow-inner">
                <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                        billingCycle === 'monthly'
                            ? 'bg-white text-slate-800 shadow-sm'
                            : 'bg-transparent text-slate-500 hover:text-slate-700'
                    }`}
                >
                    Monthly
                </button>
                <button
                    onClick={() => setBillingCycle('six-monthly')}
                    className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                        billingCycle === 'six-monthly'
                            ? 'bg-white text-slate-800 shadow-sm'
                            : 'bg-transparent text-slate-500 hover:text-slate-700'
                    }`}
                >
                    6-Month Plan
                    <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            Save 25%
                        </span>
                </button>
            </div>

            {/*Cards*/}
            <div
                className={"sm:flex sm:flex-row mx-auto justify-center sm:space-x-6 p-4 sm:space-y-0 space-y-2"}>
                {/*Card Trial*/}
                <div className={"sm:py-8 py-4 sm:px-12 px-6 bg-slate-50 rounded-3xl border border-slate-100"}>
                    <div className={"space-y-6 pb-10"}>
                        <div className={"space-y-3"}>
                            <h4 className={"sm:text-3xl text-2xl font-bold tracking-tighter"}>Weekly <span
                                className={"text-slate-500 sm:text-3xl text-2xl tracking-tighter"}>Basic</span>
                            </h4>
                            <p className={"text-base"}>Try our services for a week</p>
                        </div>
                        <h3 className={"text-5xl font-bold"}>$999<span
                            className={"text-base text-slate-500 font-normal"}>/week</span></h3>
                        <ul className={"space-y-4 sm:pb-8"}>
                            <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                <svg className={"flex-shrink-0 w-3.5 h-3.5 text-black"} aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>Website & App design</span>
                            </li>
                            <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                <svg className={"flex-shrink-0 w-3.5 h-3.5 text-black"} aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>Logo & Brand design</span>
                            </li>
                            <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                <svg className={"flex-shrink-0 w-3.5 h-3.5 text-black"} aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>Custom 2D illustrations</span>
                            </li>
                        </ul>
                    </div>
                    <Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"}
                          className={"block p-4 w-full border border-black text-center rounded-xl font-medium hover:border-orange-500 hover:text-orange-500 hover:-translate-y-1 duration-300"}>
                        Try us
                    </Link>
                </div>

                {/*Card Premium*/}
                <div
                    className={"sm:py-8 py-4 sm:px-12 px-6 bg-gradient-to-b from-customOrangeBg1 to-customOrangeBg2 rounded-3xl border border-slate-100"}>
                    <div className={"space-y-6 pb-10"}>
                        <div className={"space-y-2"}>
                            <div className={"flex flex-row"}>
                                <h4 className={"sm:text-3xl text-2xl font-bold text-white tracking-tighter"}>Monthly <span
                                    className={"text-white opacity-50 sm:text-3xl text-2xl tracking-tighter"}>Premium</span>
                                </h4>
                                <div className="mx-auto"></div>
                                <p className={"sm:px-6 px-4 py-2 bg-white rounded-full sm:text-base text-sm text-black"}>1
                                    slot left</p>
                            </div>
                            <p className={"text-base text-white"}>Everything in Weekly, plus:</p>
                        </div>
                        {/* --- Animated Price Container --- */}
                        <div className="my-6 relative h-20 flex items-center">
                            {/* Monthly Price */}
                            <div className={`absolute inset-0 flex items-center transition-all duration-300 ease-in-out ${billingCycle === 'monthly' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                                <h3 className={"text-5xl font-bold text-white"}>${prices.monthly.premium}<span
                                    className={"text-base text-white/80 font-normal"}>/month</span></h3>
                            </div>
                            {/* 6-Month Price */}
                            <div className={`absolute inset-0 flex items-center transition-all duration-300 ease-in-out ${billingCycle === 'six-monthly' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                <div>
                                    <h3 className={"text-5xl font-bold text-white flex items-baseline"}>
                                        <span className="text-3xl font-medium text-white/70 line-through mr-3">${prices.monthly.premium}</span>
                                        <span>${prices.six_monthly.premium.toFixed(0)}</span>
                                        <span className={"text-base text-white/80 font-normal"}>/month</span>
                                    </h3>
                                    <p className="text-sm text-white/80 mt-1">Save $750/month</p>
                                </div>
                            </div>
                        </div>
                        <div className={"sm:flex sm:flex-row sm:space-x-14"}>
                            <ul className={"space-y-4 text-white sm:pb-0 pb-4"}>
                                <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                    <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Social media design</span>
                                </li>
                                <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                    <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Motion & animation design</span>
                                </li>
                                <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                    <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Custom 3D illustrations</span>
                                </li>
                            </ul>
                            <ul className={"space-y-4 text-white"}>
                                <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                    <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Dedicated project manager</span>
                                </li>
                                <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                    <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Dedicated creative director</span>
                                </li>
                                <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                    <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Cancel or pause anytime</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"}
                          className={"block p-4 w-full bg-white text-orange-600 rounded-xl font-medium text-center hover:shadow-xl hover:shadow-black-200/50 hover:-translate-y-1 duration-300"}>
                        Subscribe now
                    </Link>
                </div>

                {/*Card Development*/}
                {/*<div className={"sm:py-8 py-4 sm:px-12 px-6 bg-black rounded-3xl border border-slate-100"}>*/}
                {/*    <div className="flex-grow">*/}
                {/*        <div className={"space-y-6 pb-10"}>*/}
                {/*            <div className={"space-y-3"}>*/}
                {/*                <h4 className={"sm:text-3xl text-2xl text-white font-bold tracking-tighter"}>Development <span*/}
                {/*                    className={"sm:text-3xl text-orange-600 text-2xl tracking-tighter"}>+</span>*/}
                {/*                </h4>*/}
                {/*                <p className={"text-base text-white"}>Everything in Monthly, plus:</p>*/}
                {/*            </div>*/}
                {/*            /!* --- Animated Price Container --- *!/*/}
                {/*            <div className="my-6 relative h-28 flex items-center">*/}
                {/*                /!* Monthly Price *!/*/}
                {/*                <div className={`absolute inset-0 flex items-center transition-all duration-300 ease-in-out ${billingCycle === 'monthly' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>*/}
                {/*                    <h3 className={"text-5xl font-bold text-white"}>${prices.monthly.development}<span*/}
                {/*                        className={"text-base text-slate-300 font-normal"}>/month</span></h3>*/}
                {/*                </div>*/}
                {/*                /!* 6-Month Price *!/*/}
                {/*                <div className={`absolute inset-0 flex items-center transition-all duration-300 ease-in-out ${billingCycle === 'six-monthly' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>*/}
                {/*                    <div>*/}
                {/*                        <h3 className={"text-5xl font-bold text-white flex items-baseline"}>*/}
                {/*                            <span className="text-3xl font-medium text-slate-400 line-through mr-3">${prices.monthly.development}</span>*/}
                {/*                            <span>${prices.six_monthly.development.toFixed(0)}</span>*/}
                {/*                            <span className={"text-base text-slate-300 font-normal"}>/month</span>*/}
                {/*                        </h3>*/}
                {/*                        <p className="text-sm text-slate-400 mt-1">Save $1250/month</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <ul className={"space-y-4"}>*/}
                {/*                <li className={"flex items-center space-x-3 rtl:space-x-reverse text-white"}>*/}
                {/*                    <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true"*/}
                {/*                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">*/}
                {/*                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                {/*                              strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>*/}
                {/*                    </svg>*/}
                {/*                    <span>Web App development</span>*/}
                {/*                </li>*/}
                {/*                <li className={"flex items-center space-x-3 rtl:space-x-reverse text-white"}>*/}
                {/*                    <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true"*/}
                {/*                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">*/}
                {/*                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                {/*                              strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>*/}
                {/*                    </svg>*/}
                {/*                    <span>Mobile App development</span>*/}
                {/*                </li>*/}
                {/*                <li className={"flex items-center space-x-3 rtl:space-x-reverse text-white"}>*/}
                {/*                    <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true"*/}
                {/*                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">*/}
                {/*                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"*/}
                {/*                              strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>*/}
                {/*                    </svg>*/}
                {/*                    <span>Landing Page development</span>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"}*/}
                {/*          className={"block p-4 w-full border border-white text-white text-center rounded-xl font-medium hover:border-orange-500 hover:text-orange-500 hover:-translate-y-1 duration-300"}>*/}
                {/*        Subscribe now*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>

            {/*Banner*/}
            <div className="mx-auto max-w-4xl pt-14">
                <Link href={"https://orenjistudio.gumroad.com"} target={"_blank"}>
                    <div className={"mx-auto items-center justify-center"}>
                        <Image
                            src={Banner}
                            alt={`Orenji Studio Products - 2D/3D Illustrations`}
                            sizes={"100vw"}
                            quality={100}
                            className={"rounded-xl hover:-translate-y-1.5 duration-300 w-full object-cover"}
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}