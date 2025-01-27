'use client';

import {useEffect, useState} from "react";

// Components
import CompNavMenu from "@/app/components/compNavMenu";
import CompForAI3D from "@/app/components/compForAI3D";
import CompHeroHeader from "@/app/components/compHeroHeader";
import CompScrollDownIndicator from "@/app/components/compScrollDownIndicator";
import CompButtonCTA from "@/app/components/compButtonCTA";
import CompForAIBento from "@/app/components/compForAIBento";

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
        <div style={{ width: '100vw', height: '100vh', position: 'absolute' }}>
            {CompLoader && <CompLoader />} {/* Only render if CompLoader is loaded */}
            <CompNavMenu/>
            <div className={"h-full w-full"}>
                <CompForAI3D />
            </div>
            <div className={"text-center"}>
                <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
                    <CompScrollDownIndicator />
                </div>
                <div className={""}>
                    <CompHeroHeader headerText={"AI doesn't have to be boring"}/>
                    <p className={"text-center text-lg py-14 sm:px-[240px]"}>
                        At Orenji Studio, we believe technology and creativity go hand in hand. Our expertise lies in
                        crafting AI-powered UI/UX designs that are functional and visually captivating. Say goodbye to
                        dull interfaces—our designs are here to inspire and engage.
                    </p>
                    <CompButtonCTA label={"Start your dream project ✨"} />
                </div>

                <div className={""}>
                    <CompForAIBento />
                </div>
            </div>
        </div>
    );
}
