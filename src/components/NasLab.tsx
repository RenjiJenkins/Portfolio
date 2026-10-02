'use client';

import React from 'react';
import { ServerIcon, YoutubeIcon, GamepadIcon, SparklesIcon, ExternalLinkIcon, CheckIcon } from './Icons';

export default function NasLab() {
  return (
    <section id="nas-lab" className="section nas-lab-section">
      <div className="section-header">
        <div className="section-tag">
          <ServerIcon className="icon-xs" />
          <span>Infrastructure & Creator</span>
        </div>
        <h2 className="section-title">
          Private <span className="text-gradient">Cloud Lab</span> & Game Dev Studio
        </h2>
        <p className="section-desc">
          Bridging system architecture with creative game engineering.
        </p>
      </div>

      <div className="grid-2 nas-lab-grid">
        {/* Synology NAS Card */}
        <div className="glass lab-card">
          <div className="lab-badge-row">
            <span className="lab-status-online">
              <span className="pulse-dot"></span> Online & Operational
            </span>
            <span className="lab-spec">16 TB RAID Storage</span>
          </div>

          <div className="lab-title-row">
            <div className="lab-icon-box color-blue">
              <ServerIcon className="icon-md" />
            </div>
            <div>
              <h3 className="lab-title">Synology NAS Home Lab</h3>
              <p className="lab-subtitle">Custom Docker Cloud & Self-Hosting Hub</p>
            </div>
          </div>

          <p className="lab-description">
            I designed and built my own high-availability home cloud infrastructure using a Synology NAS. It acts as the production host for my full-stack web applications, centralizes 16TB of distributed development assets, and orchestrates containerized services.
          </p>

          <div className="lab-features-list">
            <div className="lab-feature-item">
              <CheckIcon className="icon-xs text-emerald" />
              <span>Containerized Docker workloads & microservices</span>
            </div>
            <div className="lab-feature-item">
              <CheckIcon className="icon-xs text-emerald" />
              <span>Automated Git deployment pipelines & SSL management</span>
            </div>
            <div className="lab-feature-item">
              <CheckIcon className="icon-xs text-emerald" />
              <span>Secure remote VPN tunnel & encrypted offsite snapshots</span>
            </div>
          </div>
        </div>

        {/* YouTube & Game Dev Spotlight */}
        <div className="glass lab-card youtube-spotlight-card">
          <div className="lab-badge-row">
            <span className="lab-status-stream">
              <GamepadIcon className="icon-xs" /> Indie Game Development
            </span>
            <span className="lab-spec">@mgfsdev</span>
          </div>

          <div className="lab-title-row">
            <div className="lab-icon-box color-red">
              <YoutubeIcon className="icon-md" />
            </div>
            <div>
              <h3 className="lab-title">MGFsDev Channel</h3>
              <p className="lab-subtitle">YouTube & Twitch Game Dev Chronicles</p>
            </div>
          </div>

          <p className="lab-description">
            Documenting the process of developing indie games in Unity and C#, including combat systems for <em>The Manifesto</em>, exploring AI-assisted coding methodologies, and sharing game architecture tutorials with the developer community.
          </p>

          <div className="channel-cta-box">
            <a 
              href="https://www.youtube.com/@mgfsdev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-yt-action"
            >
              <YoutubeIcon className="icon-sm" />
              <span>Visit @mgfsdev on YouTube</span>
              <ExternalLinkIcon className="icon-xs" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
