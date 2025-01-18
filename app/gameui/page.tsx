'use client';

import * as THREE from 'three';
import {useEffect, useRef, useState} from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Preload, Stats, SoftShadows, Html } from '@react-three/drei';

// Components
import CompNavMenu from "@/app/components/compNavMenu";
import CompModal from "@/app/components/compModal";
import CompTooltip from "@/app/components/compTooltip";

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

const handleClick = () => {
    console.log('Invisible mesh clicked!');
    // Add your click handling logic here
};

export default function GameUIPage() {
    const [isClient, setIsClient] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const meshRef = useRef<THREE.Mesh>(null);

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

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false)

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
            {CompLoader && <CompLoader />} {/* Only render if CompLoader is loaded */}
            <CompNavMenu/>
            <Canvas shadows orthographic camera={{zoom: 50, position: [-10, 10, 20]}} dpr={[1, 1.5]}>
                <Preload all/>
                <Stats/>
                <SoftShadows size={10} samples={16} focus={1}/>

                {/*Ligthing*/}
                <ambientLight intensity={0.2}/>
                <directionalLight
                    position={[5, 10, 5]}
                    castShadow
                    intensity={1}
                    shadow-mapSize={[1024, 1024]}
                    shadow-camera-left={-15}
                    shadow-camera-right={15}
                    shadow-camera-top={15}
                    shadow-camera-bottom={-15}
                    shadow-camera-near={1}
                    shadow-camera-far={50}
                    shadow-bias={-0.001} // Adjust bias as needed
                />
                <pointLight position={[-10, -10, -10]} intensity={0.5}/>

                {/* First Box */}
                <mesh
                    position-x={-0.5}
                    position-y={3.5}
                    position-z={5}
                    scale={2.5}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setTimeout(() => setHovered(false), 1000)} // Delay hiding the tooltip
                >
                    <boxGeometry args={[1, 1.8, 1]}/>
                    <meshStandardMaterial color={hovered ? "orange" : "red"} wireframe={true}/>

                    {/* Tooltip */}
                    {hovered && (
                        <Html position={[0, 1, 0]} center>
                            <CompTooltip
                                text="About us"
                                onClick={() => {
                                    openModal();
                                    setHovered(false);
                                }}
                            />
                        </Html>
                    )}
                </mesh>

                {/*SECOND BOX*/}
                <mesh
                    position-x={-7.5}
                    position-y={3.5}
                    position-z={8}
                    scale={4}
                    ref={meshRef}
                    onClick={handleClick}
                    // Make the mesh invisible but still interactive
                    visible={true}  // This hides the mesh visually
                    // Alternatively, you can use transparent material:
                    // material={<meshBasicMaterial transparent opacity={0} />}
                >
                    <boxGeometry args={[1.8, 1, 1]}/>
                    <meshStandardMaterial color={"blue"} wireframe={true}/>
                </mesh>

                {/* Ground Plane */}
                <mesh
                    position={[0, -1, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    receiveShadow
                    castShadow
                >
                    <planeGeometry args={[50, 50]}/>
                    <meshStandardMaterial color="#ffffff"/>
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
                <AnimatedModel/>

                {/*Environment*/}
                <Environment preset={"sunset"} resolution={256}/>

                {/*Post-Processing Effects*/}
                <EffectComposer>
                    <Bloom
                        intensity={0.5}
                        luminanceThreshold={0.5}
                        luminanceSmoothing={1}
                    />
                </EffectComposer>

                {/*Camera Controls*/}
                <OrbitControls
                    enableZoom={false}
                    minAzimuthAngle={-Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 4}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI - Math.PI / 1.8}
                    // minZoom={50}
                    // maxZoom={100}
                />

                {/* Modal */}
                {isModalOpen && (
                    <Html center>
                        <CompModal
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            title="Detailed Information"
                        >
                            <div className={"space-y-4"}>
                                <p className="text-gray-700 leading-relaxed">
                                    When you dream to play with billions, you need the tech that will empower teams to
                                    push the boundaries of the achievable. With systems that elevate creativity and strip
                                    away blockers, we’re full speed ahead to deliver smiles with every game.
                                </p>

                                <p className="text-gray-700 leading-relaxed">
                                    When you dream to play with billions, you need the tech that will empower teams to
                                    push the boundaries of the achievable. With systems that elevate creativity and strip
                                    away blockers, we’re full speed ahead to deliver smiles with every game.
                                </p>
                            </div>
                        </CompModal>
                    </Html>
                )}
            </Canvas>
            <h1>TESTTT</h1>
        </div>
    );
}