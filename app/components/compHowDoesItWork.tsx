import Image from "next/image";
import howItWork1 from "@/public/assets/illustrations/how-it-work-1.png"
import howItWork2 from "@/public/assets/illustrations/how-it-work-2.png"
import howItWork3 from "@/public/assets/illustrations/how-it-work-3.png"
import howItWork4 from "@/public/assets/illustrations/how-it-work-4.png"
import Link from "next/link";


export default function compHowDoesItWork() {
    return(
        <section id={"HowItWork"}>
            <div className={"sm:py-12 py-4"}>
                <div className={"container mx-auto"}>
                    {/*Header*/}
                    <div className={"text-center sm:pb-12 pb-4"}>
                        <div className={"py-4"}>
                            <h2 className={"sm:text-4xl text-2xl font-bold tracking-tighter"}>
                                {"How does it work"}
                                <span className={"text-orange-600"}>.</span>
                            </h2>
                        </div>
                        <div className={"py-4"}>
                            <p className={"text-slate-600 sm:px-[450px] text-base px-4"}>
                                {"No overcomplicated workflow, no unnecessary bureaucracy or pappers. Let's go straight to realizing " +
                                    "your ideas and tackling your business problems."}
                            </p>
                        </div>
                    </div>
                    {/*Cards*/}
                    <div className={"sm:p-0 p-4"}>
                        <div className={"sm:flex sm:flex-row sm:space-x-4 sm:py-2"}>
                            {/*Card 1*/}
                            <div className={"sm:basis-3/6 pb-4"}>
                                <div className={"pt-8 pl-8 pr-8 pb-0 bg-slate-50 rounded-3xl sm:h-[400px] h-[285px] " +
                                    "hover:-translate-y-0.5 hover:bg-orange-50 duration-300"}>
                                    <div className={""}>
                                        <h3 className={"text-xl font-medium tracking-tight pb-4"}>
                                            {"1. Subscribe to plan"}
                                        </h3>
                                        <p className={"sm:text-lg text-sm text-slate-500"}>
                                            {"Click the button, fill out some questionnaires, then our CEO will contact you within 1x24 to explain further."}
                                        </p>
                                    </div>
                                    <div className={"sm:pt-8 pt-4 px-4"}>
                                        <Image
                                            src={howItWork1}
                                            alt={"How it works 1"}
                                            quality={100}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*Card 2*/}
                            <div className={"sm:basis-5/6 pb-4"}>
                                <div className={"p-8 bg-slate-50 rounded-3xl sm:h-[400px] h-[300px] hover:-translate-y-0.5 hover:bg-orange-50 duration-300"}>
                                    <div className={""}>
                                        <h3 className={"text-xl font-medium tracking-tight pb-4"}>
                                            {"2. Add your design task"}
                                        </h3>
                                        <p className={"sm:text-lg text-sm text-slate-500"}>
                                            {"After your subscribe to the plan, you can request as many designs as you want via Trello, Email or directly in Figma. You can give as many feedback or as many revisions as you want."}
                                        </p>
                                    </div>
                                    <div className={"sm:pt-8 pt-6 sm:px-24"}>
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
                        <div className={"sm:flex sm:flex-row sm:space-x-4"}>
                            {/*Card 3*/}
                            <div className={"sm:basis-5/6 pb-4"}>
                                <div className={"sm:pr-8 sm:pt-8 p-2 bg-slate-50 rounded-3xl sm:h-[400px] h-[450px] overflow-hidden hover:-translate-y-0.5 hover:bg-orange-50 duration-300"}>
                                    <div className={"sm:flex sm:flex-row"}>
                                        <div className={"relative w-full"}>
                                            <div className={"p-8"}>
                                                <h3 className={"text-xl font-medium tracking-tight pb-4"}>
                                                    {"3. Enjoy your new shiny design!"}
                                                </h3>
                                                <p className={"sm:text-lg text-sm text-slate-500"}>
                                                    {"Receive your design updates within 1-3 business days. Not satisfied? No problem. We will design again until you are 1000% happy."}
                                                </p>
                                            </div>
                                            <div className={"absolute bottom-0 left-0 right-0 mx-auto"}>
                                                <Image
                                                    src={howItWork4}
                                                    alt={"How it works 4"}
                                                    sizes={"100vw"}
                                                    style={{ width: '90%', height: 'auto' }}
                                                    quality={100}
                                                    className={"invisible sm:visible"}
                                                />
                                            </div>
                                        </div>
                                        <div className={"sm:p-4 p-2"}>
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
                                rounded-3xl sm:h-[400px] h-[100px] flex justify-center items-center text-white
                                hover:-translate-y-0.5 duration-300">
                                    <h2 className="sm:text-xl text-lg font-medium p-4-">Any questions? <span className={"underline"}>
                                        <Link href={"https://tally.so/r/wkNrkZ"}>Talk to us 👋</Link></span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}