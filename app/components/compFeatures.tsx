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
                                Great design, zero-hassle
                                <span className={"text-orange-600"}>.</span>
                            </h2>
                        </div>
                        <div className={"py-4"}>
                            <p className={"text-slate-600 sm:px-[450px] sm:text-base px-4 text-sm"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua
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
                                description={"Our recruitment tool subscription is priced so competitively that " +
                                    "choosing it over our competitors is a no-brainer!"}
                            />
                            <CompFeaturesCard
                                image={iconMonthlyFlat}
                                imageAlt={"Fixed monthly rate"}
                                heading={"Fixed monthly rate"}
                                description={"Our recruitment tool subscription is priced so competitively that " +
                                    "choosing it over our competitors is a no-brainer!"}
                            />
                            <CompFeaturesCard
                                image={iconUnlimitedChanges}
                                imageAlt={"Unlimited changes"}
                                heading={"Unlimited changes"}
                                description={"Our recruitment tool subscription is priced so competitively that " +
                                    "choosing it over our competitors is a no-brainer!"}
                            />
                            <CompFeaturesCard
                                image={iconDailyReports}
                                imageAlt={"Daily report & updates"}
                                heading={"Daily report & updates"}
                                description={"Our recruitment tool subscription is priced so competitively that " +
                                    "choosing it over our competitors is a no-brainer!"}
                            />
                            <CompFeaturesCard
                                image={iconDailyTurnAround}
                                imageAlt={"1-2 days turnaround"}
                                heading={"1-2 days turnaround"}
                                description={"Our recruitment tool subscription is priced so competitively that " +
                                    "choosing it over our competitors is a no-brainer!"}
                            />
                            <CompFeaturesCard
                                image={iconCustomAssets}
                                imageAlt={"Custom-made assets"}
                                heading={"Custom-made assets"}
                                description={"Our recruitment tool subscription is priced so competitively that " +
                                    "choosing it over our competitors is a no-brainer!"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}