"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  MeshTransmissionMaterial,
  PresentationControls,
  RoundedBox,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { blooms, type Bloom } from "@/lib/blooms";

const NIGHT = new THREE.Color("#3a3144");

const BLOCK = { w: 2.1, h: 2.5, d: 1.25 };

function Flower({ bloom }: { bloom: Bloom }) {
  const { scene } = useGLTF(bloom.url);

  const obj = useMemo(() => {
    const root = scene.clone(true);
    if (bloom.keep) {
      const drop: THREE.Object3D[] = [];
      root.traverse((o) => {
        if ((o as THREE.Mesh).isMesh && !bloom.keep!.some((k) => o.name.toLowerCase().includes(k))) drop.push(o);
      });
      drop.forEach((o) => o.removeFromParent());
    }
    root.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) {
        const mats = Array.isArray(m.material) ? m.material : [m.material];
        mats.forEach((mat) => {
          mat.side = THREE.DoubleSide;
          (mat as THREE.MeshStandardMaterial).envMapIntensity = 1.4;
        });
      }
    });
    // fit inside the resin block
    root.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const s = Math.min((BLOCK.w * 0.78) / size.x, (BLOCK.h * 0.82) / size.y, (BLOCK.d * 0.8) / size.z);
    const wrap = new THREE.Group();
    root.position.sub(center);
    wrap.add(root);
    wrap.scale.setScalar(s);
    return wrap;
  }, [scene, bloom]);

  return <primitive object={obj} />;
}

// Deterministic scatter so the flakes are the same on every render.
function makeFlakes(count: number) {
  let seed = 7;
  const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  return Array.from({ length: count }, () => ({
    p: new THREE.Vector3(
      (rand() - 0.5) * BLOCK.w * 0.86,
      (rand() - 0.5) * BLOCK.h * 0.86,
      (rand() - 0.5) * BLOCK.d * 0.7,
    ),
    r: new THREE.Euler(rand() * 6, rand() * 6, rand() * 6),
    s: 0.012 + rand() * 0.03,
  }));
}

function GoldFlakes({ count = 55 }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const flakes = useMemo(() => makeFlakes(count), [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    flakes.forEach((f, i) => {
      dummy.position.copy(f.p);
      dummy.rotation.set(f.r.x + t * 0.05, f.r.y + t * 0.08, f.r.z);
      dummy.scale.setScalar(f.s);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <planeGeometry args={[1, 0.7]} />
      <meshStandardMaterial color="#e2bb62" metalness={0.55} roughness={0.3} emissive="#9a6f22" emissiveIntensity={0.7} side={THREE.DoubleSide} />
    </instancedMesh>
  );
}

function Glow() {
  const tex = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 256;
    const g = c.getContext("2d")!;
    const grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    grd.addColorStop(0, "rgba(236,226,255,0.95)");
    grd.addColorStop(0.35, "rgba(185,172,211,0.55)");
    grd.addColorStop(1, "rgba(185,172,211,0)");
    g.fillStyle = grd;
    g.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }, []);
  return (
    <mesh position={[0, 0.1, -1.6]}>
      <planeGeometry args={[4.4, 4.4]} />
      <meshBasicMaterial map={tex} transparent depthWrite={false} toneMapped={false} />
    </mesh>
  );
}

function Block({ bloom, lowPower }: { bloom: Bloom; lowPower: boolean }) {
  return (
    <group>
      <RoundedBox args={[BLOCK.w, BLOCK.h, BLOCK.d]} radius={0.16} smoothness={6}>
        <MeshTransmissionMaterial
          backside
          backsideThickness={0.4}
          thickness={0.9}
          samples={lowPower ? 4 : 8}
          resolution={lowPower ? 512 : 1024}
          roughness={0.015}
          ior={1.5}
          chromaticAberration={0.02}
          anisotropy={0.1}
          distortion={0}
          distortionScale={0.2}
          temporalDistortion={0}
          clearcoat={1}
          attenuationDistance={4}
          attenuationColor="#fff6ea"
          color="#ffffff"
          background={NIGHT}
        />
      </RoundedBox>
      <Suspense fallback={null}>
        <Flower key={bloom.id} bloom={bloom} />
      </Suspense>
      <GoldFlakes />
    </group>
  );
}

export default function ResinScene({ bloom }: { bloom: Bloom }) {
  const lowPower = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
  return (
    <Canvas
      dpr={[1, lowPower ? 1.5 : 2]}
      camera={{ position: [0, 0.1, 7.4], fov: 30 }}
      gl={{ antialias: true, alpha: true }}
      style={{ touchAction: "pan-y" }}
    >
      <ambientLight intensity={1.1} />
      <directionalLight position={[2, 3, 6]} intensity={2.2} color="#fff6ea" />
      <spotLight position={[4, 6, 5]} angle={0.4} penumbra={1} intensity={60} color="#fff1dc" />
      <pointLight position={[-4, -2, 3]} intensity={12} color="#b9acd3" />

      <Glow />

      <PresentationControls
        global={false}
        cursor
        snap
        speed={1.4}
        polar={[-0.3, 0.3]}
        azimuth={[-Math.PI / 1.6, Math.PI / 1.6]}
      >
        <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.6}>
          <group rotation={[0.04, -0.38, 0]}>
            <Block bloom={bloom} lowPower={lowPower} />
          </group>
        </Float>
      </PresentationControls>

      <ContactShadows position={[0, -1.7, 0]} opacity={0.5} scale={8} blur={2.6} far={3} color="#000000" />

      <Environment resolution={256}>
        <Lightformer form="rect" intensity={3} position={[0, 4, 2]} scale={[8, 2, 1]} color="#fff4e6" />
        <Lightformer form="rect" intensity={1.6} position={[-5, 1, 1]} rotation-y={Math.PI / 2} scale={[6, 3, 1]} color="#d8cdf0" />
        <Lightformer form="rect" intensity={1.6} position={[5, 0, 1]} rotation-y={-Math.PI / 2} scale={[6, 3, 1]} color="#f3d6cf" />
        <Lightformer form="ring" intensity={2} position={[0, 0, -6]} scale={4} color="#ffffff" />
      </Environment>
    </Canvas>
  );
}

blooms.forEach((b) => useGLTF.preload(b.url));
