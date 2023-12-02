import Link from "next/link";
import Image from "next/image";
import logoFooter from "@/public/assets/images/etc/logo-footer.png";

export default function compFooter() {
    return(
        <div>
            <div className={"bg-black"}>
                <div className={"p-24"}>
                    {/*Header*/}
                    <h1 className={"text-[68px] px-52 font-bold tracking-tighter text-center text-white justify-center"}>
                        Your own dedicated design team, just one click away
                        <span className={"text-orange-600"}>.</span>
                    </h1>
                    {/*BULLETS FEATURE*/}
                    <div className={"py-8"}>
                        <ul className={"space-x-6 flex flex-wrap justify-center text-xl"}>
                            <li className={"flex items-center space-x-3 rtl:space-x-reverse text-white"}>
                                <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>Unlimited revisions</span>
                            </li>
                            <li className={"flex items-center space-x-3 rtl:space-x-reverse text-white"}>
                                <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>Unlimited requests</span>
                            </li>
                            <li className={"flex items-center space-x-3 rtl:space-x-reverse text-white"}>
                                <svg className={"flex-shrink-0 w-3.5 h-3.5 text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>Cancel or pause anytime</span>
                            </li>
                        </ul>
                    </div>
                    {/*CTA BUTTON*/}
                    <div className={"py-6"}>
                        <Link href={""}>
                            <div className={"mx-auto flex items-center justify-center"}>
                                <div className="rounded-full bg-gradient-to-tr from-[#00FFA3] via-[#B61AFF] to-yellow-500
                                p-1.5 hover:bg-gradient-to-br hover:from-[#B61AFF] hover:via-[#2663FF] hover:to-[#00FFA3]
                                hover:-translate-y-1 hover:scale-100 duration-300">
                                    <div className={"flex p-8 rounded-full items-center justify-center bg-black back"}>
                                        <h1 className={"text-2xl font-black text-white"}>Start a project</h1>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <hr className={"h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"} />
                    {/*FOOTER*/}
                    <div className={"py-12"}>
                        <div className={"flex flex-row"}>
                            <div>
                                <Image src={logoFooter} alt={"Orenji Studio"} />
                                <p className={"text-slate-700 text-sm"}>Copyright 2023 Orenji Studio - All rights Reserved</p>
                            </div>
                            <div>
                                <p className={"text-white text-sm"}>585 West 500 south, Suite 130 Bountiful, Salt Lake City, Utah</p>
                                <div className="text-white p-4">
                                    <nav className="flex items-center justify-center space-x-4">
                                        <Link href="https://dribbble.com" className="hover:text-red-600">Dribbble</Link>
                                        <span className="text-red-600">•</span>
                                        <Link href="https://www.behance.net" className="hover:text-red-600">Behance</Link>
                                        <span className="text-red-600">•</span>
                                        <Link href="https://www.instagram.com" className="hover:text-red-600">Instagram</Link>
                                        <span className="text-red-600">•</span>
                                        <a href="https://www.linkedin.com" className="hover:text-red-600">LinkedIn</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}