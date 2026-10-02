'use client';

import React, { useState } from 'react';
import { GithubIcon, YoutubeIcon, ExternalLinkIcon, GamepadIcon, ServerIcon, CodeIcon, SparklesIcon } from './Icons';

type Category = 'All' | 'Web & Mobile' | 'Game Dev' | 'AI & Systems' | 'Cloud & NAS';

interface Project {
  id: string;
  title: string;
  category: Category;
  tagline: string;
  description: string;
  tech: string[];
  status: string;
  statusType: 'success' | 'warning' | 'info' | 'purple';
  links: {
    github?: string;
    live?: string;
    youtube?: string;
    report?: string;
  };
  featured?: boolean;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'Web & Mobile', 'Game Dev', 'AI & Systems', 'Cloud & NAS'];

  const projects: Project[] = [
    {
      id: 'the-manifesto',
      title: 'The Manifesto',
      category: 'Game Dev',
      tagline: '2D Action Adventure, Puzzle & Fighting Game',
      description: 'An original 2D fighting & adventure game built from scratch in Unity and C#, inspired by a fantasy web novel I am writing. Features custom combat physics, state machine animation controllers, and interactive level puzzles.',
      tech: ['Unity', 'C#', 'Game Physics', 'Animation State Machines', 'Level Design'],
      status: 'In Active Development',
      statusType: 'purple',
      featured: true,
      links: {
        youtube: 'https://www.youtube.com/@mgfsdev',
      }
    },
    {
      id: 'polyedu-web',
      title: 'PolyEdu.ca (formerly PolyEdu.org)',
      category: 'Web & Mobile',
      tagline: 'Non-Profit Educational Platform for High School & CÉGEP',
      description: 'A community-driven educational platform providing high-quality tutorial videos, exercises, and study resources for Québec high school and CEGEP students. Includes comprehensive publicly submitted project reports and development journals.',
      tech: ['Python', 'Django', 'PostgreSQL', 'HTML5/CSS3', 'REST API'],
      status: 'Live & Published',
      statusType: 'success',
      featured: true,
      links: {
        live: 'https://polyedu.ca',
      }
    },
    {
      id: 'polyedu-mobile',
      title: 'PolyEdu Mobile App',
      category: 'Web & Mobile',
      tagline: 'Cross-Platform Mobile Education on iOS & Android',
      description: 'Native mobile client for PolyEdu, empowering students to download offline video tutorials, track their study streaks, and access step-by-step problem breakdowns on their smartphones.',
      tech: ['React Native', 'TypeScript', 'React', 'Mobile UI/UX', 'AsyncStorage'],
      status: 'Prototype Completed',
      statusType: 'info',
      links: {}
    },
    {
      id: 'mgfsdev',
      title: 'MGFsDev Channel',
      category: 'Game Dev',
      tagline: 'YouTube & Twitch Game Development & Streaming',
      description: 'A content creation hub and developer channel documenting the creation of indie games in Unity/C#, experimenting with AI-assisted game development workflows, shader programming, and live interactive coding sessions.',
      tech: ['Unity', 'C#', 'Content Creation', 'AI Workflows', 'Twitch API', 'OBS Studio'],
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
      tagline: 'Smart Fridge Ingredient Recognition & Recipe Generator',
      description: 'Computer vision and machine learning application that detects ingredients in refrigerator photos and generates tailored recipes to minimize food waste and optimize nutrition.',
      tech: ['Python', 'TensorFlow', 'Computer Vision', 'CNNs', 'Flask API'],
      status: 'Machine Learning Model Trained',
      statusType: 'purple',
      links: {}
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
      id: 'landsat-water',
      title: 'Landsat Satellite Water Pixel Detection',
      category: 'AI & Systems',
      tagline: 'Global Water Surface Coverage Analysis Algorithm',
      description: 'Developed an automated spectral index and machine learning algorithm analyzing multi-spectral Landsat satellite imagery to accurately segment water pixels and quantify climate change impacts on global water bodies at INRS.',
      tech: ['Python', 'Remote Sensing', 'Data Science', 'Satellite Imagery', 'NumPy/Pandas'],
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
          <span>Portfolio</span>
        </div>
        <h2 className="section-title">
          Featured <span className="text-gradient">Projects</span> & Engineering
        </h2>
        <p className="section-desc">
          A selection of full-stack web platforms, mobile applications, indie games, and self-hosted infrastructure I&apos;ve engineered.
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
    </section>
  );
}
