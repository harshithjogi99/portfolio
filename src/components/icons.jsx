import React from 'react';

// Common Icon Props
const defaultProps = {
  width: "20px",
  height: "20px",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: ""
};

export const PythonIcon = (props) => (
  <svg {...defaultProps} {...props} strokeWidth="1.5">
    <path d="M12 2c5.522 0 10 4.477 10 10s-4.478 10-10 10S2 17.523 2 12 6.478 2 12 2z" stroke="none" fill="currentColor" opacity="0.1" />
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M14.25 7.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" fill="currentColor" stroke="none" />
    <path d="M9.75 14a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" fill="currentColor" stroke="none" />
    <path d="M12 6.5A3.5 3.5 0 0 0 8.5 10v1h1v-1a2.5 2.5 0 0 1 2.5-2.5h1.5v-1H12z" />
    <path d="M12 17.5a3.5 3.5 0 0 0 3.5-3.5v-1h-1v1a2.5 2.5 0 0 1-2.5 2.5H10.5v1H12z" />
  </svg>
);

export const JavaScriptIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M15 15c0 1.1-.9 2-2 2h-1v-2h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1v-2h1c1.1 0 2 .9 2 2v1zM9 17v-4h2v4H9z" fill="currentColor" stroke="none" />
  </svg>
);

export const JavaIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M6 15c0 3 3 4 6 4s6-1 6-4-3-4-6-4-6 1-6 4z" />
    <path d="M8 8c1-2 3-3 4-3s2 1 2 3-1 2-2 3" />
    <path d="M10 11c1-1.5 2.5-2 3.5-2s1.5.5 1.5 1.5c0 1-1.5 2-2.5 3" />
    <path d="M5 20c4 1.5 10 1.5 14 0" />
  </svg>
);

export const CppIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 15a3 3 0 1 1 0-6" />
    <path d="M14 12h4M16 10v4M19 12h2M20 11v2" strokeWidth="1.5" />
  </svg>
);

export const ReactIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const HtmlIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export const CssIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="M12 22V12" />
    <path d="M12 12L3 7" />
    <path d="M12 12l9-5" />
  </svg>
);

export const DatabaseIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

export const ServerIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
    <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
  </svg>
);

export const GitIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 15V9a4 4 0 0 0-4-4H9" />
    <line x1="6" y1="9" x2="6" y2="15" />
  </svg>
);

export const GitHubIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const PostmanIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

export const DockerIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="4" />
    <path d="M6 10h4M14 10h4M10 14h4" />
  </svg>
);

export const EducationIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

export const CertificationIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 11l2 2 4-4" />
  </svg>
);

export const MailIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const PhoneIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const LinkedInIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ExternalLinkIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export const CalendarIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const CodeIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const CheckIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const TerminalIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

export const FastApiIcon = (props) => (
  <svg {...defaultProps} {...props} fill="currentColor" stroke="none">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm0-6.5h-2V8h2v2z" opacity="0.1" />
    <path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9zm-1 5h2v2h-2V8zm0 4h2v5h-2v-5z" stroke="currentColor" fill="none" strokeWidth="2"/>
  </svg>
);

export const FlaskIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M9 2h6M12 2v10M12 12a5 5 0 1 1 0 10 5 5 0 0 1 0-10zM7.5 14.5a3.5 3.5 0 0 0 9 0" />
  </svg>
);

export const SecurityIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const AnalyticsIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

export const DownloadIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const LocationIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg {...defaultProps} {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
