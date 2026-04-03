import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";

function GeometricShape({ position, geometry, speed, rotationAxis }: {
  position: [number, number, number];
  geometry: "icosahedron" | "octahedron" | "torus" | "dodecahedron";
  speed: number;
  rotationAxis: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const material = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("hsl(270, 70%, 55%)"),
    transparent: true,
    opacity: 0.15,
    roughness: 0.1,
    metalness: 0.8,
    transmission: 0.6,
    thickness: 0.5,
    wireframe: true,
  }), []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const scrollFactor = scrollY * 0.0003;
    meshRef.current.rotation.x += delta * speed * rotationAxis[0] + scrollFactor * 0.1;
    meshRef.current.rotation.y += delta * speed * rotationAxis[1] + scrollFactor * 0.15;
    meshRef.current.rotation.z += delta * speed * rotationAxis[2];
    meshRef.current.position.y = position[1] + Math.sin(scrollFactor * 2) * 0.5;
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case "icosahedron": return new THREE.IcosahedronGeometry(1.2, 1);
      case "octahedron": return new THREE.OctahedronGeometry(1, 0);
      case "torus": return new THREE.TorusGeometry(0.8, 0.3, 8, 16);
      case "dodecahedron": return new THREE.DodecahedronGeometry(1, 0);
    }
  }, [geometry]);

  return <mesh ref={meshRef} position={position} geometry={geo} material={material} />;
}

function CyanShape({ position, speed }: { position: [number, number, number]; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const material = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("hsl(186, 100%, 50%)"),
    transparent: true,
    opacity: 0.12,
    roughness: 0.1,
    metalness: 0.9,
    transmission: 0.5,
    wireframe: true,
  }), []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const scrollFactor = scrollY * 0.0003;
    meshRef.current.rotation.x += delta * speed * 0.3;
    meshRef.current.rotation.y += delta * speed * 0.5 + scrollFactor * 0.1;
    meshRef.current.position.y = position[1] + Math.cos(scrollFactor * 3) * 0.4;
  });

  return (
    <mesh ref={meshRef} position={position} material={material}>
      <torusKnotGeometry args={[0.7, 0.2, 64, 8]} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#9D4EDD" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#00F3FF" />

      <GeometricShape position={[-3.5, 2, -2]} geometry="icosahedron" speed={0.15} rotationAxis={[1, 0.5, 0.3]} />
      <GeometricShape position={[3, -1, -3]} geometry="octahedron" speed={0.2} rotationAxis={[0.3, 1, 0.2]} />
      <GeometricShape position={[-2, -3, -1.5]} geometry="dodecahedron" speed={0.12} rotationAxis={[0.5, 0.3, 1]} />
      <GeometricShape position={[4, 3, -4]} geometry="torus" speed={0.18} rotationAxis={[0.7, 0.4, 0.2]} />
      <CyanShape position={[2, 1, -2.5]} speed={0.1} />
      <CyanShape position={[-4, -1.5, -3.5]} speed={0.08} />
    </>
  );
}

const ThreeBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5)}
        gl={{ antialias: !isMobile, powerPreference: "high-performance", alpha: true }}
        style={{ background: "transparent" }}
        frameloop={isMobile ? "demand" : "always"}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
