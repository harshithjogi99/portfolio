import React from 'react';

const ThreeDBackground = () => {
  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0, 
        pointerEvents: 'none', 
        overflow: 'hidden' 
      }}
    >
      {/* Tech Grid Pattern */}
      <div className="tech-grid" />

      {/* Radial Ambient Lights */}
      <div className="radial-glow radial-glow-purple" />
      <div className="radial-glow radial-glow-cyan" />
      
      {/* Floating 3D Geometric Orbs */}
      <div 
        className="radial-glow animate-float" 
        style={{
          width: '350px',
          height: '350px',
          background: 'var(--accent-pink)',
          top: '30%',
          left: '70%',
          opacity: '0.07',
          filter: 'blur(90px)',
          animationDuration: '12s'
        }} 
      />
      
      {/* Abstract Floating Shapes (CSS 3D Elements) */}
      <div 
        className="animate-float"
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '60px',
          height: '60px',
          border: '1px solid rgba(139, 92, 246, 0.25)',
          borderRadius: '35% 65% 70% 30% / 30% 40% 60% 70%',
          background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.05), rgba(6, 182, 212, 0.05))',
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.05)',
          transformStyle: 'preserve-3d',
          transform: 'perspective(500px) rotateX(20deg) rotateY(30deg)',
          animationDuration: '10s'
        }}
      />

      <div 
        className="animate-float-delayed"
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '85%',
          width: '80px',
          height: '80px',
          border: '1px solid rgba(6, 182, 212, 0.25)',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.03), rgba(236, 72, 153, 0.03))',
          boxShadow: '0 0 30px rgba(6, 182, 212, 0.05)',
          transformStyle: 'preserve-3d',
          transform: 'perspective(500px) rotateX(-15deg) rotateY(20deg)',
          animationDuration: '15s'
        }}
      />

      {/* Pure CSS 3D Spinning Wireframe Cube */}
      <div 
        style={{
          position: 'absolute',
          top: '45%',
          left: '5%',
          width: '50px',
          height: '50px',
          perspective: '1000px',
          opacity: 0.25
        }}
      >
        <div 
          className="animate-spin-slow"
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: 'rotateX(45deg) rotateY(45deg)',
            animationDuration: '25s'
          }}
        >
          {/* Cube Faces */}
          {[
            { transform: 'rotateY(0deg) translateZ(25px)' },
            { transform: 'rotateY(90deg) translateZ(25px)' },
            { transform: 'rotateY(180deg) translateZ(25px)' },
            { transform: 'rotateY(-90deg) translateZ(25px)' },
            { transform: 'rotateX(90deg) translateZ(25px)' },
            { transform: 'rotateX(-90deg) translateZ(25px)' },
          ].map((face, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                width: '50px',
                height: '50px',
                border: '1.5px solid var(--accent-cyan)',
                background: 'rgba(6, 182, 212, 0.02)',
                boxShadow: 'inset 0 0 10px rgba(6, 182, 212, 0.1)',
                transform: face.transform,
              }}
            />
          ))}
        </div>
      </div>

      {/* Another CSS 3D Spinning Wireframe Pyramid / Cube */}
      <div 
        style={{
          position: 'absolute',
          top: '70%',
          right: '8%',
          width: '60px',
          height: '60px',
          perspective: '1000px',
          opacity: 0.2
        }}
      >
        <div 
          className="animate-spin-slow"
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: 'rotateX(30deg) rotateY(-60deg)',
            animationDuration: '30s'
          }}
        >
          {[
            { transform: 'rotateY(0deg) translateZ(30px)' },
            { transform: 'rotateY(90deg) translateZ(30px)' },
            { transform: 'rotateY(180deg) translateZ(30px)' },
            { transform: 'rotateY(-90deg) translateZ(30px)' },
            { transform: 'rotateX(90deg) translateZ(30px)' },
            { transform: 'rotateX(-90deg) translateZ(30px)' },
          ].map((face, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                width: '60px',
                height: '60px',
                border: '1.5px solid var(--accent-purple)',
                background: 'rgba(139, 92, 246, 0.02)',
                boxShadow: 'inset 0 0 12px rgba(139, 92, 246, 0.1)',
                transform: face.transform,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeDBackground;
