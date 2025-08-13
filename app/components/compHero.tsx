import CompHeroHeader from "@/app/components/compHeroHeader";
import CompBulletFeatures from "@/app/components/compBulletFeatures";
import CompHeroCTA from "@/app/components/compHeroCTA";

export default function CompHero() {
    return(
        <section id={"Hero"}>
            {/*HEADER*/}
            <div className={"sm:p-12 pt-8 px-6 sm:mt-12"}>
                <div className={"container mx-auto"}>
                    <div className={"sm:text-center text-left"}>
                        {/*SECTION HERO TEXT*/}
                        <CompHeroHeader headerText={"Unlimited design support for fast-moving startups"} />
                        {/*SECTION BULLET FEATURES*/}
                        <CompBulletFeatures/>
                        {/*SECTION HERO CTA*/}
                        <CompHeroCTA/>
                    </div>
                </div>
            </div>
        </section>
    )
}