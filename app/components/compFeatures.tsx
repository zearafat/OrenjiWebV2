import Link from "next/link";

// Import your 3D character images
// Replace these paths with your actual large 3D character illustrations
import imgCharacterDriven from "@/public/assets/illustrations/imgCharacterDriven.webp"
import imgFullTeam from "@/public/assets/illustrations/imgFullTeam.webp"
import imgMemorableExp from "@/public/assets/illustrations/imgMemorableExp.webp"
import CompFeatureStory from "@/app/components/compFeaturesCard";

/**
 * CompFeatures Component
 * Main section showcasing "What Makes Us Different"
 * Uses vertical storytelling layout with large 3D character illustrations
 * Alternates image position (left/right) for visual variety
 */
export default function CompFeatures() {
    return(
        <section id={"Features"}>
            <div className={"sm:py-24 py-4"}>
                <div className={"container mx-auto px-4"}>

                    {/* Section Header */}
                    <div className={"text-center"}>
                        <div className={"py-4"}>
                            <h2 className={"sm:text-4xl text-2xl font-bold tracking-tighter"}>
                                {"What Makes Us Different"}
                                <span className={"text-orange-600"}>.</span>
                            </h2>
                        </div>
                        <div className={"py-4"}>
                            <p className={"text-slate-600 sm:px-[340px] text-base px-4"}>
                                {"We're not another minimal, corporate design agency. We create interfaces with soul—full of character, personality, and delight."}
                            </p>
                        </div>
                    </div>

                    {/* Feature Stories - Vertical Layout with Large Images */}
                    <div className={"sm:py-12 py-8"}>
                        <div className={"space-y-8 sm:space-y-16"}>

                            {/* Feature 1: Character-Driven Design - Image on LEFT */}
                            <CompFeatureStory
                                image={imgCharacterDriven}
                                imageAlt={"3D character surrounded by colorful design elements shaped like an S"}
                                heading={"Character-Driven Design"}
                                description={"We create custom characters and 3D illustrations that become your brand identity, giving your product a personality users remember."}
                                imagePosition="left"
                            />

                            {/* Feature 2: Full Team - Image on RIGHT */}
                            <CompFeatureStory
                                image={imgFullTeam}
                                imageAlt={"Team of 3D characters collaborating on design work"}
                                heading={"Full team, not freelancers"}
                                description={"Dedicated designers and illustrators working together on your project, ensuring consistency, quality, and cohesive creative vision."}
                                imagePosition="right"
                            />

                            {/* Feature 3: Memorable Experiences - Image on LEFT */}
                            <CompFeatureStory
                                image={imgMemorableExp}
                                imageAlt={"Character playing with a friendly cat mascot and decorative elements"}
                                heading={"Built for memorable experiences"}
                                description={"We create products people want to open, not just need to use—through personality, color, and delight in every interaction."}
                                imagePosition="left"
                            />
                        </div>
                    </div>

                    {/* CTA Link - "Why Us" */}
                    <div className={"text-center py-4"}>
                        <Link
                            href={"/about"}
                            target={"_blank"}
                            className={"sm:text-xl text-base font-medium sm:p-6 p-3 duration-300 text-orange-500 hover:text-orange-700 py-4 hover:border-orange-700 duration-10 border border-orange-500 rounded-full inline-block"}
                        >
                            What makes us different from competitors ❯
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}