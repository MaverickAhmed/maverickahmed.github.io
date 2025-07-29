import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Cylinder } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { RotateCcw, Maximize } from 'lucide-react';
import * as THREE from 'three';

interface Project3DViewerProps {
  projectSlug: string;
}

// Simple 3D models for demonstration
const DroneModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main body */}
      <Box position={[0, 0, 0]} args={[2, 0.3, 0.8]}>
        <meshStandardMaterial color="#2563eb" />
      </Box>
      
      {/* Propeller arms */}
      <Cylinder position={[-1.5, 0.2, 0]} args={[0.05, 0.05, 3]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#1f2937" />
      </Cylinder>
      <Cylinder position={[1.5, 0.2, 0]} args={[0.05, 0.05, 3]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#1f2937" />
      </Cylinder>
      
      {/* Propellers */}
      {[[-2.5, 0.3, -1], [-2.5, 0.3, 1], [2.5, 0.3, -1], [2.5, 0.3, 1]].map((pos, i) => (
        <group key={i} position={[pos[0], pos[1], pos[2]]}>
          <Cylinder args={[0.8, 0.8, 0.02]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#374151" />
          </Cylinder>
          <Sphere args={[0.1]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#1f2937" />
          </Sphere>
        </group>
      ))}
      
      {/* Camera gimbal */}
      <Sphere args={[0.3]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#059669" />
      </Sphere>
    </group>
  );
};

const IoTSensorModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main PCB */}
      <Box position={[0, 0, 0]} args={[2, 0.1, 1.5]}>
        <meshStandardMaterial color="#059669" />
      </Box>
      
      {/* Chips */}
      <Box position={[-0.5, 0.1, 0]} args={[0.5, 0.1, 0.5]}>
        <meshStandardMaterial color="#1f2937" />
      </Box>
      <Box position={[0.5, 0.1, 0.3]} args={[0.3, 0.05, 0.3]}>
        <meshStandardMaterial color="#374151" />
      </Box>
      
      {/* Antenna */}
      <Cylinder position={[0.8, 0.5, -0.5]} args={[0.02, 0.02, 1]}>
        <meshStandardMaterial color="#fbbf24" />
      </Cylinder>
      
      {/* Battery */}
      <Box position={[0, 0.2, -0.6]} args={[1.5, 0.3, 0.2]}>
        <meshStandardMaterial color="#dc2626" />
      </Box>
    </group>
  );
};

const Project3DViewer = ({ projectSlug }: Project3DViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const resetCamera = () => {
    // This would reset the camera in a real implementation
    console.log('Reset camera position');
  };

  const get3DModel = () => {
    switch (projectSlug) {
      case 'skyaid':
      case 'flightsync':
        return <DroneModel />;
      case 'arenaplay':
      case 'aasaaniot':
        return <IoTSensorModel />;
      default:
        return <DroneModel />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">3D Model Visualization</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Interactive 3D representation of the hardware design. Use mouse to rotate, zoom, and explore the system components.
        </p>
      </div>

      <div className="bg-accent/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Hardware Model</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={resetCamera}>
              <RotateCcw size={16} />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              <Maximize size={16} />
            </Button>
          </div>
        </div>

        <div 
          ref={canvasRef}
          className={`rounded-lg overflow-hidden bg-gradient-to-br from-background to-accent/20 ${
            isFullscreen ? 'fixed inset-0 z-50' : 'h-96'
          }`}
        >
          <Canvas
            camera={{ position: [5, 3, 5], fov: 60 }}
            style={{ width: '100%', height: '100%' }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight 
              position={[10, 10, 5]} 
              intensity={1} 
              castShadow 
              shadow-mapSize={[2048, 2048]}
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            {get3DModel()}
            
            <OrbitControls 
              enablePan={true} 
              enableZoom={true} 
              enableRotate={true}
              maxDistance={20}
              minDistance={2}
            />
          </Canvas>
        </div>

        <div className="mt-4 text-sm text-muted-foreground text-center">
          <p>💡 <strong>Controls:</strong> Left click to rotate • Right click to pan • Scroll to zoom</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg p-6">
          <h4 className="font-semibold mb-3">Model Information</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Format:</span>
              <span>Interactive 3D Model</span>
            </div>
            <div className="flex justify-between">
              <span>Accuracy:</span>
              <span>Engineering Grade</span>
            </div>
            <div className="flex justify-between">
              <span>Scale:</span>
              <span>1:1 Real Size</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6">
          <h4 className="font-semibold mb-3">View Options</h4>
          <div className="space-y-3">
            <Button variant="outline" size="sm" className="w-full justify-start">
              📐 Technical Drawings
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              🔧 Assembly View
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              📋 Parts List
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3DViewer;