import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: 'circuit' | 'data' | 'signal';
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = Math.floor(window.innerWidth / 20);

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          type: ['circuit', 'data', 'signal'][Math.floor(Math.random() * 3)] as 'circuit' | 'data' | 'signal'
        });
      }
      setParticles(newParticles);
    };

    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;

      // Mouse interaction effect
      const distance = Math.sqrt(
        Math.pow(particle.x - mousePos.x, 2) + Math.pow(particle.y - mousePos.y, 2)
      );
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        ctx.globalAlpha = Math.min(particle.opacity + force * 0.5, 1);
        particle.size = Math.min(particle.size + force * 2, 8);
      }

      switch (particle.type) {
        case 'circuit':
          // Draw circuit node
          ctx.fillStyle = 'hsl(var(--highlight))';
          ctx.fillRect(particle.x - particle.size/2, particle.y - particle.size/2, particle.size, particle.size);
          
          // Draw connections
          if (distance < 80) {
            ctx.strokeStyle = 'hsl(var(--accent))';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.stroke();
          }
          break;
          
        case 'data':
          // Draw data pulse
          ctx.fillStyle = 'hsl(var(--accent))';
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Pulse effect
          if (distance < 60) {
            ctx.strokeStyle = 'hsl(var(--highlight))';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size + 3, 0, Math.PI * 2);
            ctx.stroke();
          }
          break;
          
        case 'signal':
          // Draw signal wave
          ctx.strokeStyle = 'hsl(var(--highlight))';
          ctx.lineWidth = particle.size;
          ctx.beginPath();
          ctx.moveTo(particle.x - 10, particle.y);
          
          for (let j = 0; j < 20; j++) {
            const waveY = particle.y + Math.sin((particle.x + j * 2) * 0.1 + Date.now() * 0.005) * 3;
            ctx.lineTo(particle.x - 10 + j, waveY);
          }
          ctx.stroke();
          break;
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        drawParticle(particle);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    // Initialize
    resizeCanvas();
    createParticles();
    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePos.x, mousePos.y, particles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default InteractiveBackground;
