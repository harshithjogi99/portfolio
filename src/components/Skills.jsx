import React from 'react';
import TiltCard from './TiltCard';
import { 
  CodeIcon, 
  HtmlIcon, 
  DatabaseIcon, 
  GitIcon, 
  ServerIcon,
  PythonIcon,
  JavaScriptIcon,
  JavaIcon,
  CppIcon,
  ReactIcon,
  FastApiIcon,
  FlaskIcon,
  PostmanIcon,
  DockerIcon,
  CheckIcon
} from './icons';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <CodeIcon width="24px" height="24px" style={{ color: 'var(--accent-purple)' }} />,
      color: "purple",
      skills: [
        { name: "Python", icon: <PythonIcon /> },
        { name: "JavaScript", icon: <JavaScriptIcon /> },
        { name: "Java", icon: <JavaIcon /> },
        { name: "C++", icon: <CppIcon /> }
      ]
    },
    {
      title: "Frontend",
      icon: <HtmlIcon width="24px" height="24px" style={{ color: 'var(--accent-cyan)' }} />,
      color: "cyan",
      skills: [
        { name: "React", icon: <ReactIcon /> },
        { name: "Angular", icon: <HtmlIcon /> },
        { name: "HTML5", icon: <HtmlIcon /> },
        { name: "CSS3", icon: <HtmlIcon /> }
      ]
    },
    {
      title: "Backend & Databases",
      icon: <ServerIcon width="24px" height="24px" style={{ color: 'var(--accent-pink)' }} />,
      color: "pink",
      skills: [
        { name: "FastAPI", icon: <FastApiIcon /> },
        { name: "Flask", icon: <FlaskIcon /> },
        { name: "Node.js", icon: <ServerIcon /> },
        { name: "PostgreSQL", icon: <DatabaseIcon /> },
        { name: "MongoDB", icon: <DatabaseIcon /> },
        { name: "REST APIs", icon: <ServerIcon /> }
      ]
    },
    {
      title: "Debugging & Tools",
      icon: <GitIcon width="24px" height="24px" style={{ color: 'var(--accent-amber)' }} />,
      color: "amber",
      skills: [
        { name: "Git & GitHub", icon: <GitIcon /> },
        { name: "Postman", icon: <PostmanIcon /> },
        { name: "Docker", icon: <DockerIcon /> },
        { name: "Log Analysis", icon: <CodeIcon /> },
        { name: "Vercel", icon: <ServerIcon /> },
        { name: "Monitoring", icon: <ServerIcon /> }
      ]
    },
    {
      title: "CS Fundamentals & Practices",
      icon: <CheckIcon width="24px" height="24px" style={{ color: 'var(--accent-purple)' }} />,
      color: "purple",
      skills: [
        { name: "Algorithms & DS", icon: <CheckIcon /> },
        { name: "OOP & DBMS", icon: <CheckIcon /> },
        { name: "System Design", icon: <CheckIcon /> },
        { name: "Agile / Scrum", icon: <CheckIcon /> },
        { name: "Code Review", icon: <CheckIcon /> },
        { name: "Automated Testing", icon: <CheckIcon /> }
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="section-title-container">
        <span className="section-subtitle">Excellence and Stack</span>
        <h2 className="section-title">Technical Skills</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <TiltCard
            key={index}
            maxRotation={6}
            scale={1.02}
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              height: '100%',
              borderColor: `rgba(255, 255, 255, 0.06)`,
            }}
          >
            {/* Category Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div 
                style={{
                  padding: '10px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', fontWeight: '600' }}>
                {category.title}
              </h3>
            </div>

            {/* Divider */}
            <div 
              style={{
                height: '1px',
                width: '100%',
                background: 'linear-gradient(90deg, var(--border-color) 0%, transparent 100%)'
              }}
            />

            {/* Badges Container */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
              }}
            >
              {category.skills.map((skill, sIndex) => (
                <div 
                  key={sIndex} 
                  className="skill-badge"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)' }}>
                    {skill.icon}
                  </span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;
