import React, { useState, useRef } from 'react';

const TiltCard = ({ children, className = '', maxRotation = 12, scale = 1.03, ...props }) => {
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
  });
  const [sheenStyle, setSheenStyle] = useState({
    opacity: 0,
    background: 'radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
  });
  
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Width and height of card
    const width = rect.width;
    const height = rect.height;
    
    // Mouse position relative to card center (from -0.5 to 0.5)
    const mouseX = (e.clientX - rect.left - width / 2) / width;
    const mouseY = (e.clientY - rect.top - height / 2) / height;
    
    // Calculate rotation angles
    const rotateX = -mouseY * maxRotation;
    const rotateY = mouseX * maxRotation;
    
    // Calculate sheen position (percentage from 0 to 100)
    const sheenX = ((e.clientX - rect.left) / width) * 100;
    const sheenY = ((e.clientY - rect.top) / height) * 100;
    
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
    });
    
    setSheenStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255, 255, 255, 0.12) 0%, transparent 60%)`,
    });
  };

  const handleMouseEnter = () => {
    // Reset transitions and set active scale
    cardRef.current.style.transition = 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)';
  };

  const handleMouseLeave = () => {
    // Reset to base position with smooth animation
    cardRef.current.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    });
    setSheenStyle({
      opacity: 0,
      background: 'radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0) 0%, transparent 50%)',
    });
  };

  return (
    <div
      ref={cardRef}
      className={`glass-card perspective-container ${className}`}
      style={{
        ...style,
        position: 'relative',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div 
        className="tilt-sheen" 
        style={{
          ...sheenStyle,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 10,
          borderRadius: 'inherit',
          transition: 'opacity 0.3s ease',
        }} 
      />
      <div style={{ transform: 'translateZ(10px)', height: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
