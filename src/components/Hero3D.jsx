import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const ACCENT = new THREE.Color('#f29200')
const NAVY = new THREE.Color('#0a2247')

function buildNetwork(count, radius) {
  const pos = new Float32Array(count * 3)
  const pts = []
  for (let i = 0; i < count; i++) {
    // spherical shell-ish distribution
    const u = Math.random(), v = Math.random()
    const theta = 2 * Math.PI * u
    const phi = Math.acos(2 * v - 1)
    const r = radius * (0.55 + Math.random() * 0.45)
    const x = r * Math.sin(phi) * Math.cos(theta)
    const y = r * Math.sin(phi) * Math.sin(theta)
    const z = r * Math.cos(phi)
    pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z
    pts.push([x, y, z])
  }
  // neighbour lines
  const linePos = []
  const maxD = radius * 0.5
  for (let i = 0; i < pts.length; i++) {
    let links = 0
    for (let j = i + 1; j < pts.length && links < 3; j++) {
      const dx = pts[i][0] - pts[j][0], dy = pts[i][1] - pts[j][1], dz = pts[i][2] - pts[j][2]
      if (Math.sqrt(dx * dx + dy * dy + dz * dz) < maxD) {
        linePos.push(...pts[i], ...pts[j]); links++
      }
    }
  }
  return { pos, linePos: new Float32Array(linePos) }
}

function Scene({ mobile }) {
  const group = useRef(null)
  const knot = useRef(null)
  const { pos, linePos } = useMemo(() => buildNetwork(mobile ? 80 : 230, 4.2), [mobile])
  const reduce = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, [])
  const scrollRef = useRef(0)
  const { viewport } = useThree()

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime
    const px = state.pointer.x, py = state.pointer.y
    scrollRef.current = window.scrollY / Math.max(1, window.innerHeight)
    if (group.current) {
      const targetY = px * 0.5 + t * (reduce ? 0 : 0.06)
      const targetX = -py * 0.35
      group.current.rotation.y += (targetY - group.current.rotation.y) * Math.min(1, dt * 2)
      group.current.rotation.x += (targetX - group.current.rotation.x) * Math.min(1, dt * 2)
      group.current.position.x = mobile ? 0 : 2.4
      group.current.position.y = -scrollRef.current * 1.2 + (mobile ? -2.15 : 0)
    }
    if (knot.current && !reduce) {
      knot.current.rotation.x = t * 0.3 + scrollRef.current * 2
      knot.current.rotation.z = t * 0.18
    }
  })

  const knotScale = mobile ? 0.62 : Math.min(1.3, viewport.width / 9)

  return (
    <group ref={group}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 6, 4]} intensity={2.1} color="#ffffff" />
      <pointLight position={[-6, -2, 3]} intensity={40} color="#f29200" distance={20} />
      <pointLight position={[4, -4, -4]} intensity={18} color="#0a2247" distance={20} />

      <mesh ref={knot} scale={knotScale}>
        <torusKnotGeometry args={[1.05, 0.36, 180, 28, 2, 3]} />
        <meshStandardMaterial color={ACCENT} metalness={0.7} roughness={0.22} envMapIntensity={1} />
      </mesh>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={pos.length / 3} array={pos} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color={ACCENT} size={0.05} sizeAttenuation transparent opacity={0.85} />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={linePos.length / 3} array={linePos} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color={NAVY} transparent opacity={0.16} />
      </lineSegments>
    </group>
  )
}

export default function Hero3D({ mobile = false }) {
  return (
    <Canvas
      className="hero__canvas"
      dpr={[1, mobile ? 1.3 : 1.7]}
      camera={{ position: [0, 0, 9], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <Scene mobile={mobile} />
      </Suspense>
    </Canvas>
  )
}
