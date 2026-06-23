import React from 'react';
import TiltCard from './TiltCard';
import { CertificationIcon, CheckIcon } from './icons';

const Certifications = () => {
  const certs = [
    {
      title: "OCI 2025 Certified Generative AI Professional",
      provider: "Oracle",
      year: "2025",
      color: "purple",
      desc: "Validates proficiency in deploying LLMs, fine-tuning techniques, prompt engineering, and building generative AI workflows on Oracle Cloud Infrastructure.",
      details: ["RAG Systems", "LLM Fine-Tuning", "Security & Guardrails"]
    },
    {
      title: "Postman API Fundamentals Student Expert",
      provider: "Postman",
      year: "2024",
      color: "cyan",
      desc: "Validates expertise in designing REST APIs, endpoint orchestration, request validation, automated testing workflows, and API environment variables.",
      details: ["API Automation", "Postman Collections", "Endpoint Orchestration"]
    },
    {
      title: "GenAI Powered Data Analytics Job Simulation",
      provider: "Forage",
      year: "2024",
      color: "pink",
      desc: "Simulated analytics projects focusing on processing raw dataset pipelines, applying clustering models, and conducting automated prompt-based data evaluation.",
      details: ["Clustering Pipelines", "Data Ingestion", "Prompt Analysis"]
    }
  ];

  return (
    <section id="certifications" style={{ paddingBottom: '60px' }}>
      <div className="section-title-container">
        <span className="section-subtitle">Credentials & Verifications</span>
        <h2 className="section-title">Certifications & Badges</h2>
      </div>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginTop: '40px',
        }}
      >
        {certs.map((cert, index) => (
          <TiltCard
            key={index}
            maxRotation={8}
            scale={1.03}
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              border: '1px solid var(--border-color)',
            }}
          >
            <div>
              {/* Badge Icon Header */}
              <div 
                style={{
                  display: 'inline-flex',
                  padding: '12px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  color: `var(--accent-${cert.color})`,
                  boxShadow: `0 0 15px rgba(var(--accent-${cert.color}-glow), 0.05)`,
                  marginBottom: '20px'
                }}
              >
                <CertificationIcon width="28px" height="28px" />
              </div>

              {/* Title & Provider */}
              <h3 
                style={{ 
                  fontSize: '1.25rem', 
                  fontFamily: 'var(--font-display)', 
                  fontWeight: '700',
                  lineHeight: '1.4',
                  marginBottom: '4px'
                }}
              >
                {cert.title}
              </h3>
              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '16px',
                  fontFamily: 'var(--font-display)',
                }}
              >
                <span>Issued by <strong>{cert.provider}</strong></span>
                <span style={{ color: `var(--accent-${cert.color})` }}>{cert.year}</span>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.5' }}>
                {cert.desc}
              </p>
            </div>

            {/* Validation Pills */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '18px'
              }}
            >
              {cert.details.map((detail, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span style={{ color: `var(--accent-${cert.color})`, display: 'flex', alignItems: 'center' }}>
                    <CheckIcon width="10px" height="10px" strokeWidth="3" />
                  </span>
                  {detail}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
