"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Text, useTexture } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import { projects, type Project } from "../data/projects";


function ProjectCard3D({ project }: { project: Project }) {
  const tex = project.coverImage ? useTexture(project.coverImage) : null;
  return (
    <group>
      <mesh>
        <boxGeometry args={[2.2, 1.3, 0.1]} />
        {tex ? (
          <meshStandardMaterial map={tex} />
        ) : (
          <meshStandardMaterial color="#e5e5e5" />
        )}
      </mesh>
      <Text
        position={[0, -0.9, 0.08]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {project.title}
      </Text>
    </group>
  );
}

function RingOfCards() {
  // Arrange project “cards” in a ring around the origin.
  const items = useMemo(() => projects.map((p, i) => ({
    project: p,
    angle: (i / Math.max(projects.length, 1)) * Math.PI * 2,
  })), []);

  useFrame((state) => {
    // Subtle idle rotation of the whole scene over time.
    state.scene.rotation.y = (state.clock.getElapsedTime() * 0.1);
  });

  const radius = 6;
  return (
    <group>
      {items.map(({ project, angle }, idx) => {
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const onClick = () => {
          if (project.links?.repo) {
            window.open(project.links.repo, "_blank", "noopener,noreferrer");
          } else if (project.links?.devpost) {
            window.open(project.links.devpost, "_blank", "noopener,noreferrer");
          } else if (project.links?.demo) {
            window.open(project.links.demo, "_blank", "noopener,noreferrer");
          } else {
            window.location.href = `/projects/${project.slug}`;
          }
        };
        const onPointerOver = () => (document.body.style.cursor = "pointer");
        const onPointerOut = () => (document.body.style.cursor = "auto");
        return (
          <group key={idx} position={[x, 0, z]} rotation={[0, -angle + Math.PI / 2, 0]} onClick={onClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
            <ProjectCard3D project={project} />
          </group>
        );
      })}
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="h-[60vh] w-full rounded-lg overflow-hidden border border-black/10 dark:border-white/15 bg-surface">
      <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} />
          <RingOfCards />
          <Environment preset="sunset" />
          <OrbitControls enablePan={false} enableZoom={false} enableDamping dampingFactor={0.05} />
        </Suspense>
      </Canvas>
    </div>
  );
}
