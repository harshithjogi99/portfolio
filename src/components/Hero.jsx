import React, { useState, useEffect } from 'react';
import TiltCard from './TiltCard';
import { DownloadIcon, TerminalIcon } from './icons';

const Hero = () => {
  // Typing Effect
  const words = [
    "Full-Stack Web Developer",
    "Generative AI Specialist",
    "Cybersecurity Engineer",
    "Software Engineering Student"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = words[currentWordIndex];

    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    // Word completed typing, wait and delete
    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } 
    // Word fully deleted, move to next word
    else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setTypingSpeed(300);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        alignItems: 'center',
        gap: '40px',
        paddingTop: '130px',
        paddingBottom: '80px',
      }}
      className="hero-section"
    >
      {/* Left Column: Title & Intro */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left' }}>
        <div>
          <span 
            style={{ 
              color: 'var(--accent-cyan)', 
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '1rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '10px'
            }}
          >
            Welcome to my space
          </span>
          <h1 
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
              lineHeight: '1.1',
              fontWeight: 800,
              margin: '0',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.03em'
            }}
          >
            Hi, I'm <span style={{
              background: 'linear-gradient(135deg, var(--accent-purple) 30%, var(--accent-cyan) 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }} className="glow-text-purple">Harshith Jogi</span>
          </h1>
          
          {/* Animated Subtitle */}
          <div 
            style={{ 
              height: '36px', 
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', 
              fontFamily: 'var(--font-display)', 
              fontWeight: 500,
              color: '#ffffff',
              marginTop: '15px'
            }}
          >
            <span>I'm a </span>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{currentText}</span>
            <span className="caret" />
          </div>
        </div>

        <p style={{ fontSize: '1.1rem', maxWidth: '580px', color: 'var(--text-secondary)' }}>
          Engineering student specializing in full-stack development, AI model integration, and threat detection. 
          I build high-performance, secure, and production-ready applications with modern web architectures.
        </p>

        {/* 3D Action Buttons */}
        <div style={{ display: 'flex', gap: '20px', marginTop: '16px', flexWrap: 'wrap' }}>
          {/* Purple 3D Button */}
          <button 
            className="btn-3d" 
            onClick={() => scrollToSection('projects')}
            aria-label="View Projects"
          >
            <span className="btn-3d-shadow" />
            <span className="btn-3d-edge purple" />
            <span className="btn-3d-front purple">
              View Work
            </span>
          </button>

          {/* Secondary Cyan 3D Button for resume */}
          <a 
            href="/jogiresume.pdf" 
            download="Harshith_Jogi_Resume.pdf"
            className="btn-3d"
            style={{ textDecoration: 'none' }}
            aria-label="Download Resume"
          >
            <span className="btn-3d-shadow" />
            <span className="btn-3d-edge cyan" />
            <span className="btn-3d-front cyan" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <DownloadIcon width="18px" height="18px" /> Resume.pdf
            </span>
          </a>
        </div>
      </div>

      {/* Right Column: 3D IDE Terminal Mockup */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          perspective: '1200px',
          width: '100%'
        }}
      >
        <TiltCard 
          maxRotation={10}
          scale={1.04}
          style={{
            width: '100%',
            maxWidth: '460px',
            height: '420px',
            padding: '0',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Window Header Bar */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 18px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid var(--border-color)',
            }}
          >
            {/* Window Dots */}
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#eab308' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
            </div>
            {/* Window Title */}
            <span 
              style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.8rem', 
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <TerminalIcon width="14px" height="14px" /> developer.json
            </span>
            <span style={{ width: '48px' }} /> {/* Spacer */}
          </div>

          {/* Window IDE Code Body */}
          <div 
            style={{
              padding: '24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              lineHeight: '1.6',
              textAlign: 'left',
              color: 'var(--text-primary)',
              flexGrow: 1,
              overflowY: 'auto',
              backgroundColor: 'rgba(7, 7, 12, 0.4)'
            }}
          >
            <div>
              <span className="code-syntax">const</span> <span style={{ color: 'var(--accent-cyan)' }}>developer</span> = &#123;
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <span style={{ color: 'var(--accent-pink)' }}>name</span>: <span style={{ color: '#a7f3d0' }}>"Harshith Jogi"</span>,
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <span style={{ color: 'var(--accent-pink)' }}>education</span>: <span style={{ color: '#a7f3d0' }}>"VIT Amaravathi"</span>,
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <span style={{ color: 'var(--accent-pink)' }}>course</span>: <span style={{ color: '#a7f3d0' }}>"M.Tech Software Engineering"</span>,
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <span style={{ color: 'var(--accent-pink)' }}>specialization</span>: [
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: '#a7f3d0' }}>"AI Workflows"</span>,
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: '#a7f3d0' }}>"FastAPI/Flask Backends"</span>,
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: '#a7f3d0' }}>"Cybersecurity Scan Platforms"</span>
              </div>
              <span style={{ marginLeft: '-20px' }}>]</span>,
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <span style={{ color: 'var(--accent-pink)' }}>hobbies</span>: [
                <span style={{ color: '#a7f3d0' }}>"Code reviewing"</span>, 
                <span style={{ color: '#a7f3d0' }}>"CTFs"</span>
              ],
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <span style={{ color: 'var(--accent-pink)' }}>active</span>: <span style={{ color: 'var(--accent-amber)' }}>true</span>,
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <span style={{ color: 'var(--accent-pink)' }}>seeking</span>: <span style={{ color: '#a7f3d0' }}>"Full-stack/AI Internships"</span>
            </div>
            <div>&#125;;</div>
            
            <div style={{ marginTop: '20px', color: 'var(--text-muted)' }}>
              // Move mouse over this box to tilt it in 3D space!
            </div>
          </div>
        </TiltCard>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            padding-top: 110px !important;
            text-align: center !important;
            gap: 50px !important;
          }
          .hero-section > div {
            text-align: center !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
