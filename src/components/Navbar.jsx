import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon, GitHubIcon, LinkedInIcon } from './icons';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scroll Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Navbar solid transition
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active Section Tracking
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(7, 7, 12, 0.75)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
      }}
    >
      {/* Scroll Progress Bar */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(to right, var(--accent-purple), var(--accent-cyan), var(--accent-pink))',
          boxShadow: '0 0 8px var(--accent-cyan)',
          transition: 'width 0.1s ease',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '18px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          style={{
            textDecoration: 'none',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.4rem',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ color: 'var(--accent-cyan)' }}>&lt;</span>
          Harshith
          <span style={{ color: 'var(--accent-purple)', fontSize: '0.85rem', fontWeight: 600 }}>.jogi /&gt;</span>
        </a>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-menu"
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              gap: '24px',
            }}
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  style={{
                    textDecoration: 'none',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    color: activeSection === link.id ? '#ffffff' : 'var(--text-secondary)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    padding: '6px 0',
                  }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'var(--accent-cyan)',
                        borderRadius: '2px',
                        boxShadow: '0 0 6px var(--accent-cyan)',
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div
            style={{
              height: '20px',
              width: '1px',
              backgroundColor: 'var(--border-color)',
            }}
          />

          {/* Socials in Nav */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href="https://github.com/harshithjogi9999"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <GitHubIcon width="20px" height="20px" />
            </a>
            <a
              href="https://www.linkedin.com/in/harshith-jj-912aa2418/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-cyan)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <LinkedInIcon width="20px" height="20px" />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            padding: '4px',
            zIndex: 110,
          }}
          className="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <CloseIcon width="24px" height="24px" /> : <MenuIcon width="24px" height="24px" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: isMobileMenuOpen ? 0 : '-100%',
          width: '75%',
          maxWidth: '300px',
          height: '100vh',
          backgroundColor: 'var(--bg-slate)',
          borderLeft: '1px solid var(--border-color)',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
          padding: '100px 24px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'right 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
          zIndex: 90,
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                style={{
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '1.25rem',
                  color: activeSection === link.id ? 'var(--accent-cyan)' : 'var(--text-primary)',
                  transition: 'color 0.3s ease',
                  display: 'block',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Drawer Bottom Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              height: '1px',
              backgroundColor: 'var(--border-color)',
            }}
          />
          <div style={{ display: 'flex', gap: '24px' }}>
            <a
              href="https://github.com/harshithjogi9999"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <GitHubIcon width="22px" height="22px" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harshith-jj-912aa2418/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <LinkedInIcon width="22px" height="22px" /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* CSS overlay for desktop/mobile nav show-hide */}
      <style>{`
        @media (min-width: 769px) {
          .mobile-menu-toggle {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
