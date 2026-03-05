import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/models/calendarium.glb', 'https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
  
  // Mantenemos tu escala de 1.5
  return <primitive object={scene} scale={1.5} />;
}

export default function Hero3D() {
  return (
    /* Fix: de 250x a 250px. Cambiamos width a 100% para que no desborde el contenedor de Astro */
    <div style={{ height: '500px', width: '100%', cursor: 'grab' }}>
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          {/* Bajamos un poquito el ángulo (de 5 a 4) para que respire por abajo */}
          <PerspectiveCamera makeDefault position={[0, 4, 5]} fov={50} />
          
          {/* adjustCamera={false}: Evita que el Stage mueva tu cámara y cause el corte.
            center: Asegura que el modelo rote sobre su propio eje.
          */}
          <Stage 
            environment="city" 
            intensity={0.6} 
            contactShadow={{ opacity: 0.5, blur: 2 }}
            adjustCamera={false} 
            center
          >
            <Model />
          </Stage>

          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5} 
            makeDefault 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}