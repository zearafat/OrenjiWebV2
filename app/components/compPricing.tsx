import Link from 'next/link'

export default function compPricing() {
    return(
        <section id={"Pricing"}>
            <div className={"sm:-mt-64 sm:py-12 py-4"}>
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
                            <p className={"text-slate-600 sm:px-[450px] text-base px-4"}>
                                {"Simple, flat, no hidden-cost. Pay once every month, get all our services, unlimited. Pause or cancel anytime. No question asked."}
                            </p>
                        </div>
                    </div>

                    {/*Cards*/}
                    <div className={"sm:flex sm:flex-row mx-auto justify-center sm:space-x-6 p-4 sm:space-y-0 space-y-2"}>
                        {/*Card Trial*/}
                        <div className={"sm:py-8 py-4 sm:px-12 px-6 bg-slate-50 rounded-3xl border border-slate-100"}>
                            <div className={"space-y-6 pb-10"}>
                                <div className={"space-y-3"}>
                                    <h4 className={"sm:text-3xl text-2xl font-bold tracking-tighter"}>Trial <span className={"text-slate-500 sm:text-3xl text-2xl tracking-tighter"}>Basic</span></h4>
                                    <p className={"text-base"}>Try our services for a week</p>
                                </div>
                                <h3 className={"text-5xl font-bold"}>$999<span className={"text-base text-slate-500 font-normal"}>/week</span></h3>
                                <ul className={"space-y-4"}>
                                    <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                        <svg className={"flex-shrink-0 w-3.5 h-3.5 text-black"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                        </svg>
                                        <span>Website & App design</span>
                                    </li>
                                    <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                        <svg className={"flex-shrink-0 w-3.5 h-3.5 text-black"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                        </svg>
                                        <span>Logo & Brand design</span>
                                    </li>
                                    <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                        <svg className={"flex-shrink-0 w-3.5 h-3.5 text-black"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                        </svg>
                                        <span>Custom 2D illustrations</span>
                                    </li>
                                </ul>
                            </div>
                            <Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"} className={"block p-4 w-full border border-black text-center rounded-xl font-medium hover:border-orange-500 hover:text-orange-500 hover:-translate-y-1 hover:scale-100 duration-300"}>
                                Try us
                            </Link>
                        </div>

                        {/*Card Premium*/}
                        <div className={"sm:py-8 py-4 sm:px-12 px-6 bg-gradient-to-b from-customOrange1 to-customOrange2 rounded-3xl border border-slate-100"}>
                            <div className={"space-y-6 pb-10"}>
                                <div className={"space-y-2"}>
                                    <div className={"flex flex-row"}>
                                        <h4 className={"sm:text-3xl text-2xl font-bold text-white tracking-tighter"}>Monthly <span className={"text-white opacity-50 sm:text-3xl text-2xl tracking-tighter"}>Premium</span></h4>
                                        <div className="mx-auto"></div>
                                        <p className={"sm:px-6 px-4 py-2 bg-white rounded-full sm:text-base text-sm text-black"}>1 slot left</p>
                                    </div>
                                    <p className={"text-base text-white"}>Everything in Trial, plus:</p>
                                </div>
                                <h3 className={"text-5xl font-bold text-white"}>$2999<span className={"text-base text-white font-normal"}>/month</span></h3>
                                <div className={"sm:flex sm:flex-row sm:space-x-14"}>
                                    <ul className={"space-y-4 text-white sm:pb-0 pb-4"}>
                                        <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                            <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                            </svg>
                                            <span>Social media design</span>
                                        </li>
                                        <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                            <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                            </svg>
                                            <span>Motion & animation design</span>
                                        </li>
                                        <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                            <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                            </svg>
                                            <span>Custom 3D illustrations</span>
                                        </li>
                                    </ul>
                                    <ul className={"space-y-4 text-white"}>
                                        <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                            <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                            </svg>
                                            <span>Dedicated project manager</span>
                                        </li>
                                        <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                            <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                            </svg>
                                            <span>Dedicated creative director</span>
                                        </li>
                                        <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                            <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                            </svg>
                                            <span>Cancel or pause anytime</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"} className={"block p-4 w-full bg-white text-orange-600 rounded-xl font-medium text-center hover:shadow-xl hover:shadow-black-200/50 hover:-translate-y-1 hover:scale-100 duration-300"}>
                                    Subscribe now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}