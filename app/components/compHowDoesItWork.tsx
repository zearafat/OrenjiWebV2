import Image from "next/image";
import howItWork1 from "@/public/assets/illustrations/how-it-work-1.png"
import howItWork2 from "@/public/assets/illustrations/how-it-work-2.png"
import howItWork3 from "@/public/assets/illustrations/how-it-work-3.png"
import howItWork4 from "@/public/assets/illustrations/how-it-work-4.png"
import Link from "next/link";


export default function compHowDoesItWork() {
    return(
        <div className={"py-12"}>
            <div className={"container mx-auto"}>
                {/*Header*/}
                <div className={"text-center pb-12"}>
                    <div className={"py-4"}>
                        <h2 className={"text-4xl font-bold tracking-tighter"}>
                            How does it work
                            <span className={"text-orange-600"}>.</span>
                        </h2>
                    </div>
                    <div className={"py-4"}>
                        <p className={"text-slate-600 px-[450px]"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                </div>
                {/*Cards*/}
                <div>
                    <div className={"flex flex-row space-x-4 py-4"}>
                        {/*Card 1*/}
                        <div className={"basis-3/6"}>
                            <div className={"pt-8 pl-8 pr-8 pb-0 bg-slate-50 rounded-3xl h-[400px] hover:-translate-y-0.5 hover:bg-orange-50 duration-300"}>
                                <div className={""}>
                                    <h3 className={"text-xl font-medium tracking-tight pb-4"}>
                                        1. Subscribe to plan
                                    </h3>
                                    <p className={"text-lg text-slate-500"}>
                                        Our recruitment tool subscription is priced so competitively that choosing.
                                    </p>
                                </div>
                                <div className={"pt-8 px-4"}>
                                    <Image
                                        src={howItWork1}
                                        alt={"How it works 1"}
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </div>
                        {/*Card 2*/}
                        <div className={"basis-5/6"}>
                            <div className={"p-8 bg-slate-50 rounded-3xl h-[400px] hover:-translate-y-0.5 hover:bg-orange-50 duration-300"}>
                                <div className={""}>
                                    <h3 className={"text-xl font-medium tracking-tight pb-4"}>
                                        2. Add your design task
                                    </h3>
                                    <p className={"text-lg text-slate-500"}>
                                        Our recruitment tool subscription is priced so competitively that choosing
                                        it over our competitors is a no-brainer!
                                    </p>
                                </div>
                                <div className={"py-14 px-24"}>
                                    <Image
                                        src={howItWork2}
                                        alt={"How it works 2"}
                                        sizes={"100vw"}
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-row space-x-4"}>
                        {/*Card 3*/}
                        <div className={"basis-5/6"}>
                            <div className={"pr-8 pt-8 bg-slate-50 rounded-3xl h-[400px] overflow-hidden hover:-translate-y-0.5 hover:bg-orange-50 duration-300"}>
                                <div className={"flex flex-row"}>
                                    <div className={"relative w-full"}>
                                        <div className={"p-8"}>
                                            <h3 className={"text-xl font-medium tracking-tight pb-4"}>
                                                3. Enjoy your new shiny design!
                                            </h3>
                                            <p className={"text-lg text-slate-500"}>
                                                Our recruitment tool subscription is priced so competitively that choosing it over our
                                                competitors is a no-brainer!
                                            </p>
                                        </div>
                                        <div className={"absolute bottom-0 left-0 right-0 mx-auto"}>
                                            <Image
                                                src={howItWork4}
                                                alt={"How it works 4"}
                                                sizes={"100vw"}
                                                style={{ width: '90%', height: 'auto' }}
                                                quality={100}
                                            />
                                        </div>
                                    </div>
                                    <div className={"p-4"}>
                                        <Image
                                            src={howItWork3}
                                            alt={"How it works 3"}
                                            quality={100}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Card 4*/}
                        <div className={"basis-2/6"}>
                            <div className="bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500 p-8
                            rounded-3xl h-[400px] flex justify-center items-center text-white
                            hover:-translate-y-0.5 duration-300">
                                <h2 className="text-2xl font-bold mb-4">Any questions? <span className={"underline"}>
                                    <Link href={""} >Talk to us 👋</Link></span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}