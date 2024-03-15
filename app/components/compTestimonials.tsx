import React from 'react';
import Image from "next/image";
import Link from 'next/link'
import client1_joan from "@/public/assets/images/photo/joan.jpeg"
import client2_briana from "@/public/assets/images/photo/briana.jpeg"
import client3_ken from "@/public/assets/images/photo/ken.jpeg"

export default function CompTestimonials() {
    return(
        <section id={"Testimonials"}>
            <div className={"sm:py-12 p-4"}>
                <div className={"container mx-auto"}>
                    {/*Header*/}
                    <div className={"text-left sm:pb-10 pb-4"}>
                        <div className={"py-4"}>
                            <h2 className={"sm:text-4xl text-2xl font-bold tracking-tighter"}>
                                {"What our clients think about us"}
                                <span className={"text-orange-600"}>.</span>
                            </h2>
                        </div>
                        <div className={"py-4"}>
                            <p className={"text-slate-600 text-base sm:w-[40rem] leading-tighter]"}>
                                {"We always consider our clients as part of us, where we will always be there for them and grow with their products."}
                            </p>
                        </div>
                    </div>
                    {/*Testimonal Cards*/}
                    <div className={"p-6 bg-gradient-to-b from-customOrange1 to-customOrange2 rounded-3xl mb-4"}>
                        <div className={"pb-4"}>
                            <p className={"text-lg sm:text-2xl font-base leading-relaxed tracking-tight text-white"}>
                                &quot;We worked with Orenji Studio for the past few years, and I really enjoy worked
                                with them. They had a great design sense and really instrumental in our massive product design along
                                with other marketing design stuffs. We did tons of iterations and they are very collaborative.
                                We are very happy with how things work out. I highly recommend them.&quot;
                            </p>
                        </div>
                        <div className={"pt-4"}>
                            <div className={"flex flex-row gap-4 items-center"}>
                                <div>
                                    <Image src={client1_joan} alt={"Joanathan McIntosh"} className={"w-14 h-14 rounded-full"}/>
                                </div>
                                <div className={"flex-grow"}>
                                    <Link href={"https://www.linkedin.com/in/joanathanlim/"} className={"font-medium text-lg text-white hover:underline"} target={"_blank"}>Joanathan</Link>
                                    <p className={"text-slate-200"}>CEO Opaper</p>
                                </div>
                                <div>
                                    <Link href={"https://techcrunch.com/2022/03/07/opaper-takes-the-friction-out-of-social-commerce/"} target={"_blank"}
                                          className="text-white bg-transparent border border-white focus:outline-none
                                            hover:bg-black hover:border-black font-medium rounded-full
                                            text-base sm:px-5 px-3 py-2.5 me-2 mb-2 hover:text-white">Learn more
                                    </Link>
                                    {/*<button type="button"*/}
                                    {/*        className="text-white bg-transparent border border-white focus:outline-none*/}
                                    {/*        hover:bg-white focus:ring-1 focus:ring-white font-medium rounded-full*/}
                                    {/*        text-base sm:px-5 px-3 py-2.5 me-2 mb-2 hover:text-black">Play video ▶*/}
                                    {/*</button>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-col sm:flex-row gap-4 items-center"}>
                        <div className={"p-6 bg-slate-100 rounded-3xl"}>
                            <div className={"pb-4"}>
                                <p className={"text-lg sm:text-2xl font-base leading-relaxed tracking-tight"}>
                                    &quot;Working with Orenji Studio was a game-changer for our business.
                                    They captured the essence of our brand effortlessly and translated it into stunning visuals.
                                    Their team&#39;s dedication and professionalism made the entire process seamless.
                                    Couldn&#39;t be happier with the results!&quot;
                                </p>
                            </div>
                            <div className={"pt-4"}>
                                <div className={"flex flex-row gap-4 items-center"}>
                                    <div>
                                        <Image src={client2_briana} alt={"Briana Neidig"} className={"w-14 h-14 rounded-full"}/>
                                    </div>
                                    <div className={"flex-grow"}>
                                        <Link href={"https://www.linkedin.com/in/wiiwooorg/"} className={"font-medium text-lg text-black hover:underline"} target={"_blank"}>Briana Neidig</Link>
                                        <p className={"text-slate-500"}>CEO WiiWoo</p>
                                    </div>
                                    <div>
                                        <Link href={"https://wiiwoo.org"} target={"_blank"}
                                              className="text-black bg-transparent border border-black focus:outline-none
                                            hover:bg-black font-medium rounded-full
                                            text-base sm:px-5 px-3 py-2.5 me-2 mb-2 hover:text-white">Learn more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"p-6 bg-slate-100 rounded-3xl"}>
                            <div className={"pb-4"}>
                                <p className={"text-lg sm:text-2xl font-base leading-relaxed tracking-tight"}>
                                    &quot;Orenji Studio exceeded our expectations with their exceptional designs.
                                    They took the time to understand our vision and brought it to fruition with creativity and precision.
                                    The collaborative process was smooth, and the final product speaks for itself.
                                    Highly recommend Orenji Studio for top-notch design services.&quot;
                                </p>
                            </div>
                            <div className={"pt-4"}>
                                <div className={"flex flex-row gap-4 items-center"}>
                                    <div>
                                        <Image src={client3_ken} alt={"Ken Imai"} className={"w-14 h-14 rounded-full"}/>
                                    </div>
                                    <div className={"flex-grow"}>
                                        <Link href={"https://www.linkedin.com/in/ken-imai-312639240/"} className={"font-medium text-lg text-black hover:underline"} target={"_blank"}>Ken Imai</Link>
                                        <p className={"text-slate-500"}>CEO Mealmates</p>
                                    </div>
                                    <div>
                                        <Link href={"https://prtimes.jp/main/html/rd/p/000000001.000119497.html"} target={"_blank"}
                                                className="text-black bg-transparent border border-black focus:outline-none
                                            hover:bg-black font-medium rounded-full
                                            text-base sm:px-5 px-3 py-2.5 me-2 mb-2 hover:text-white">Learn more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}