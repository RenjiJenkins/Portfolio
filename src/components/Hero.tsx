'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DownloadIcon, SparklesIcon, CopyIcon, CheckIcon, ServerIcon, GamepadIcon, CodeIcon } from './Icons';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "renji.jenkins@mail.mcgill.ca";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="hero-section">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      
      <div className="hero-container">
        {/* Availability Badge */}
        <div className="status-pill">
          <span className="status-dot"></span>
          <span className="status-text">Seeking Software Engineering Co-op & Internship Opportunities</span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title">
          Hi, I&apos;m <span className="text-gradient">Renji Jenkins</span>
        </h1>

        <h2 className="hero-subtitle">
          Software Engineering Co-op Student at <span className="highlight-mcgill">McGill University</span>
        </h2>

        <p className="hero-bio">
          Passionate developer creating full-stack web platforms, machine learning algorithms, Unity games, and self-hosted cloud infrastructure on my private 16TB Synology NAS.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary btn-glow">
            <CodeIcon className="icon-sm" />
            <span>Explore Projects</span>
          </a>
          <Link href="/blog" className="btn btn-secondary">
            <SparklesIcon className="icon-sm" />
            <span>Read Reflections</span>
          </Link>
          <a href="/cv.pdf" download="Renji_Jenkins_CV.pdf" className="btn btn-outline">
            <DownloadIcon className="icon-sm" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Quick Email Copy Bar */}
        <div className="email-copy-bar glass">
          <span className="email-label">Get in touch:</span>
          <code className="email-text">{email}</code>
          <button 
            className="copy-btn" 
            onClick={handleCopy}
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <CheckIcon className="icon-sm text-emerald" />
                <span className="text-emerald">Copied!</span>
              </>
            ) : (
              <>
                <CopyIcon className="icon-sm" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Metrics & Highlights Grid */}
        <div className="hero-stats-grid">
          <div className="stat-card glass">
            <div className="stat-icon-wrapper color-blue">
              <CodeIcon className="stat-icon" />
            </div>
            <div className="stat-info">
              <div className="stat-value">McGill Co-op</div>
              <div className="stat-label">B.Eng. Software Engineering</div>
            </div>
          </div>

          <div className="stat-card glass">
            <div className="stat-icon-wrapper color-purple">
              <ServerIcon className="stat-icon" />
            </div>
            <div className="stat-info">
              <div className="stat-value">16TB NAS Cloud</div>
              <div className="stat-label">Self-Hosted Docker Infrastructure</div>
            </div>
          </div>

          <div className="stat-card glass">
            <div className="stat-icon-wrapper color-red">
              <GamepadIcon className="stat-icon" />
            </div>
            <div className="stat-info">
              <div className="stat-value">@mgfsdev</div>
              <div className="stat-label">YouTube Game Dev & Streaming</div>
            </div>
          </div>

          <div className="stat-card glass">
            <div className="stat-icon-wrapper color-green">
              <SparklesIcon className="stat-icon" />
            </div>
            <div className="stat-info">
              <div className="stat-value">C#, Python, React</div>
              <div className="stat-label">C++, TypeScript, Java & ML</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
