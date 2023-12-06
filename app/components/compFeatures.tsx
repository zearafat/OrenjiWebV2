import CompFeaturesCard from "@/app/components/compFeaturesCard";

import iconUnlimitedDesign from "@/public/assets/illustrations/icons/icon-feature-1.png"
import iconMonthlyFlat from "@/public/assets/illustrations/icons/icon-feature-2.png"
import iconUnlimitedChanges from "@/public/assets/illustrations/icons/icon-feature-3.png"
import iconDailyReports from "@/public/assets/illustrations/icons/icon-feature-4.png"
import iconDailyTurnAround from "@/public/assets/illustrations/icons/icon-feature-5.png"
import iconCustomAssets from "@/public/assets/illustrations/icons/icon-feature-6.png"

export default function CompFeatures() {
    return(
        <section id={"Features"}>
            <div className={"sm:py-12 py-4"}>
                <div className={"container mx-auto"}>
                    {/*Header*/}
                    <div className={"text-center"}>
                        <div className={"py-4"}>
                            <h2 className={"sm:text-4xl text-2xl font-bold tracking-tighter"}>
                                {"Great design, zero-hassle"}
                                <span className={"text-orange-600"}>.</span>
                            </h2>
                        </div>
                        <div className={"py-4"}>
                            <p className={"text-slate-600 sm:px-[450px] sm:text-base px-4 text-sm"}>
                                {"When you hire us, you will get the whole team with all of our creative power. Not just 1-man-show with couple of outsourced designers like many others."}
                            </p>
                        </div>
                    </div>
                    {/*Cards*/}
                    <div className={"sm:py-12 p-2"}>
                        <div className={"grid sm:grid-cols-3 grid-cols-1 gap-4 p-2"}>
                            <CompFeaturesCard
                                image={iconUnlimitedDesign}
                                imageAlt={"Unlimited design"}
                                heading={"Unlimited design"}
                                description={"Have lots of brilliant ideas that you want to realize? Leave it all to us. " +
                                    "Request all the designs you want with unlimited design request! Go crazy!"}
                            />
                            <CompFeaturesCard
                                image={iconMonthlyFlat}
                                imageAlt={"Fixed monthly rate"}
                                heading={"Fixed monthly rate"}
                                description={"Pay once every month, and get all our services. As simple as that. " +
                                    "No overcomplicated pricing schemes with many pricing tables. Just 1 flat, monthly rate."}
                            />
                            <CompFeaturesCard
                                image={iconUnlimitedChanges}
                                imageAlt={"Unlimited changes"}
                                heading={"Unlimited changes"}
                                description={"Still not satisfied with the existing design? Ask for as many revisions " +
                                    "and changes as you want. Until you are happy. No complaint. Promise."}
                            />
                            <CompFeaturesCard
                                image={iconDailyReports}
                                imageAlt={"Daily report & updates"}
                                heading={"Daily report & updates"}
                                description={"Get daily reports and updates. Never feel left out. We believe communication is a key and " +
                                    "we want you to be part of us, from day one."}
                            />
                            <CompFeaturesCard
                                image={iconDailyTurnAround}
                                imageAlt={"1-2 days turnaround"}
                                heading={"1-2 days turnaround"}
                                description={"Get your designs delivered at an insane speed. Not just fast, but also looks " +
                                    "beautiful, functional and consistent. And that's our expertise. "}
                            />
                            <CompFeaturesCard
                                image={iconCustomAssets}
                                imageAlt={"Custom-made assets"}
                                heading={"Custom-made assets"}
                                description={"We never use templates. We have in-house super talented illustrators and " +
                                    "designers that will help make your product stand out among the rest."}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}