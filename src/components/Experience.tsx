'use client';

import React, { useState } from 'react';
import { SparklesIcon, ServerIcon, CodeIcon, CheckIcon } from './Icons';

type Tab = 'experience' | 'education' | 'leadership' | 'skills';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<Tab>('experience');

  const workExperience = [
    {
      role: 'Civil Engineering Technician & Data Researcher',
      organization: 'Ministry of Transportation of Quebec',
      location: 'Québec City, Canada',
      period: 'August 2025 - August 2026',
      highlights: [
        'Conducted specialized laboratory experiments investigating the effects of salinity on clay soil behavior and structural response.',
        'Performed comprehensive statistical and mathematical data analysis, correlating clay properties with salinity to inform provincial infrastructure design.'
      ],
      tags: ['Data Analysis', 'Laboratory Research', 'Soil Mechanics', 'Technical Reporting']
    },
    {
      role: 'Research Assistant in Remote Sensing & AI',
      organization: 'National Institute for Scientific Research (INRS)',
      location: 'Québec City, Canada',
      period: 'December 2025 - July 2026',
      highlights: [
        'Engineered an automated pixel-level classification algorithm using Landsat satellite imagery to monitor surface water dynamics.',
        'Processed and validated large-scale spatial datasets to quantify historical changes in Earth’s water coverage due to climate patterns.'
      ],
      tags: ['Satellite Data', 'Python', 'Computer Vision', 'Climate Analytics']
    },
    {
      role: 'Manager, Shift Supervisor & Team Member',
      organization: 'Tim Hortons',
      location: 'Québec City, Canada',
      period: 'May 2020 - May 2024',
      highlights: [
        'Supervised multidisciplinary staff, optimized shifts and operational workflow in a high-volume fast-paced environment.',
        'Ensured adherence to strict food safety protocols and maintained exceptional customer satisfaction standards.'
      ],
      tags: ['Operations Management', 'Team Leadership', 'Customer Relations']
    },
    {
      role: 'Barista, Dishwasher & Banquet Porter',
      organization: 'Fairmont Le Château Frontenac',
      location: 'Québec City, Canada',
      period: 'May 2024 - June 2026',
      highlights: [
        'Delivered high-standard luxury hospitality and banquet services during large-scale national and international conferences.',
        'Coordinated rapid logistics and supply staging during peak operational dining hours.'
      ],
      tags: ['Hospitality Logistics', 'High-Pressure Coordination']
    }
  ];

  const educationList = [
    {
      degree: 'Bachelor of Engineering (B.Eng.), Major in Software Engineering Co-op',
      institution: 'McGill University – Faculty of Engineering',
      location: 'Montréal, Canada',
      period: 'August 2026 - December 2029',
      details: 'Focused on distributed systems, algorithms, machine learning, computer architecture, and full-stack software development.'
    },
    {
      degree: 'AEC in Accounting and Management',
      institution: 'Rosemont College',
      location: 'Montréal, Canada',
      period: 'June 2026 - August 2026',
      details: 'R-Score: 31.991. Intensive program in corporate financial accounting, cost management, and managerial finance.'
    },
    {
      degree: 'Natural Sciences, Life Sciences & International Baccalaureate (IB)',
      institution: 'CÉGEP Garneau',
      location: 'Québec City, Canada',
      period: 'August 2024 - June 2026',
      details: 'R-Score: 33.324. Rigorous bilingual diploma focusing on advanced physics, organic chemistry, and calculus.'
    }
  ];

  const leadershipList = [
    {
      role: 'Founder & Coordinator',
      organization: 'The CÉGEP Garneau Academic Competition Committee',
      period: 'September 2024 - June 2026',
      desc: 'Founded and spearheaded a competitive academic initiative across disciplines, organizing participants, judges, and logistics to cultivate student excellence.'
    },
    {
      role: 'Vice-President Finance',
      organization: 'Bureau of Political Action & Information',
      period: 'September 2024 - June 2026',
      desc: 'Managed organizational financial budgets, handled grant accounting, and oversaw resource allocation for major student information campaigns.'
    }
  ];

  const distinctions = [
    'LORAN Finalist Scholarship',
    'Leaders of Tomorrow Scholarship',
    'Perseverance Scholarship',
    'Association of College Physics (ACP) Winner in Physics'
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="section-header">
        <div className="section-tag">
          <SparklesIcon className="icon-xs" />
          <span>Background</span>
        </div>
        <h2 className="section-title">
          Experience & <span className="text-gradient">Qualifications</span>
        </h2>
        <p className="section-desc">
          My academic foundation at McGill, industry research, leadership roles, and technical skill matrix.
        </p>
      </div>

      {/* Tabs */}
      <div className="exp-tabs">
        <button 
          className={`exp-tab ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          Professional Experience
        </button>
        <button 
          className={`exp-tab ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education & Honors
        </button>
        <button 
          className={`exp-tab ${activeTab === 'leadership' ? 'active' : ''}`}
          onClick={() => setActiveTab('leadership')}
        >
          Leadership
        </button>
        <button 
          className={`exp-tab ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          Skills & Languages
        </button>
      </div>

      {/* Tab Contents */}
      <div className="tab-content-wrapper">
        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="timeline-wrapper">
            {workExperience.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card glass">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <div className="timeline-company">{exp.organization} • <span className="timeline-loc">{exp.location}</span></div>
                    </div>
                    <div className="timeline-period-badge">{exp.period}</div>
                  </div>
                  
                  <ul className="timeline-bullets">
                    {exp.highlights.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="timeline-tags">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="timeline-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="education-grid">
            <div className="education-column">
              <h3 className="sub-heading">Academic Path</h3>
              {educationList.map((edu, idx) => (
                <div key={idx} className="glass edu-card">
                  <div className="edu-period">{edu.period}</div>
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <div className="edu-school">{edu.institution}</div>
                  <p className="edu-details">{edu.details}</p>
                </div>
              ))}
            </div>

            <div className="honors-column">
              <h3 className="sub-heading">Honors & Distinctions</h3>
              <div className="glass honors-card">
                <ul className="honors-list">
                  {distinctions.map((dist, idx) => (
                    <li key={idx} className="honor-item">
                      <div className="honor-icon">🏆</div>
                      <div>
                        <div className="honor-title">{dist}</div>
                        <div className="honor-desc">National / Provincial Academic Award</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Leadership Tab */}
        {activeTab === 'leadership' && (
          <div className="grid-2">
            {leadershipList.map((lead, idx) => (
              <div key={idx} className="glass leadership-card">
                <div className="leadership-badge">{lead.period}</div>
                <h3 className="leadership-role">{lead.role}</h3>
                <h4 className="leadership-org">{lead.organization}</h4>
                <p className="leadership-desc">{lead.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills & Languages Tab */}
        {activeTab === 'skills' && (
          <div className="skills-matrix-grid">
            <div className="glass skill-group-card">
              <h3 className="skill-group-title">
                <CodeIcon className="icon-sm color-blue" />
                <span>Programming & Frameworks</span>
              </h3>
              <div className="skill-pills">
                <span className="skill-pill highlighted">C# / Unity</span>
                <span className="skill-pill highlighted">Python (Django/Flask)</span>
                <span className="skill-pill highlighted">React / Next.js</span>
                <span className="skill-pill highlighted">TypeScript / JS</span>
                <span className="skill-pill highlighted">C++</span>
                <span className="skill-pill">Java</span>
                <span className="skill-pill">HTML5 & CSS3</span>
                <span className="skill-pill">TensorFlow / ML</span>
                <span className="skill-pill">React Native</span>
              </div>
            </div>

            <div className="glass skill-group-card">
              <h3 className="skill-group-title">
                <ServerIcon className="icon-sm color-purple" />
                <span>DevOps & Infrastructure</span>
              </h3>
              <div className="skill-pills">
                <span className="skill-pill highlighted">Docker & Containers</span>
                <span className="skill-pill highlighted">Synology DSM NAS</span>
                <span className="skill-pill highlighted">Linux & Bash Scripting</span>
                <span className="skill-pill">Nginx Reverse Proxy</span>
                <span className="skill-pill">Git & GitHub Actions</span>
                <span className="skill-pill">PostgreSQL / SQLite</span>
              </div>
            </div>

            <div className="glass skill-group-card">
              <h3 className="skill-group-title">
                <SparklesIcon className="icon-sm color-green" />
                <span>Languages & Fluency</span>
              </h3>
              <div className="languages-list">
                <div className="lang-row">
                  <span className="lang-name">English</span>
                  <span className="lang-level lang-bilingual">Bilingual Native</span>
                </div>
                <div className="lang-row">
                  <span className="lang-name">French (Français)</span>
                  <span className="lang-level lang-bilingual">Bilingual Native</span>
                </div>
                <div className="lang-row">
                  <span className="lang-name">Spanish (Español)</span>
                  <span className="lang-level lang-advanced">Advanced</span>
                </div>
                <div className="lang-row">
                  <span className="lang-name">Indonesian (Bahasa Indonesia)</span>
                  <span className="lang-level lang-advanced">Advanced</span>
                </div>
                <div className="lang-row">
                  <span className="lang-name">Italian (Italiano)</span>
                  <span className="lang-level lang-beginner">Beginner</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
