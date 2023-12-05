// app/components/compHero.tsx
import Link from 'next/link';

export default function compHero() {
    return(
        <section id={"Hero"}>
            <div className={"py-16"}>
                <div className={"container mx-auto"}>
                    <div className={"text-center"}>
                        {/*HEADER*/}
                        <div>
                            <h1 className={"text-[68px] font-bold tracking-tighter"}>
                                Unlimited design, with flat monthly fee
                                <span className={"text-orange-600"}>.</span>
                            </h1>
                        </div>
                        {/*BULLETS FEATURE*/}
                        <div className={"pt-6 pb-12"}>
                            <ul className={"space-x-6 flex flex-wrap justify-center text-xl"}>
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
                        <div className={"py-4"}>
                            <Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"}>
                                <button type="button"
                                        className={"px-[42px] py-[22px] text-xl tracking-tight font-medium text-center " +
                                            "btn-gradient-orenji hover:shadow-xl hover:shadow-orange-200/50 hover:-translate-y-1 " +
                                            "hover:scale-100 duration-300"}>
                                    Start a project
                                </button>
                            </Link>
                            <p className={"pt-8"}>
                                <span className={"text-red-500"}>1 slot left. </span>
                                <span className={"text-slate-500"}>Want to talk first? </span>
                                <span className={"underline"}><Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"}>Get in touch 👋</Link></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}