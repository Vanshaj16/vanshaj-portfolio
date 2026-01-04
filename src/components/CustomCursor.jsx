import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    let animationFrameId;
    
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail with smoother updates
      setTrail(prev => [...prev.slice(-8), { 
        x: e.clientX, 
        y: e.clientY, 
        id: Date.now() + Math.random() 
      }]);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    // Smooth trail fade-out
    const fadeTrail = () => {
      setTrail(prev => prev.filter((_, index) => index > 0 || Math.random() > 0.1));
      animationFrameId = requestAnimationFrame(fadeTrail);
    };
    
    fadeTrail();
    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Trail dots */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: (index / trail.length) * 0.6,
            transform: `translate(-50%, -50%) scale(${(index / trail.length) * 0.8})`,
          }}
        />
      ))}
      
      {/* Main cursor dot */}
      <div
        className={`cursor-dot ${isPointer ? 'cursor-dot-hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Outer ring */}
      <div
        className={`cursor-ring ${isPointer ? 'cursor-ring-hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};