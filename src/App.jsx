import React, { useState, useEffect } from 'react';
import ThreeDBackground from './components/ThreeDBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile to disable custom cursor
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Track mouse position
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => setCursorVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* 3D Moving Ambient Background */}
      <ThreeDBackground />

      {/* Frosted Glass Navigation Bar */}
      <Navbar />

      {/* Portfolio Main Content */}
      <main 
        style={{ 
          position: 'relative', 
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer 
        style={{
          position: 'relative',
          zIndex: 10,
          borderTop: '1px solid var(--border-color)',
          background: 'rgba(7, 7, 12, 0.9)',
          padding: '40px 24px',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Harshith Jogi. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Designed & Engineered with React, CSS 3D Transforms, and Glassmorphism.
          </p>
        </div>
      </footer>

      {/* Glowing Custom Cursor (only on non-mobile) */}
      {!isMobile && (
        <div
          style={{
            position: 'fixed',
            top: cursorPos.y,
            left: cursorPos.x,
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'rgba(6, 182, 212, 0.3)',
            boxShadow: '0 0 15px rgba(6, 182, 212, 0.6), 0 0 30px rgba(139, 92, 246, 0.4)',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            transition: 'transform 0.1s ease-out, opacity 0.3s ease',
            zIndex: 9999,
            opacity: cursorVisible ? 1 : 0
          }}
        />
      )}
    </>
  );
}

export default App;
