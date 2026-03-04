// src/components/HeroCube.jsx
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls, Text, Center } from '@react-three/drei';

function SpinningCube() {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
  if (meshRef.current) {
    // Eliminamos la rotación en X y dejamos solo la Y (giro de trompo)
    meshRef.current.rotation.y += delta * 0.6; 
    
    // Opcional: Reseteamos X a 0 por si quedó inclinado de antes
    meshRef.current.rotation.x = 0;
  }
});

  return (
    // Dentro de la función SpinningCube en HeroCube.jsx

<Box 
  ref={meshRef} 
  args={[3, 3, 3]} 
  onPointerOver={() => setHover(true)}
  onPointerOut={() => setHover(false)}
  scale={hovered ? 1.1 : 1}
>
  <meshStandardMaterial 
    color={hovered ? '#ff0000' : '#cc0000'} 
    emissive={hovered ? '#ff0000' : '#220000'} 
    emissiveIntensity={hovered ? 2 : 0.5}
    roughness={0.3} 
    metalness={0.8} 
  />
  
  {/* CARA FRONTAL (0°) */}
  <Text position={[0, 0, 1.51]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
    CALENDARIUM 1
  </Text>

  {/* CARA TRASERA (180°) */}
  <Text position={[0, 0, -1.51]} rotation={[0, Math.PI, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
    CALENDARIUM 3
  </Text>

  {/* CARA DERECHA (90°) */}
  <Text position={[1.51, 0, 0]} rotation={[0, Math.PI / 2, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
    CALENDARIUM 4
  </Text>

  {/* CARA IZQUIERDA (-90°) */}
  <Text position={[-1.51, 0, 0]} rotation={[0, -Math.PI / 2, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
    CALENDARIUM 2
  </Text>
</Box>
  );
}

export default function HeroCube() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      {/* Luz ambiental más fuerte para asegurar visibilidad */}
      <ambientLight intensity={1.5} />
      {/* Luz puntual para resaltar el color rojo */}
      <pointLight position={[10, 10, 10]} intensity={50} color="#ff0000" />
      <pointLight position={[-10, -10, 10]} intensity={30} color="#ffffff" />
      
      <SpinningCube />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}