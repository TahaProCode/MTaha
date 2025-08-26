import React, { useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  MeshWobbleMaterial,
  RoundedBox,
  useTexture,
} from "@react-three/drei";

const RotatingFloatingImage = ({ textureSrc }) => {
  const texture = useTexture(textureSrc);
  const meshRef = useRef();
  const aspect = useMemo(() => {
    const img = texture?.image;
    if (img && img.width && img.height) {
      return img.width / img.height;
    }
    return 1;
  }, [texture?.image]);
  return (
    <group>
      <RoundedBox
        ref={meshRef}
        castShadow
        receiveShadow
        args={[1, 1.5, 0.18]}
        radius={0.12}
        smoothness={4}
        scale={[aspect, 1, 1]}
      >
        <meshStandardMaterial map={texture} metalness={0.2} roughness={0.35} />
      </RoundedBox>
      <mesh rotation-x={-Math.PI / 2} position={[0, -1.2, 0]}>
        <ringGeometry args={[0.9, 1.2, 64]} />
        <meshBasicMaterial color="#4b0082" transparent opacity={0.25} />
      </mesh>
    </group>
  );
};

const Interactive3DContact = ({ height = 280, className = "", textureSrc }) => {
  return (
    <div
      className={`relative w-full h-full overflow-hidden rounded-2xl shadow-2xl ${className}`}
      style={{ ...(height ? { height } : {}), background: "#120626" }}
    >
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ position: [2.2, 1.8, 2.4], fov: 55 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={1.1} castShadow />
        <pointLight position={[-3, -2, -2]} intensity={0.4} />
        <RotatingFloatingImage textureSrc={textureSrc} />
        <OrbitControls
          enableRotate={true}
          enableZoom={true}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>
      {/* soft gradient overlay to match theme */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#210636]/40 via-transparent to-transparent"></div>
    </div>
  );
};

export default Interactive3DContact;
