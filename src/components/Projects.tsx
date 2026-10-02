'use client';

import React, { useState } from 'react';
import { 
  GithubIcon, 
  YoutubeIcon, 
  ExternalLinkIcon, 
  GamepadIcon, 
  ServerIcon, 
  CodeIcon, 
  SparklesIcon, 
  QrCodeIcon, 
  VrIcon 
} from './Icons';

type Category = 'All' | 'Game Dev & VR' | 'AI & Systems' | 'Cloud & NAS' | 'Web & Mobile';

interface Project {
  id: string;
  title: string;
  category: Category;
  tagline: string;
  description: string;
  tech: string[];
  status: string;
  statusType: 'success' | 'warning' | 'info' | 'purple' | 'danger';
  links: {
    github?: string;
    live?: string;
    youtube?: string;
    prototype?: string;
    qrModal?: boolean;
  };
  featured?: boolean;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [showQrModal, setShowQrModal] = useState<boolean>(false);

  const categories: Category[] = ['All', 'Game Dev & VR', 'AI & Systems', 'Cloud & NAS', 'Web & Mobile'];

  const projects: Project[] = [
    {
      id: 'the-manifesto',
      title: 'The Manifesto',
      category: 'Game Dev & VR',
      tagline: '2D Action Adventure, Puzzle & Fighting Game',
      description: 'An original 2D combat & adventure game built from scratch in Unity and C#, inspired by a fantasy web novel I am authoring. Features custom frame-data physics, decoupled state machine animations, and interactive puzzle dungeons.',
      tech: ['Unity', 'C#', 'Game Physics', 'State Machines', 'Animation Controllers'],
      status: 'In Active Development',
      statusType: 'purple',
      featured: true,
      links: {
        youtube: 'https://www.youtube.com/@mgfsdev',
      }
    },
    {
      id: 'mgfsdev',
      title: 'MGFsDev Studio & Channel',
      category: 'Game Dev & VR',
      tagline: 'YouTube & Twitch Game Development & Streaming',
      description: 'A dedicated developer content hub documenting indie game creation in Unity and C#, exploring AI-assisted game development workflows, shader mathematics, and live game architecture sessions with the community.',
      tech: ['Unity', 'C#', 'AI Game Dev Workflows', 'Content Creation', 'Twitch API', 'OBS Studio'],
      status: 'Active Content Creator',
      statusType: 'warning',
      featured: true,
      links: {
        youtube: 'https://www.youtube.com/@mgfsdev',
      }
    },
    {
      id: 'foodlens',
      title: 'FoodLens',
      category: 'AI & Systems',
      tagline: 'Smart Fridge Ingredient Recognition & Recipe AI',
      description: 'Computer vision and deep learning application that scans refrigerator ingredients via camera and automatically generates customized culinary recipes to eliminate food waste.',
      tech: ['Python', 'TensorFlow', 'Convolutional Neural Networks', 'Computer Vision', 'Flask API'],
      status: 'Interactive Prototype Ready',
      statusType: 'success',
      featured: true,
      links: {
        qrModal: true,
        prototype: 'https://foodlens.vercel.app'
      }
    },
    {
      id: 'synology-nas',
      title: 'Home Synology NAS Cloud Infrastructure',
      category: 'Cloud & NAS',
      tagline: '16TB Private Cloud, Docker Orchestration & Self-Hosting',
      description: 'Engineered a private enterprise-grade cloud server with 16TB storage array, running customized Docker containers for web applications, automated backups, reverse proxies with SSL termination, and network monitoring.',
      tech: ['Docker', 'Synology DSM', 'Nginx Reverse Proxy', 'SSL/TLS', 'Linux/Bash', 'Networking'],
      status: 'Production Running 24/7',
      statusType: 'success',
      featured: true,
      links: {}
    },
    {
      id: 'polyedu-vr',
      title: 'PolyEduVR (Virtual Labs)',
      category: 'Game Dev & VR',
      tagline: 'Immersive VR Virtual Laboratories & Science Experiments',
      description: 'An interactive virtual reality application in Unity enabling students to step inside 3D chemistry and physics laboratory simulations, safely conducting experiments and molecular manipulation impossible in standard classrooms.',
      tech: ['Unity', 'C#', 'OpenXR', 'VR Interaction Toolkit', 'Spatial Physics', '3D UI'],
      status: 'In Development',
      statusType: 'purple',
      featured: true,
      links: {}
    },
    {
      id: 'polyedu-web',
      title: 'PolyEdu.ca (formerly PolyEdu.org)',
      category: 'Web & Mobile',
      tagline: 'Non-Profit Educational Platform for High School & CÉGEP',
      description: 'A community-driven educational platform providing high-quality tutorial videos, exercises, and study resources for Québec students. Includes comprehensive publicly submitted project reports and development journals.',
      tech: ['Python', 'Django', 'PostgreSQL', 'HTML5/CSS3', 'REST API'],
      status: 'Down for System Updates',
      statusType: 'danger',
      links: {
        live: 'https://polyedu.ca',
      }
    },
    {
      id: 'polyedu-mobile',
      title: 'PolyEdu Mobile App',
      category: 'Web & Mobile',
      tagline: 'Cross-Platform Mobile Education on iOS & Android',
      description: 'Native mobile companion for PolyEdu, allowing students to download offline video tutorials, track their study streaks, and access step-by-step problem breakdowns on mobile devices.',
      tech: ['React Native', 'TypeScript', 'React', 'Mobile UI/UX', 'AsyncStorage'],
      status: 'Prototype Completed',
      statusType: 'info',
      links: {}
    },
    {
      id: 'landsat-water',
      title: 'Landsat Satellite Water Pixel AI Detection',
      category: 'AI & Systems',
      tagline: 'Global Water Surface Coverage Analysis Algorithm (INRS)',
      description: 'Developed an automated spectral index and machine learning algorithm analyzing multi-spectral Landsat satellite imagery to accurately segment water pixels and quantify climate change impacts on global water bodies.',
      tech: ['Machine Learning', 'Computer Vision', 'Deep Learning', 'Python', 'Remote Sensing', 'Data Science'],
      status: 'Research Completed',
      statusType: 'info',
      links: {}
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <div className="section-tag">
          <CodeIcon className="icon-xs" />
          <span>Portfolio Showcase</span>
        </div>
        <h2 className="section-title">
          Featured <span className="text-gradient">Projects</span> & Engineering
        </h2>
        <p className="section-desc">
          Full-stack platforms, virtual reality simulations, machine learning models, and self-hosted cloud systems.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="project-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-tab ${activeCategory === cat ? 'filter-active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card glass" id={`project-${project.id}`}>
            <div className="project-header">
              <div className="project-badge-row">
                <span className={`status-tag status-${project.statusType}`}>
                  {project.status}
                </span>
                <span className="category-pill">{project.category}</span>
              </div>
              
              <div className="project-actions">
                {project.links.qrModal && (
                  <button 
                    onClick={() => setShowQrModal(true)} 
                    className="project-link-icon qr-link" 
                    title="Try FoodLens Prototype / Scan QR"
                  >
                    <QrCodeIcon className="icon-sm" />
                  </button>
                )}
                {project.links.youtube && (
                  <a href={project.links.youtube} target="_blank" rel="noopener noreferrer" className="project-link-icon yt-link" title="Watch on YouTube">
                    <YoutubeIcon className="icon-sm" />
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link-icon live-link" title="Visit Live Site">
                    <ExternalLinkIcon className="icon-sm" />
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link-icon gh-link" title="View Source Code">
                    <GithubIcon className="icon-sm" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>
            <p className="project-desc">{project.description}</p>

            <div className="project-footer">
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* QR Code & Prototype Modal for FoodLens */}
      {showQrModal && (
        <div className="modal-overlay" onClick={() => setShowQrModal(false)}>
          <div className="glass modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="section-tag" style={{ marginBottom: 0 }}>
                <SparklesIcon className="icon-xs" />
                <span>Mobile Prototype</span>
              </div>
              <button className="modal-close-btn" onClick={() => setShowQrModal(false)}>✕</button>
            </div>

            <h3 className="modal-title">Try FoodLens ML Prototype</h3>
            <p className="modal-desc">
              Scan the QR code below on your smartphone camera or click the direct prototype link to test food ingredient classification in real-time.
            </p>

            <div className="qr-code-box">
              {/* Stylized Vector QR Code Graphic */}
              <svg className="qr-svg" viewBox="0 0 200 200" width="160" height="160">
                <rect width="200" height="200" fill="#090c10" rx="12" />
                {/* Corner Squares */}
                <rect x="20" y="20" width="50" height="50" fill="#38bdf8" rx="6" />
                <rect x="30" y="30" width="30" height="30" fill="#090c10" rx="4" />
                <rect x="38" y="38" width="14" height="14" fill="#38bdf8" />
                
                <rect x="130" y="20" width="50" height="50" fill="#38bdf8" rx="6" />
                <rect x="140" y="30" width="30" height="30" fill="#090c10" rx="4" />
                <rect x="148" y="38" width="14" height="14" fill="#38bdf8" />

                <rect x="20" y="130" width="50" height="50" fill="#38bdf8" rx="6" />
                <rect x="30" y="140" width="30" height="30" fill="#090c10" rx="4" />
                <rect x="38" y="148" width="14" height="14" fill="#38bdf8" />

                {/* Data modules */}
                <rect x="85" y="25" width="12" height="12" fill="#a855f7" />
                <rect x="102" y="25" width="12" height="12" fill="#38bdf8" />
                <rect x="85" y="45" width="12" height="12" fill="#38bdf8" />
                <rect x="85" y="85" width="28" height="28" fill="#38bdf8" rx="4" />
                <rect x="92" y="92" width="14" height="14" fill="#090c10" />
                <rect x="25" y="85" width="12" height="12" fill="#38bdf8" />
                <rect x="45" y="85" width="12" height="12" fill="#a855f7" />
                <rect x="130" y="85" width="12" height="12" fill="#38bdf8" />
                <rect x="150" y="85" width="12" height="12" fill="#a855f7" />
                <rect x="130" y="105" width="12" height="12" fill="#a855f7" />
                <rect x="165" y="105" width="12" height="12" fill="#38bdf8" />
                <rect x="85" y="130" width="12" height="12" fill="#38bdf8" />
                <rect x="105" y="130" width="12" height="12" fill="#a855f7" />
                <rect x="85" y="150" width="12" height="12" fill="#a855f7" />
                <rect x="130" y="130" width="12" height="12" fill="#38bdf8" />
                <rect x="150" y="150" width="12" height="12" fill="#38bdf8" />
                <rect x="165" y="165" width="15" height="15" fill="#a855f7" />
              </svg>
              <div className="qr-badge">foodlens-demo.local</div>
            </div>

            <div className="modal-actions">
              <a 
                href="#projects" 
                onClick={() => {
                  alert("FoodLens mobile web demo container is configured to launch via TensorFlow Flask API on local/Docker server.");
                  setShowQrModal(false);
                }} 
                className="btn btn-primary"
              >
                <ExternalLinkIcon className="icon-sm" />
                <span>Launch Interactive Demo</span>
              </a>
              <button className="btn btn-secondary" onClick={() => setShowQrModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
