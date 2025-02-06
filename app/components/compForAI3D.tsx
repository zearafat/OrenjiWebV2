'use client';

import * as THREE from 'three';
import React, {useEffect, useRef, useState} from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import {
    OrbitControls,
    Environment,
    ContactShadows,
    Preload,
    SoftShadows,
    Html,
    OrthographicCamera
} from '@react-three/drei';

// Components
import CompModal from "@/app/components/compModal";
import CompTooltip from "@/app/components/compTooltip";

function AnimatedModel() {
    const gltf = useLoader(GLTFLoader, '/assets/illustrations/gltf/orenji-studio-scene.glb');
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

const CompForAI3D = () => {
    const [hoveredBox1, setHoveredBox1] = useState(false);
    const [hoveredBox2, setHoveredBox2] = useState(false);
    const [hoveredBox3, setHoveredBox3] = useState(false);

    const [isModalOpenBox1, setIsModalOpenBox1] = useState(false);
    const openModalBox1 = () => setIsModalOpenBox1(true);
    const closeModalBox1 = () => setIsModalOpenBox1(false)

    const [isModalOpenBox2, setIsModalOpenBox2] = useState(false);
    const openModalBox2 = () => setIsModalOpenBox2(true);
    const closeModalBox2 = () => setIsModalOpenBox2(false)

    const [isModalOpenBox3, setIsModalOpenBox3] = useState(false);
    const openModalBox3 = () => setIsModalOpenBox3(true);
    const closeModalBox3 = () => setIsModalOpenBox3(false)

    return (
        <Canvas shadows>
            <Preload all/>
            <SoftShadows size={10} samples={16} focus={1}/>

            <OrthographicCamera
                makeDefault
                position={[-10, 10, 20]}
                zoom={40}
            />

            {/*Lighting*/}
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

            {/* FIRST COLLIDER BOX */}
            <mesh
                position-x={-0.5}
                position-y={3.5}
                position-z={5}
                scale={2.5}
                onPointerOver={() => setHoveredBox1(true)}
                onPointerOut={() => setTimeout(() => setHoveredBox1(false), 1000)} // Delay hiding the tooltip
            >
                <boxGeometry args={[1, 1.8, 1]}/>
                {/*<meshStandardMaterial color={hoveredBox1 ? "orange" : "red"} wireframe={true}/>*/}
                <meshBasicMaterial visible={false}/>

                {/* Tooltip */}
                {hoveredBox1 && (
                    <Html position={[0, 1, 0]} center>
                        <CompTooltip
                            text="Welcome"
                            className={"bg-gradient-to-r from-violet-500 to-purple-400 text-white font-semibold py-2" +
                                "px-4 rounded-full border-2 border-white drop-shadow-2xl cursor-pointer select-none"}
                            onClick={() => {
                                openModalBox1();
                                setHoveredBox1(false);
                            }}
                        />
                    </Html>
                )}
            </mesh>

            {/*SECOND COLLIDER BOX*/}
            <mesh
                position-x={-7.5}
                position-y={3.5}
                position-z={8}
                scale={4}
                onPointerOver={() => setHoveredBox2(true)}
                onPointerOut={() => setTimeout(() => setHoveredBox2(false), 1000)} // Delay hiding the tooltip
            >
                <boxGeometry args={[1.8, 1, 1]}/>
                {/*<meshStandardMaterial color={"blue"} wireframe={true}/>*/}
                <meshBasicMaterial visible={false}/>

                {/* Tooltip */}
                {hoveredBox2 && (
                    <Html position={[0, 0.5, 0]} center>
                        <CompTooltip
                            text="Why Us"
                            className={"bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold py-2" +
                                "px-4 rounded-full border-2 border-white drop-shadow-2xl cursor-pointer select-none"}
                            onClick={() => {
                                openModalBox2();
                                setHoveredBox2(false);
                            }}
                        />
                    </Html>
                )}
            </mesh>

            {/*THIRD COLLIDER BOX*/}
            <mesh
                position-x={9.5}
                position-y={3.5}
                position-z={5}
                scale={4}
                onPointerOver={() => setHoveredBox3(true)}
                onPointerOut={() => setTimeout(() => setHoveredBox3(false), 1000)} // Delay hiding the tooltip
            >
                <boxGeometry args={[1, 1, 1.5]}/>
                {/*<meshStandardMaterial color={"purple"} wireframe={true}/>*/}
                <meshBasicMaterial visible={false}/>

                {/* Tooltip */}
                {hoveredBox3 && (
                    <Html position={[0, 0.5, 0]} center>
                        <CompTooltip
                            text="Our Dream"
                            className={"bg-gradient-to-r from-green-500 to-emerald-300 text-white font-semibold py-2" +
                                "px-4 rounded-full border-2 border-white drop-shadow-2xl cursor-pointer select-none"}
                            onClick={() => {
                                openModalBox3();
                                setHoveredBox3(false);
                            }}
                        />
                    </Html>
                )}
            </mesh>

            {/* Ground Plane */}
            <mesh
                position={[0, -0.5, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                receiveShadow
                castShadow
            >
                <planeGeometry args={[32, 32]}/>
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
            <Environment preset={"sunset"} resolution={128}/>

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
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI - Math.PI / 1.8}
                enableRotate={true} // Allow rotation
                enablePan={false}  // Disable panning (right-click drag)
                // minZoom={50}
                // maxZoom={100}
            />

            <Html center>
                <div style={{
                    minWidth: '300px', // Ensure minimum width
                    maxWidth: '600px', // Limit maximum width
                }} className={"pt-24"}>
                    <button className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all duration-200 shadow-lg">
                        Press and drag to orbit
                    </button>
                </div>
            </Html>

            {/* Modal 1 */}
            {isModalOpenBox1 && (
                <Html center>
                    <div className="pt-32 align-middle content-center">
                        <CompModal
                            isOpen={isModalOpenBox1}
                            onClose={closeModalBox1}
                            title="Welcome!"
                        >
                            <div className={"space-y-4"}>
                                <p className="text-gray-700 leading-relaxed">
                                    We have been riding the AI wave since it took off a few years ago, working on
                                    everything from UI/UX to full-on development.
                                </p>
                                <p>
                                    Whether it is designing sleek interfaces, crafting custom illustrations (both 2D and 3D),
                                    or building a solid brand identity for AI products, we have got it covered.
                                </p>
                                <p>
                                    AI projects are kind of our thing—we love bringing ideas to life and making sure they
                                    look as smart as they act. If you are building something AI-powered and need a killer
                                    design team, you’re in the right place. Let’s make something awesome together! 😎
                                </p>
                            </div>
                        </CompModal>
                    </div>
                </Html>
            )}

            {/* Modal 2 */}
            {isModalOpenBox2 && (
                <Html center>
                    <div className="pt-32 align-middle content-center">
                        <CompModal
                            isOpen={isModalOpenBox2}
                            onClose={closeModalBox2}
                            title="Why us for AI Project?"
                        >
                            <div className={"space-y-4"}>
                                <p className="text-gray-700 leading-relaxed">
                                    We have been riding the AI wave since it took off a few years ago, working on
                                    everything from UI/UX to full-on development.
                                </p>
                                <p>
                                    Whether it is designing sleek interfaces, crafting custom illustrations (both 2D and 3D),
                                    or building a solid brand identity for AI products, we have got it covered.
                                </p>
                                <p>
                                    AI projects are kind of our thing—we love bringing ideas to life and making sure they
                                    look as smart as they act. If you are building something AI-powered and need a killer
                                    design team, you’re in the right place. Let’s make something awesome together! 😎
                                </p>
                            </div>
                        </CompModal>
                    </div>
                </Html>
            )}

            {/* Modal 3 */}
            {isModalOpenBox3 && (
                <Html center>
                    <div className="pt-32 align-middle content-center">
                        <CompModal
                            isOpen={isModalOpenBox3}
                            onClose={closeModalBox3}
                            title="Our mad dreams..."
                        >
                            <div className={"space-y-4"}>
                                <p className="text-gray-700 leading-relaxed">
                                    We have been riding the AI wave since it took off a few years ago, working on
                                    everything from UI/UX to full-on development.
                                </p>
                                <p>
                                    Whether it is designing sleek interfaces, crafting custom illustrations (both 2D and 3D),
                                    or building a solid brand identity for AI products, we have got it covered.
                                </p>
                                <p>
                                    AI projects are kind of our thing—we love bringing ideas to life and making sure they
                                    look as smart as they act. If you are building something AI-powered and need a killer
                                    design team, you’re in the right place. Let’s make something awesome together! 😎
                                </p>
                            </div>
                        </CompModal>
                    </div>
                </Html>
            )}
        </Canvas>
    );
};

export default CompForAI3D;