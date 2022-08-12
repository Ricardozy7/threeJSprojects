import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { Html } from "@react-three/drei"

import * as THREE from "three";

import {
    CubeCamera,
    Environment,
    OrbitControls,
    PerspectiveCamera,
    useAnimations,
    useGLTF
} from "@react-three/drei";

const Hero = () => {
    const gltf = useLoader(
        GLTFLoader, "http://192.168.91.226:8000/models/scene.gltf"
    );

    let mixer

    useEffect(() => {
        mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play();
        });

    }, [gltf, mixer])


    useFrame((state, delta) => {
        mixer?.update(delta)
    })

    return (
        <>
            <OrbitControls
                target={[0, 0.35, 0]}
                maxPolarAngle={1.45}
            />

            <spotLight
                color={"#ffffff"}
                intensity={5}
                angle={0.6}
                penumbra={0.5}
                position={[1500, 1500, 1000]}
                castShadow
                shadow-bias={-0.0001}
            />
            <PerspectiveCamera makeDefault position={[1100, 500, 800]} />
            <primitive object={gltf.scene} />
            {/* 
            <OrbitControls
                target={[0, 0.35, 0]}
                maxPolarAngle={1.45}
            />

            <spotLight
                color={"#ffffff"}
                intensity={.5}
                angle={0.6}
                penumbra={0.5}
                position={[5, 15, -10]}
                castShadow
                shadow-bias={-0.0001}
            />
            <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
            <primitive object={gltf.scene} />;
            </Suspense> */}
        </ >

    )
}

export default Hero;