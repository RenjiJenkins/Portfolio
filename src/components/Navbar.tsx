'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GithubIcon, YoutubeIcon, LinkedinIcon, DownloadIcon } from './Icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar glass">
        <Link href="/" className="nav-brand">
          <span className="brand-badge">RJ</span>
          <span className="brand-name">Renji Jenkins</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <a href="/#about" className="nav-link">About</a>
          <a href="/#experience" className="nav-link">Experience</a>
          <a href="/#projects" className="nav-link">Projects</a>
          <a href="/#nas-lab" className="nav-link">NAS Lab</a>
          <Link href="/blog" className="nav-link">Reflections</Link>
          <a href="/#contact" className="nav-link">Contact</a>
        </div>

        {/* Action icons & buttons */}
        <div className="nav-actions">
          <a 
            href="https://www.linkedin.com/in/renjijenkins/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-btn linkedin-btn" 
            title="LinkedIn (Renji Jenkins)"
          >
            <LinkedinIcon className="icon-svg" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-btn" 
            title="GitHub"
          >
            <GithubIcon className="icon-svg" />
          </a>
          <a 
            href="https://www.youtube.com/@mgfsdev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-btn youtube-btn" 
            title="YouTube (@mgfsdev)"
          >
            <YoutubeIcon className="icon-svg" />
          </a>
          <a 
            href="/cv.pdf" 
            download="Renji_Jenkins_CV.pdf"
            className="btn btn-sm btn-primary download-nav-btn"
            title="Download Curriculum Vitae"
          >
            <DownloadIcon className="icon-sm" />
            <span>CV</span>
          </a>

          {/* Mobile hamburger button */}
          <button 
            className="mobile-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`bar ${isOpen ? 'bar-1' : ''}`}></span>
            <span className={`bar ${isOpen ? 'bar-2' : ''}`}></span>
            <span className={`bar ${isOpen ? 'bar-3' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="mobile-menu glass">
          <a href="/#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="/#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="/#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="/#nas-lab" onClick={() => setIsOpen(false)}>NAS Lab</a>
          <Link href="/blog" onClick={() => setIsOpen(false)}>Reflections & Blog</Link>
          <a href="/#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '0.5rem' }}>
            <a href="https://www.linkedin.com/in/renjijenkins/" target="_blank" rel="noopener noreferrer" className="icon-btn linkedin-btn">
              <LinkedinIcon className="icon-sm" />
            </a>
            <a href="https://www.youtube.com/@mgfsdev" target="_blank" rel="noopener noreferrer" className="icon-btn youtube-btn">
              <YoutubeIcon className="icon-sm" />
            </a>
          </div>
          <a href="/cv.pdf" download="Renji_Jenkins_CV.pdf" className="btn btn-primary" onClick={() => setIsOpen(false)}>
            <DownloadIcon className="icon-sm" /> Download CV
          </a>
        </div>
      )}
    </header>
  );
}
