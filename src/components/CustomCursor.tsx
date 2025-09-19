import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trailParticles, setTrailParticles] = useState<Array<{id: number, x: number, y: number, timestamp: number}>>([]);
  const [ripples, setRipples] = useState<Array<{id: number, x: number, y: number, timestamp: number}>>([]);
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
  
  const idleTimeoutRef = useRef<NodeJS.Timeout>();
  const lastMoveTimeRef = useRef<number>(Date.now());
  const particleIdRef = useRef(0);
  const rippleIdRef = useRef(0);

  useEffect(() => {
    let animationFrame: number;
    let lastMousePos = { x: 0, y: 0 };

    const updateCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setMousePos({ x, y });
      lastMoveTimeRef.current = Date.now();
      
      // Reset idle state
      setIsIdle(false);
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      
      // Set idle timeout
      idleTimeoutRef.current = setTimeout(() => {
        setIsIdle(true);
      }, 2500);

      // Calculate mouse speed for trail effect
      const speed = Math.sqrt(
        Math.pow(x - lastMousePos.x, 2) + Math.pow(y - lastMousePos.y, 2)
      );

      // Add neural spark particles when moving fast
      if (speed > 8) {
        const newParticles = [];
        for (let i = 0; i < Math.min(3, Math.floor(speed / 10)); i++) {
          newParticles.push({
            id: particleIdRef.current++,
            x: lastMousePos.x + (Math.random() - 0.5) * 20,
            y: lastMousePos.y + (Math.random() - 0.5) * 20,
            timestamp: Date.now()
          });
        }
        
        setTrailParticles(prev => [
          ...prev.slice(-15), // Keep only last 15 particles
          ...newParticles
        ]);
      }

      lastMousePos = { x, y };

      // Smooth cursor movement with spring animation
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(true);
      setHoveredElement(target);
      
      // Add glow to hovered element
      target.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
      target.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(20, 184, 166, 0.2)';
      target.style.transform = 'scale(1.02)';
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(false);
      setHoveredElement(null);
      
      // Remove glow from element
      target.style.boxShadow = '';
      target.style.transform = '';
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      
      // Create neural ripple effect
      const newRipple = {
        id: rippleIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      };
      
      setRipples(prev => [...prev.slice(-5), newRipple]);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Add event listeners to interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], input, textarea, select, .interactive'
      );
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Initialize
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    addHoverListeners();

    // Clean up particles and ripples
    const cleanupEffects = () => {
      const now = Date.now();
      
      setTrailParticles(prev => 
        prev.filter(particle => now - particle.timestamp < 1500)
      );
      
      setRipples(prev => 
        prev.filter(ripple => now - ripple.timestamp < 2000)
      );
      
      animationFrame = requestAnimationFrame(cleanupEffects);
    };
    cleanupEffects();

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Neural spark trail particles */}
      {trailParticles.map((particle, index) => {
        const age = Date.now() - particle.timestamp;
        const opacity = Math.max(0, 1 - age / 1500);
        const scale = Math.max(0.2, 1 - age / 1500);
        
        return (
          <div
            key={particle.id}
            className="fixed pointer-events-none z-[9998]"
            style={{
              left: particle.x - 3,
              top: particle.y - 3,
              width: 6,
              height: 6,
              opacity,
              transform: `scale(${scale})`,
              background: `radial-gradient(circle, 
                rgba(139, 92, 246, ${opacity * 0.9}), 
                rgba(20, 184, 166, ${opacity * 0.7}), 
                rgba(59, 130, 246, ${opacity * 0.5})
              )`,
              borderRadius: '50%',
              boxShadow: `0 0 ${10 * opacity}px rgba(139, 92, 246, ${opacity * 0.8})`,
              transition: 'all 0.1s ease-out'
            }}
          />
        );
      })}

      {/* Neural ripple effects */}
      {ripples.map((ripple) => {
        const age = Date.now() - ripple.timestamp;
        const progress = Math.min(1, age / 2000);
        const opacity = Math.max(0, 1 - progress);
        const scale = 1 + progress * 3;
        
        return (
          <div
            key={ripple.id}
            className="fixed pointer-events-none z-[9997]"
            style={{
              left: ripple.x - 50,
              top: ripple.y - 50,
              width: 100,
              height: 100,
              opacity: opacity * 0.6,
              transform: `scale(${scale})`,
              border: `2px solid rgba(139, 92, 246, ${opacity})`,
              borderRadius: '50%',
              background: `radial-gradient(circle, 
                transparent 60%, 
                rgba(139, 92, 246, ${opacity * 0.1}) 70%, 
                rgba(20, 184, 166, ${opacity * 0.05}) 80%, 
                transparent 90%
              )`,
              animation: `neural-ripple 2s ease-out forwards`
            }}
          />
        );
      })}

      {/* Main AI cursor orb */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[10000] transition-all duration-300 ease-out ${
          isHovering ? 'scale-200' : 'scale-100'
        } ${isClicking ? 'scale-75' : ''} ${isIdle ? 'animate-ai-breathe' : ''}`}
        style={{
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      >
        {/* Outer neural field (appears on hover) */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-500 ${
            isHovering 
              ? 'scale-150 opacity-100 animate-neural-field' 
              : 'scale-100 opacity-0'
          }`}
          style={{
            background: `conic-gradient(from 0deg, 
              rgba(139, 92, 246, 0.3), 
              rgba(20, 184, 166, 0.3), 
              rgba(59, 130, 246, 0.3), 
              rgba(139, 92, 246, 0.3)
            )`,
            filter: 'blur(8px)',
            animation: isHovering ? 'neural-rotation 4s linear infinite' : 'none'
          }}
        />
        
        {/* Magnetic attraction effect */}
        {isHovering && hoveredElement && (
          <div
            className="absolute w-1 opacity-60 animate-pulse"
            style={{
              height: '20px',
              background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.8), transparent)',
              left: '50%',
              top: '50%',
              transformOrigin: 'left center',
              transform: 'translateY(-50%) rotate(45deg)',
              animation: 'magnetic-pull 0.8s ease-in-out infinite alternate'
            }}
          />
        )}
        
        {/* Main orb with liquid morphing */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isHovering ? 'animate-liquid-morph' : ''
          }`}
          style={{
            background: `radial-gradient(circle at 30% 30%, 
              rgba(139, 92, 246, 0.95), 
              rgba(20, 184, 166, 0.85), 
              rgba(59, 130, 246, 0.75)
            )`,
            boxShadow: `
              0 0 20px rgba(139, 92, 246, 0.8),
              0 0 40px rgba(20, 184, 166, 0.6),
              0 0 60px rgba(59, 130, 246, 0.4),
              inset 0 0 20px rgba(255, 255, 255, 0.2)
            `,
            filter: isHovering ? 'blur(0.5px)' : 'none',
            animation: isIdle ? 'ai-pulse 3s ease-in-out infinite' : 
                      isHovering ? 'color-shift 2s ease-in-out infinite' : 'none'
          }}
        />

        {/* Inner core with AI intelligence indicator */}
        <div
          className="absolute inset-2 rounded-full opacity-80"
          style={{
            background: `radial-gradient(circle at 40% 40%, 
              rgba(255, 255, 255, 0.4), 
              rgba(139, 92, 246, 0.2), 
              transparent 70%
            )`,
            animation: 'core-pulse 2s ease-in-out infinite alternate'
          }}
        />

        {/* Neural synapses (idle state) */}
        {isIdle && (
          <>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px opacity-60"
                style={{
                  height: '15px',
                  background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.8), transparent)',
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'top center',
                  transform: `rotate(${i * 60}deg) translateY(-25px)`,
                  animation: `synapse-pulse 2s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </>
        )}

        {/* Click feedback ring */}
        {isClicking && (
          <div
            className="absolute -inset-2 rounded-full animate-ping"
            style={{
              border: '2px solid rgba(139, 92, 246, 0.6)',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent 70%)'
            }}
          />
        )}
      </div>
    </>
  );
};

export default CustomCursor;