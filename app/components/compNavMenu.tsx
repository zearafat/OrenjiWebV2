import Image from 'next/image';
import Link from 'next/link';
import logo from "@/public/assets/images/etc/logo-light.svg";

export default function CompNavMenu() {
    return (
        <section id={"NavMenu"}>
            <div className={"bg-white sticky top-0 z-50 w-full border-b border-slate-100"}>
                <div className={"container mx-auto"}>
                    <nav className={"flex justify-between items-center py-4"}>
                        <div>
                            <Image src={logo} alt="Orenji Studio" width={160} height={48} /> {/* Make sure to include height */}
                        </div>
                        <div className={"hidden md:flex space-x-12"}>
                            <Link href={"#Pricing"} className={"text-base hover:text-orange-500"}>
                                Pricing
                            </Link>
                            <Link href="https://dribbble.com/orenjistudio" target={"_blank"} className={"text-base hover:text-orange-500"}>
                                Portfolio
                            </Link>
                            <Link href={"#Features"} className={"text-base hover:text-orange-500"}>
                                Why us
                            </Link>
                            <Link href={"#HowItWork"} className={"text-base hover:text-orange-500"}>
                                How it work
                            </Link>
                            <Link href={"#FAQ"} className={"text-base hover:text-orange-500"}>
                                F.A.Q
                            </Link>
                        </div>
                        <Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"} className={"border rounded-lg px-6 py-2 hover:border-orange-500 hover:text-orange-500"}>
                                Start a project
                        </Link>
                    </nav>
                </div>
            </div>
        </section>
    );
};
