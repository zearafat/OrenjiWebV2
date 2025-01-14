'use client';

import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Preload, Stats, SoftShadows } from '@react-three/drei';
import {useEffect, useRef, useState} from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Components
import CompNavMenu from "@/app/components/compNavMenu";

function AnimatedModel() {
    const gltf = useLoader(GLTFLoader, '/assets/illustrations/gltf/orenjistudio.glb');
    const mixer = useRef<THREE.AnimationMixer | null>(null);

    useEffect(() => {
        if (gltf.animations.length) {
            mixer.current = new THREE.AnimationMixer(gltf.scene);

            // Play all animations
            gltf.animations.forEach((clip) => {
                if (mixer.current) {
                    const action = mixer.current.clipAction(clip);
                    action.setLoop(THREE.LoopRepeat, Infinity);
                    action.play()
                }
            })
        }

        // Enable shadows for the model
        gltf.scene.traverse((node) => {
            if (node instanceof THREE.Mesh || node instanceof THREE.SkinnedMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        });

        return () => {
            mixer.current?.stopAllAction(); // Cleanup mixer on unmount
        };
    }, [gltf]);

    useFrame((_, delta) => mixer.current?.update(delta)); // Update animation on each frame

    return <primitive object={gltf.scene} />;
}

export default function GameUIPage() {
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
        <div style={{ width: '100vw', height: '100vh' }}>
            {CompLoader && <CompLoader />} {/* Only render if CompLoader is loaded */}
            <CompNavMenu/>
            <Canvas shadows camera={{ position: [5, 2, 8], fov: 50 }} dpr={[1, 1.5]}>
                <Preload all />
                <Stats />
                <SoftShadows size={10} samples={16} focus={1} />

                {/*Ligthing*/}
                <ambientLight intensity={0.2} />
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={1}
                    castShadow
                    shadow-mapSize={[2048, 2048]}
                    shadow-camera-left={-15}
                    shadow-camera-right={15}
                    shadow-camera-top={15}
                    shadow-camera-bottom={-15}
                    shadow-camera-near={1}
                    shadow-camera-far={50}
                    shadow-bias={-0.001} // Adjust bias as needed
                />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                {/* Ground Plane */}
                <mesh
                    position={[0, -1, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    receiveShadow
                    castShadow
                >
                    <planeGeometry args={[50, 50]} />
                    <meshStandardMaterial color="#e0e0e0" />
                </mesh>

                {/*Shadows*/}
                <ContactShadows
                    position={[0, -1, 0]}
                    opacity={0.5}
                    scale={10}
                    blur={1.5}
                    far={10}
                />

                {/*3D Model*/}
                <AnimatedModel />

                {/*Environment*/}
                <Environment preset={"sunset"} resolution={256} />

                {/*Post-Processing Effects*/}
                <EffectComposer>
                    <Bloom
                        intensity={0.4}
                        luminanceThreshold={0.2}
                        luminanceSmoothing={0.9}
                    />
                </EffectComposer>

                {/*Camera Controls*/}
                <OrbitControls />
            </Canvas>
        </div>
    );
}