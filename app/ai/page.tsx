'use client';

import Link from "next/link";
import React, {useEffect, useState} from "react";

// Components
import CompNavMenu from "@/app/components/compNavMenu";
import CompForAI3D from "@/app/components/compForAI3D";
import CompHeroHeader from "@/app/components/compHeroHeader";
import CompScrollDownIndicator from "@/app/components/compScrollDownIndicator";
import CompButtonCTA from "@/app/components/compButtonCTA";
import CompForAIBento from "@/app/components/compForAIBento";
import CompForAISlider from "@/app/components/compForAISlider";
import CompForAIPortfolio from "@/app/components/compForAIPortfolio";
import CompPricing from "@/app/components/compPricing";
import CompFAQ from "@/app/components/compFAQ";
import CompFooter from "@/app/components/compFooter";

export default function ForAIPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Ensure this runs only in the client environment
    }, []);

    let CompLoader;

    if (isClient) {
        CompLoader = require('@/app/components/compLoader').default; // Dynamic import
    }

    if (!isClient) {
        return null; // Render nothing during SSR
    }

    return (
        <div className={"overflow-hidden"}>
            <CompNavMenu />
            <div className={"scene-container"} style={{ width: '100vw', height: '100vh'}}>
                {CompLoader && <CompLoader />} {/* Only render if CompLoader is loaded */}
                <CompForAI3D />
            </div>

            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
                <CompScrollDownIndicator />
            </div>

            <div className={"text-center pb-12"}>
                <CompHeroHeader headerText={"AI doesn't have to be boring"}/>
                <p className={"text-base sm:text-lg leading-relaxed sm:py-14 py-6 max-w-7xl text-slate-500 mx-auto text-center px-4 sm:px-6 sm:text-xl"}>
                    {
                        "At Orenji Studio, we believe technology and creativity go hand in hand. Our expertise lies in" +
                        "crafting AI-powered UI/UX designs that are functional and visually captivating. Say goodbye to" +
                        " dull interfaces—our designs are here to inspire and engage."
                    }
                </p>
                <Link href={"https://tally.so/r/wkNrkZ"} target={"_blank"}>
                    <CompButtonCTA label={"Start your dream AI project ✨"} />
                </Link>
            </div>

            <div className={"pb-12"}>
                <CompForAIBento />
            </div>

            <div className={"pb-12"}>
                <CompForAISlider />
            </div>

            <div className={"pb-12"}>
                <CompForAIPortfolio />
            </div>

            <div className={"pb-12"}>
                <CompPricing />
            </div>

            <div className={"pt-12"}>
                <CompFAQ />
                <CompFooter />
            </div>
        </div>
    );
}
