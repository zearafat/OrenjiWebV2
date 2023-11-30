import Link from 'next/link'

export default function compPricing() {
    return(
        <div className={"-mt-44 py-12"}>
            <div className={"container mx-auto"}>
                {/*Header*/}
                <div className={"text-center pb-12"}>
                    <div className={"py-4"}>
                        <h2 className={"text-4xl font-bold tracking-tighter"}>
                            Simple pricing. No hidden fee
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
                <div className={"flex flex-row mx-auto justify-center space-x-6"}>
                    {/*Card Trial*/}
                    <div className={"py-8 px-12 bg-slate-50 rounded-3xl border border-slate-100"}>
                        <div className={"space-y-6 pb-10"}>
                            <div className={"space-y-3"}>
                                <h4 className={"text-3xl font-bold tracking-tighter"}>Trial <span className={"text-slate-500 text-3xl tracking-tighter"}>Basic</span></h4>
                                <p className={"text-base"}>Try our services for a week</p>
                            </div>
                            <h3 className={"text-5xl font-bold"}>$999<span className={"text-base text-slate-500 font-normal"}>/week</span></h3>
                            <ul className={"space-y-4"}>
                                <li><span className={"text-slate-800"}>&#10004;</span> Website & App design</li>
                                <li><span className={"text-slate-800"}>&#10004;</span> Logo & Brand design</li>
                                <li><span className={"text-slate-800"}>&#10004;</span> Custom 2D illustrations</li>
                            </ul>
                        </div>
                        <Link href={""} className={"block p-4 w-full border border-black text-center rounded-2xl font-bold"}>
                            Try us
                        </Link>
                    </div>

                    {/*Card Premium*/}
                    <div className={"py-8 px-12 bg-gradient-to-b from-customOrange1 to-customOrange2 rounded-3xl border border-slate-100"}>
                        <div className={"space-y-6 pb-10"}>
                            <div className={"space-y-2"}>
                                <div className={"flex flex-row"}>
                                    <h4 className={"text-3xl font-bold text-white tracking-tighter"}>Monthly <span className={"text-white opacity-50 text-3xl tracking-tighter"}>Premium</span></h4>
                                    <div className="mx-auto"></div>
                                    <p className={"px-6 py-2 bg-white rounded-full text-base text-black"}>1 slot left</p>
                                </div>
                                <p className={"text-base text-white"}>Try our services for a week</p>
                            </div>
                            <h3 className={"text-5xl font-bold text-white"}>$2999<span className={"text-base text-white font-normal"}>/month</span></h3>
                            <div className={"flex flex-row space-x-14"}>
                                <ul className={"space-y-4 text-white"}>
                                    <li><span className={"text-white"}>&#10004;</span> Social media design</li>
                                    <li><span className={"text-white"}>&#10004;</span> Motion & animation design</li>
                                    <li><span className={"text-white"}>&#10004;</span> Custom 3D illustrations</li>
                                </ul>
                                <ul className={"space-y-4 text-white"}>
                                    <li><span className={"text-white"}>&#10004;</span> Dedicated project manager</li>
                                    <li><span className={"text-white"}>&#10004;</span> Dedicated creative director</li>
                                    <li><span className={"text-white"}>&#10004;</span> Cancel or pause anytime</li>
                                </ul>
                            </div>
                        </div>
                        <Link href={""} className={"block p-4 w-full bg-white text-orange-600 rounded-2xl font-bold text-center"}>
                                Subscribe now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}