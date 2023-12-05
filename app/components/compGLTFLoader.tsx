'use client';
import React, { useEffect } from 'react';

export default function GLTF() {
    useEffect(() => {
        // Dynamically import the script when the component mounts
        import("@/app/scripts/gltf").then((gltfScript) => {
            // Call any initialization functions you need to start your Three.js scene
            // Make sure these functions are exported from your script
        }).catch(err => console.error("Script import failed", err));
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <section id={"GLTF"}>
            <div className={"sm:pt-44 sm:block hidden"}>
                <div id="hero" className="m-0 p-0 cursor-grab" />
            </div>
        </section>
    );
}
