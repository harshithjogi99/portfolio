import React from 'react';
import TiltCard from './TiltCard';
import { 
  GitHubIcon, 
  ExternalLinkIcon, 
  SecurityIcon, 
  AnalyticsIcon, 
  CodeIcon,
  CheckIcon 
} from './icons';

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Screening System",
      category: "Artificial Intelligence & SaaS",
      icon: <CodeIcon width="24px" height="24px" style={{ color: 'var(--accent-purple)' }} />,
      tech: ["Python", "Flask", "Groq API (Llama 3.3)", "PyPDF2", "Vercel"],
      color: "purple",
      points: [
        "Designed prompt workflows for LLM-based evaluation across 10+ formats, delivering consistent skill gap analysis.",
        "Implemented 0–100 scoring system ranking candidates, reducing manual screening effort by 70%.",
        "Constructed a robust PDF parsing pipeline using PyPDF2 to extract unstructured concurrent uploads.",
        "Resolved 15+ API endpoint failures via Postman and log-based debugging, eliminating response latency.",
        "Deployed on Vercel, reducing inference latency to under 10 seconds."
      ],
      github: "https://github.com/harshithjogi",
      demo: "#"
    },
    {
      title: "AI Phishing URL Detector",
      category: "Cybersecurity & Machine Learning",
      icon: <SecurityIcon width="24px" height="24px" style={{ color: 'var(--accent-cyan)' }} />,
      tech: ["FastAPI", "Python", "Chrome Extension", "Machine Learning", "Automated Testing"],
      color: "cyan",
      points: [
        "Architected a FastAPI backend returning real-time threat classifications in under 200ms.",
        "Integrated with a Chrome Extension for live URL scanning across web and mobile-compatible platforms.",
        "Diagnosed and resolved 3 critical pipeline defects via log analysis, restoring stable API performance.",
        "Extracted 15+ features to classify malicious URLs, improving detection recall from 67% to 81%.",
        "Achieved 88% ROC-AUC through model training and validation via automated testing."
      ],
      github: "https://github.com/harshithjogi",
      demo: "#"
    },
    {
      title: "Customer Segmentation Analytics",
      category: "Data Analytics & Clustering",
      icon: <AnalyticsIcon width="24px" height="24px" style={{ color: 'var(--accent-pink)' }} />,
      tech: ["Python", "PCA", "K-Means Clustering", "Streamlit", "Pandas"],
      color: "pink",
      points: [
        "Processed 50K+ records, improving dataset reliability by 35% for downstream analytics.",
        "Applied K-Means and Hierarchical clustering across 15+ features to segment behavioral categories.",
        "Optimized clustering performance by 30% using Principal Component Analysis (PCA) with 95% variance.",
        "Launched an interactive real-time Streamlit dashboard reducing manual analysis time by 60%."
      ],
      github: "https://github.com/harshithjogi",
      demo: "#"
    }
  ];

  return (
    <section id="projects">
      <div className="section-title-container">
        <span className="section-subtitle">My Creative Work</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '30px',
          marginTop: '40px',
        }}
      >
        {projects.map((project, index) => (
          <TiltCard
            key={index}
            maxRotation={6}
            scale={1.02}
            style={{
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              border: '1px solid var(--border-color)',
            }}
          >
            <div>
              {/* Project Card Header */}
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '20px'
                }}
              >
                <div>
                  <span 
                    style={{ 
                      fontSize: '0.8rem', 
                      color: `var(--accent-${project.color})`, 
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontFamily: 'var(--font-display)'
                    }}
                  >
                    {project.category}
                  </span>
                  <h3 
                    style={{ 
                      fontSize: '1.4rem', 
                      marginTop: '4px',
                      fontFamily: 'var(--font-display)',
                      fontWeight: '700'
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
                <div
                  style={{
                    padding: '10px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {project.icon}
                </div>
              </div>

              {/* Tech Badges */}
              <div 
                style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '8px', 
                  marginBottom: '24px' 
                }}
              >
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bullet Points */}
              <ul 
                style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '12px',
                  marginBottom: '32px'
                }}
              >
                {project.points.map((pt, idx) => (
                  <li 
                    key={idx} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '10px', 
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.5'
                    }}
                  >
                    <span 
                      style={{ 
                        marginTop: '2px', 
                        color: `var(--accent-${project.color})`, 
                        display: 'flex', 
                        alignItems: 'center' 
                      }}
                    >
                      <CheckIcon width="14px" height="14px" strokeWidth="2.5" />
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Card Actions */}
            <div 
              style={{ 
                display: 'flex', 
                gap: '16px',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '20px',
              }}
            >
              {/* GitHub Button */}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="btn-3d"
                style={{ textDecoration: 'none', flexGrow: 1 }}
              >
                <span className="btn-3d-shadow" />
                <span className="btn-3d-edge purple" />
                <span 
                  className="btn-3d-front purple" 
                  style={{ 
                    padding: '8px 16px', 
                    fontSize: '0.9rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <GitHubIcon width="16px" height="16px" /> Code
                </span>
              </a>

              {/* Demo Button */}
              <a 
                href={project.demo} 
                className="btn-3d"
                style={{ textDecoration: 'none', flexGrow: 1 }}
              >
                <span className="btn-3d-shadow" />
                <span className={`btn-3d-edge ${project.color === 'cyan' ? 'cyan' : 'pink'}`} />
                <span 
                  className={`btn-3d-front ${project.color === 'cyan' ? 'cyan' : 'pink'}`} 
                  style={{ 
                    padding: '8px 16px', 
                    fontSize: '0.9rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '6px',
                    color: project.color === 'cyan' ? '#07070c' : '#fff'
                  }}
                >
                  <ExternalLinkIcon width="16px" height="16px" /> Live
                </span>
              </a>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
