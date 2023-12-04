import Image from 'next/image';
import Link from 'next/link';
import logo from "@/public/assets/images/etc/logo-light.svg";

export default function CompNavMenu() {
    return (
        <div className={"bg-white sticky top-0 z-50 w-full border-b"}>
            <div className={"container mx-auto"}>
                <nav className="flex justify-between items-center py-4">
                    <div>
                        <Image src={logo} alt="Orenji Studio" width={160} height={48} /> {/* Make sure to include height */}
                    </div>
                    <div className="hidden md:flex space-x-12">
                        <Link href="/pricing" className="text-base hover:text-orange-500">
                            Pricing
                        </Link>
                        <Link href="/portfolio" className="text-base hover:text-orange-500">
                            Portfolio
                        </Link>
                        <Link href="/portfolio" className="text-base hover:text-orange-500">
                            Why us
                        </Link>
                        <Link href="/portfolio" className="text-base hover:text-orange-500">
                            How it work
                        </Link>
                        <Link href="/about-us" className="text-base hover:text-orange-500">
                            F.A.Q
                        </Link>
                    </div>
                    <Link href="/start-project" className="border rounded-lg px-6 py-2 hover:border-orange-500 hover:text-orange-500">
                            Start a project
                    </Link>
                </nav>
            </div>
        </div>
    );
};