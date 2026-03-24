import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import type { Mesh } from 'three'

function OrbMesh() {
  const meshRef = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.15
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.2
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#E07030"
        attach="material"
        distort={0.45}
        speed={2.5}
        roughness={0.2}
        metalness={0.1}
        opacity={0.12}
        transparent
      />
    </Sphere>
  )
}

function OrbWireframe() {
  const meshRef = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = -clock.getElapsedTime() * 0.1
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.25
  })

  return (
    <Sphere ref={meshRef} args={[1.05, 24, 24]}>
      <MeshDistortMaterial
        color="#CC5500"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0}
        opacity={0.07}
        transparent
        wireframe
      />
    </Sphere>
  )
}

export default function FloatingOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.8], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} intensity={1.2} color="#FF8C42" />
      <pointLight position={[-2, -1, -1]} intensity={0.4} color="#E8C4A0" />
      <OrbMesh />
      <OrbWireframe />
    </Canvas>
  )
}
