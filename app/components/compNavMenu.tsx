import Image from 'next/image';
import Link from 'next/link';
import logo from "@/public/assets/images/etc/logo-light.svg";

export default function CompNavMenu() {
    return (
        <section id={"NavMenu"} className={"sticky top-0 z-50"}>
            <div className={"bg-white w-full border-b border-slate-100"}>
                <div className={"container mx-auto"}>
                    <nav className={"flex justify-between items-center py-4 sm:px-0 px-4"}>
                        <div>
                            <Link href={"/"} className={"text-base hover:text-orange-500"}>
                                <Image src={logo} alt="Orenji Studio" width={160}
                                       height={48}/> {/* Make sure to include height */}
                            </Link>
                        </div>
                        <div className={"hidden md:flex space-x-12"}>
                            <Link href={"#Pricing"} className={"text-base hover:text-orange-500"}>
                                Pricing
                            </Link>
                            <Link href="https://dribbble.com/orenjistudio" target={"_blank"}
                                  className={"text-base hover:text-orange-500"}>
                                Portfolio
                            </Link>
                            <Link href={"/about"} target={"_blank"}
                                  className={"text-base hover:text-orange-500"}>
                                Why us
                                <span className={"relative h-0 pl-1"}>
                                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-500 opacity-75"></span>
                                    <span className="absolute inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                            </Link>
                            <Link href={"#HowItWork"} className={"text-base hover:text-orange-500"}>
                                How it work
                            </Link>
                            <Link href={"#FAQ"} className={"text-base hover:text-orange-500"}>
                                F.A.Q
                            </Link>
                        </div>
                        <Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"}
                              className={"border rounded-lg px-6 py-2 hover:border-orange-500 hover:text-orange-500"}>
                            Start a project
                        </Link>
                    </nav>
                </div>
            </div>
        </section>
    );
};
