import React, { useState } from 'react';
import TiltCard from './TiltCard';
import { MailIcon, PhoneIcon, LocationIcon, LinkedInIcon, CheckIcon } from './icons';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submit action
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <MailIcon width="20px" height="20px" style={{ color: 'var(--accent-purple)' }} />,
      label: "Email Me",
      value: "harshithjogi58@gmail.com",
      link: "mailto:harshithjogi58@gmail.com"
    },
    {
      icon: <PhoneIcon width="20px" height="20px" style={{ color: 'var(--accent-cyan)' }} />,
      label: "Call Me",
      value: "+91 7013729971",
      link: "tel:+917013729971"
    },
    {
      icon: <LocationIcon width="20px" height="20px" style={{ color: 'var(--accent-pink)' }} />,
      label: "Location",
      value: "Nellore, India",
      link: "https://maps.google.com/?q=Nellore,India"
    }
  ];

  return (
    <section id="contact" style={{ paddingBottom: '120px' }}>
      <div className="section-title-container">
        <span className="section-subtitle">Let's Connect</span>
        <h2 className="section-title">Get In Touch</h2>
      </div>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '40px',
          marginTop: '40px',
          textAlign: 'left'
        }}
        className="contact-container"
      >
        {/* Left Side: Contact Cards & Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>
            Let's build something awesome
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
            I am currently open to internship opportunities, full-time positions, and collaborative SaaS developments. Feel free to contact me directly or use the contact form.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {contactInfo.map((info, idx) => (
              <a
                href={info.link}
                key={idx}
                target={idx === 2 ? "_blank" : "_self"}
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '18px 24px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.3s ease',
                  }}
                  className="contact-card-hover"
                >
                  <div 
                    style={{
                      padding: '10px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {info.label}
                    </span>
                    <span style={{ fontSize: '1.05rem', color: '#fff', fontWeight: '500' }}>
                      {info.value}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Social icons row */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
            <a 
              href="https://www.linkedin.com/in/harshith-jogi-581177413" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                transition: 'all 0.3s ease'
              }}
              className="social-btn"
            >
              <LinkedInIcon width="20px" height="20px" />
            </a>
          </div>
        </div>

        {/* Right Side: 3D Form Card */}
        <div style={{ perspective: '1200px' }}>
          <TiltCard
            maxRotation={4}
            scale={1.01}
            style={{
              padding: '36px',
              border: '1px solid var(--border-color)',
              height: '100%'
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Name Field */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label 
                  htmlFor="name" 
                  style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '0.9rem', 
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  style={{
                    padding: '14px 18px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(7, 7, 12, 0.5)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  className="form-input"
                />
              </div>

              {/* Email Field */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label 
                  htmlFor="email" 
                  style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '0.9rem', 
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="johndoe@example.com"
                  style={{
                    padding: '14px 18px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(7, 7, 12, 0.5)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  className="form-input"
                />
              </div>

              {/* Message Field */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label 
                  htmlFor="message" 
                  style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '0.9rem', 
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hi Harshith, let's talk about..."
                  style={{
                    padding: '14px 18px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(7, 7, 12, 0.5)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    resize: 'none',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  className="form-input"
                />
              </div>

              {/* Depressible 3D Submit Button */}
              <div>
                <button 
                  type="submit" 
                  className="btn-3d" 
                  style={{ width: '100%' }}
                  disabled={submitted}
                  aria-label="Send Message"
                >
                  <span className="btn-3d-shadow" />
                  <span className="btn-3d-edge purple" style={{ borderRadius: '10px' }} />
                  <span 
                    className="btn-3d-front purple" 
                    style={{ 
                      borderRadius: '10px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: '8px' 
                    }}
                  >
                    {submitted ? (
                      <>
                        <CheckIcon width="18px" height="18px" /> Sent Successfully!
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </span>
                </button>
              </div>
            </form>
          </TiltCard>
        </div>
      </div>

      <style>{`
        .contact-card-hover:hover {
          background: rgba(255, 255, 255, 0.05) !important;
          border-color: rgba(6, 182, 212, 0.3) !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(6, 182, 212, 0.08);
        }
        .social-btn:hover {
          color: #fff !important;
          border-color: var(--accent-purple) !important;
          background-color: rgba(139, 92, 246, 0.1) !important;
          transform: translateY(-2px);
        }
        .form-input:focus {
          border-color: var(--accent-purple) !important;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.25) !important;
        }
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
