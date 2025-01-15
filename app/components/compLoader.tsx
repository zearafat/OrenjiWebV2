'use client';

import Lottie from 'react-lottie';
import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import animationData from '../json/loading.json';

export default function CompLoader() {
    const { active } = useProgress();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    if (!isMounted) return null;

    return (
        <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
            <div className="loading-screen__container">
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />

                <div className="container mx-auto text-center align-middle">
                    <h1 className={"mx-auto text-2xl p-24"}>Loading...</h1>
                </div>
            </div>
        </div>
    );
}