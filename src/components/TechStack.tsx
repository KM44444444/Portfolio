import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const techStack = [
  { name: "HTML", color: "#E34F26", short: "H" },
  { name: "CSS", color: "#1572B6", short: "C" },
  { name: "JavaScript", color: "#F7DF1E", short: "JS" },
  { name: "TypeScript", color: "#3178C6", short: "TS" },
  { name: "React", color: "#61DAFB", short: "R" },
  { name: "Tailwind", color: "#06B6D4", short: "TW" },
  { name: "Next.js", color: "#000000", short: "N" },
  { name: "Node.js", color: "#339933", short: "Node" },
  { name: "Express", color: "#000000", short: "Ex" },
  { name: "Java", color: "#ED8B00", short: "J" },
  { name: "Python", color: "#3776AB", short: "Py" },
  { name: "MySQL", color: "#4479A1", short: "My" },
  { name: "MongoDB", color: "#47A248", short: "M" },
  { name: "Git", color: "#F05032", short: "G" },
  { name: "Docker", color: "#2496ED", short: "D" },
  { name: "AWS", color: "#FF9900", short: "AWS" },
  { name: "Pandas", color: "#150458", short: "Pd" },
  { name: "AI/ML", color: "#FF6F00", short: "AI" },
  { name: "Data Science", color: "#0277BD", short: "DS" },
  { name: "PCM", color: "#7B1FA2", short: "PCM" },
  { name: "Science", color: "#2E7D32", short: "Sci" },
];

function createCanvasTexture(text: string, bgColor: string): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;

  const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
  gradient.addColorStop(0, bgColor);
  gradient.addColorStop(1, adjustColor(bgColor, -40));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);

  ctx.fillStyle = "white";
  ctx.font = "bold 120px Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.shadowBlur = 10;
  ctx.fillText(text, 256, 256);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function adjustColor(color: string, amount: number): string {
  const hex = color.replace("#", "");
  const r = Math.max(0, Math.min(255, parseInt(hex.substring(0, 2), 16) + amount));
  const g = Math.max(0, Math.min(255, parseInt(hex.substring(2, 4), 16) + amount));
  const b = Math.max(0, Math.min(255, parseInt(hex.substring(4, 6), 16) + amount));
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = [...Array(25)].map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
  techIndex: Math.floor(Math.random() * techStack.length),
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  techIndex: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  techIndex,
  r = THREE.MathUtils.randFloatSpread,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  const material = useMemo(() => {
    const tech = techStack[techIndex];
    const texture = createCanvasTexture(tech.short, tech.color);
    return new THREE.MeshPhysicalMaterial({
      map: texture,
      emissive: new THREE.Color(tech.color),
      emissiveMap: texture,
      emissiveIntensity: 0.3,
      metalness: 0.5,
      roughness: 1,
      clearcoat: 0.1,
    });
  }, [techIndex]);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const workEl = document.getElementById("work");
      if (!workEl) return;
      const threshold = workEl.getBoundingClientRect().top;
      setIsActive(scrollY > threshold);
    };

    const clickCleanups: (() => void)[] = [];
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      const onClick = () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      };
      element.addEventListener("click", onClick);
      clickCleanups.push(() => element.removeEventListener("click", onClick));
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clickCleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="techstack">
      <h2>Techstack</h2>

      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;