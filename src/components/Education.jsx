import React from 'react';
import TiltCard from './TiltCard';
import { EducationIcon, CalendarIcon, CheckIcon } from './icons';

const Education = () => {
  const milestones = [
    {
      year: "Sep 2022 – Present",
      title: "M.Tech Integrated in Software Engineering",
      institution: "Vellore Institute of Technology, Amaravathi",
      description: "Acquiring core computer science and engineering foundations with a specialization in modern software design practices, software patterns, and full-stack implementation.",
      details: [
        "Current CGPA: 7.46 / 10",
        "Key Coursework: Data Structures & Algorithms, Software Engineering, Database Management Systems, Object-Oriented Programming"
      ]
    },
    {
      year: "2023 – 2024",
      title: "Full-Stack Development & API Design",
      institution: "Self-Driven Research & Projects",
      description: "Mastered backend structures and API routing. Built production-ready services using FastAPI, Flask, and Node.js with database integrations.",
      details: [
        "Designed REST APIs with detailed query processing and routing systems.",
        "Implemented robust server testing protocols using Postman and Swagger."
      ]
    },
    {
      year: "2024 – 2025",
      title: "AI Integration & Threat Intel Focus",
      institution: "Project Engineering Phase",
      description: "Spearheaded advanced projects combining Large Language Models and cybersecurity algorithms into lightweight web interfaces and browser integrations.",
      details: [
        "Built prompt orchestration pipelines using Groq API (Llama 3.3).",
        "Created background scripts for real-time malicious traffic scan extensions."
      ]
    }
  ];

  return (
    <section id="education">
      <div className="section-title-container">
        <span className="section-subtitle">Academic & Growth Journey</span>
        <h2 className="section-title">Education & Timeline</h2>
      </div>

      <div 
        style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '40px auto 0',
          padding: '0 20px',
        }}
      >
        {/* Central Vertical Line */}
        <div 
          style={{
            position: 'absolute',
            left: '31px',
            top: '8px',
            bottom: '8px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent-purple), var(--accent-cyan), transparent)',
            boxShadow: '0 0 10px rgba(139, 92, 246, 0.2)'
          }}
        />

        {/* Timeline Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                gap: '30px',
                position: 'relative',
              }}
            >
              {/* Left Timeline Indicator Node */}
              <div 
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-dark)',
                  border: `3px solid ${index === 0 ? 'var(--accent-purple)' : index === 1 ? 'var(--accent-cyan)' : 'var(--accent-pink)'}`,
                  boxShadow: `0 0 15px ${index === 0 ? 'var(--accent-purple)' : index === 1 ? 'var(--accent-cyan)' : 'var(--accent-pink)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  marginTop: '10px',
                  marginLeft: '10px',
                  flexShrink: 0
                }}
              >
                <div 
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: index === 0 ? 'var(--accent-purple)' : index === 1 ? 'var(--accent-cyan)' : 'var(--accent-pink)'
                  }} 
                />
              </div>

              {/* Card Container */}
              <div style={{ flexGrow: 1, perspective: '1000px' }}>
                <TiltCard
                  maxRotation={4}
                  scale={1.01}
                  style={{
                    padding: '28px',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    textAlign: 'left'
                  }}
                >
                  {/* Timeline Card Header */}
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '10px',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', fontWeight: '700' }}>
                        {milestone.title}
                      </h3>
                      <span 
                        style={{ 
                          fontSize: '0.9rem', 
                          color: 'var(--text-secondary)',
                          fontStyle: 'italic',
                          display: 'block',
                          marginTop: '2px'
                        }}
                      >
                        {milestone.institution}
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-display)',
                        color: 'var(--accent-cyan)',
                        fontWeight: '500'
                      }}
                    >
                      <CalendarIcon width="14px" height="14px" />
                      <span>{milestone.year}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    {milestone.description}
                  </p>

                  {/* Details bullet points */}
                  <ul 
                    style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '8px' 
                    }}
                  >
                    {milestone.details.map((detail, dIndex) => (
                      <li 
                        key={dIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          fontSize: '0.88rem',
                          color: 'var(--text-primary)'
                        }}
                      >
                        <span style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', marginTop: '2px' }}>
                          <CheckIcon width="12px" height="12px" strokeWidth="3" />
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
