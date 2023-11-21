// app/components/compHero.tsx
import Link from 'next/link';

export default function compHero() {
    return(
        <div className={"py-12"}>
            <div className={"container mx-auto"}>
                <div className={"text-center"}>
                    {/*HEADER*/}
                    <div>
                        <h1 className={"text-[74px] px-52 font-bold tracking-tighter text-center justify-center"}>
                            Unlimited design, with flat monthly fee
                            <span className={"text-orange-600"}>.</span>
                        </h1>
                    </div>

                    {/*BULLETS FEATURE*/}
                    <div className={"my-8"}>
                        <ul className={"space-x-6 flex flex-wrap items-center justify-center text-xl"}>
                            <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                <svg className={"flex-shrink-0 w-3.5 h-3.5 text-orange-600"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>Unlimited revisions</span>
                            </li>
                            <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                <svg className={"flex-shrink-0 w-3.5 h-3.5 text-orange-600"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>Unlimited requests</span>
                            </li>
                            <li className={"flex items-center space-x-3 rtl:space-x-reverse"}>
                                <svg className={"flex-shrink-0 w-3.5 h-3.5 text-orange-600"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>Cancel or pause anytime</span>
                            </li>
                        </ul>
                    </div>

                    {/*BUTTON CTA*/}
                    <div className={"my-14"}>
                        <button type="button" className={"px-[44px] py-[18px] text-xl tracking-tight font-bold text-center " +
                            "btn-gradient-orenji hover:shadow-xl hover:shadow-orange-200/50 hover:-translate-y-1 hover:scale-100 duration-300"}>
                            Start a project
                        </button>
                        <p className={"pt-8"}>
                            <span className={"text-red-500"}>1 slot left. </span>
                            <span className={"text-slate-500"}>Want to talk first? </span>
                            <span className={"underline"}><Link href={"mailto:orenjistudio@outlook.com"}>Get in touch 👋</Link></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}