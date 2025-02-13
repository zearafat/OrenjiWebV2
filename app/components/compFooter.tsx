"use client"
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/images/etc/logo-dark.svg";

export default function CompFooter() {
    return(
        <section id={"Footer"}>
            <footer>
                <div className={"bg-black"}>
                    <div className={"sm:p-24 py-14 px-6"}>
                        {/*Header*/}
                        <h1 className={"sm:text-[68px] text-[24px] sm:px-52 font-bold tracking-tighter text-center text-white justify-center"}>
                            {"Your own dedicated design team, just one click away"}
                            <span className={"text-orange-600"}>.</span>
                        </h1>
                        {/*BULLETS FEATURE*/}
                        <div className={"py-8"}>
                            <ul className={"space-x-6 flex flex-wrap justify-center sm:text-xl text-lg"}>
                                <li className={"flex items-center space-x-3 rtl:space-x-reverse text-white sm:py-0 py-2"}>
                                    <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Unlimited revisions</span>
                                </li>
                                <li className={"flex items-center space-x-3 rtl:space-x-reverse text-white sm:py-0 py-2"}>
                                    <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Unlimited request</span>
                                </li>
                                <li className={"flex items-center space-x-3 rtl:space-x-reverse text-white sm:py-0 py-2"}>
                                    <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Cancel or pause anytime</span>
                                </li>
                            </ul>
                        </div>
                        {/*CTA BUTTON*/}
                        <div className={"sm:py-12 py-6"}>
                            <div className={"mx-auto flex items-center justify-center"}>
                                <Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"}>
                                    <div className="rounded-full bg-gradient-to-tr from-[#00FFA3] via-[#B61AFF] to-yellow-500
                                        p-1 hover:bg-gradient-to-br hover:from-[#B61AFF] hover:via-[#2663FF] hover:to-[#00FFA3]
                                        hover:-translate-y-1 hover:scale-100 duration-300">
                                        <div
                                            className={"flex sm:py-8 py-6 sm:px-16 px-12 rounded-full items-center justify-center bg-black back"}>
                                            <h1 className={"sm:text-2xl text-xl font-medium text-white"}>Start a
                                                project</h1>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <hr className={"h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"}/>
                        {/*FOOTER*/}
                        <div className={"sm:pt-12 pt-6"}>
                            <div className={"sm:flex sm:flex-row"}>
                                <div>
                                    <Image
                                        src={logo}
                                        alt={"Orenji Studio"}
                                        width={200}
                                        className={"pb-4"}
                                    />
                                    <p className={"text-slate-700 text-sm"}>{"Copyright 2025 Orenji Studio - All rights Reserved"}</p>
                                </div>
                                <div className={"flex-grow sm:pb-0 pb-6"}>
                                    {/*EMPTY*/}
                                </div>
                                <div className={"sm:text-right text-left"}>
                                    <p className={"text-white pb-4"}>{"Pakem, Sleman, Yogyakarta, Indonesia (55582)"}</p>
                                    <div className="text-white py-4">
                                        <nav className="flex items-center justify-center sm:space-x-4 space-x-3">
                                            <Link href="https://dribbble.com/orenjistudio" target={"_blank"}
                                                  className="hover:text-red-600">Dribbble</Link>
                                            <span className="text-red-600">•</span>
                                            <Link href="https://www.behance.net/studioorenji" target={"_blank"}
                                                  className="hover:text-red-600">Behance</Link>
                                            <span className="text-red-600">•</span>
                                            <Link
                                                href="https://www.instagram.com/orenji.studio/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                                                target={"_blank"} className="hover:text-red-600">Instagram</Link>
                                            <span className="text-red-600">•</span>
                                            <a href="https://orenjistudio.gumroad.com/" target={"_blank"}
                                               className="hover:text-red-600">Gumroad</a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}
