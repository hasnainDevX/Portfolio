import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ screenSize }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const { isMediumScreen, isLargeScreen } = screenSize;

  let scale = 1.15;
  if (isMediumScreen) {
    scale = 1; // Medium scale for medium devices
  } else if (isLargeScreen) {
    scale = 1.1; // Large scale for large devices
  }

  return (
    <mesh>
      <hemisphereLight
        intensity={0.4}
        groundColor="black"
      />
      <directionalLight
        position={[-15, 40, 15]}
        intensity={2}
        castShadow
        shadow-mapSize={2048}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={2048}
      />
      <pointLight
        intensity={1.7}
        color="#D8BFD8"  // Light purple for dark mode
      />
      <ambientLight
        intensity={0.6}
        color="#D8BFD8" // Light purple tint for dark mode
      />
      <primitive
        object={computer.scene}
        scale={scale}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [screenSize, setScreenSize] = useState({
    isMediumScreen: false,
    isLargeScreen: true,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMediumScreen = width <= 1350;
      setScreenSize({
        isMediumScreen,
        isLargeScreen: width > 1350,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    setIsClient(true);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Only render the Canvas if the screen width is 1000px or larger and ensure it runs only on the client
  if (!isClient || window.innerWidth < 1000) {
    return null;
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[2, 2]}
      camera={{ position: [20, 3, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers screenSize={screenSize} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;