// app/components/compHeroImages.tsx
import Image from 'next/image';
import Link from "next/link";

// 1st Row
import Porto1 from '@/public/assets/images/portofolios/porto-1.webp';
import Porto2 from '@/public/assets/images/portofolios/porto-2.webp';
import Porto3 from '@/public/assets/images/portofolios/porto-3.webp';
import Porto4 from '@/public/assets/images/portofolios/porto-4.webp';
import Porto5 from '@/public/assets/images/portofolios/porto-5.webp';
import Porto6 from '@/public/assets/images/portofolios/porto-6.webp';
import Porto7 from '@/public/assets/images/portofolios/porto-7.webp';
import Porto8 from '@/public/assets/images/portofolios/porto-8.webp';

// 2nd Row
import Porto9 from '@/public/assets/images/portofolios/porto-9.webp';
import Porto10 from '@/public/assets/images/portofolios/porto-10.webp';
import Porto11 from '@/public/assets/images/portofolios/porto-11.webp';
import Porto12 from '@/public/assets/images/portofolios/porto-12.webp';
import Porto13 from '@/public/assets/images/portofolios/porto-13.webp';
import Porto14 from '@/public/assets/images/portofolios/porto-14.webp';
import Porto15 from '@/public/assets/images/portofolios/porto-15.webp';
import Porto16 from '@/public/assets/images/portofolios/porto-16.webp';

export default function CompHeroImages() {
    return (
        <section id={"HeroImages"}>
            <div className={"pb-12"}>
                <div className={"relative"}>
                    <div className="overflow-hidden whitespace-nowrap">
                        {/*1st Row Marquee*/}
                        <div className="animate-marquee-top flex space-x-4 mb-8">
                            <Image
                                src={Porto1}
                                alt={`Portfolio 1`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto2}
                                alt={`Portfolio 2`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto3}
                                alt={`Portfolio 3`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto4}
                                alt={`Portfolio 4`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto5}
                                alt={`Portfolio 5`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto6}
                                alt={`Portfolio 6`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto7}
                                alt={`Portfolio 7`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto8}
                                alt={`Portfolio 8`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                        </div>

                        {/*2nd Row Marquee*/}
                        <div className="animate-marquee-bottom flex space-x-4">
                            <Image
                                src={Porto9}
                                alt={`Portfolio 9`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto10}
                                alt={`Portfolio 10`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto11}
                                alt={`Portfolio 11`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto12}
                                alt={`Portfolio 12`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto13}
                                alt={`Portfolio 13`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto14}
                                alt={`Portfolio 14`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto15}
                                alt={`Portfolio 15`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                            <Image
                                src={Porto16}
                                alt={`Portfolio 16`}
                                sizes={"100vw"}
                                style={{ width: '35%', height: 'auto' }}
                                quality={100}
                                className={"rounded-lg"}
                            />
                        </div>
                    </div>
                    {/* Overlay Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

                    {/* Floating button */}
                    <Link href={""} className="backdrop-filter backdrop-blur-lg bg-white/30 absolute bottom-0 mb-10
                    left-1/2 transform -translate-x-1/2 px-6 py-4 bg-white text-black text-xl font-medium
                    rounded-xl shadow-md hover:bg-orange-50 hover:-translate-y-1 duration-300">
                        View Portfolio  ⤍
                    </Link>
                </div>
            </div>
        </section>
    );
}
