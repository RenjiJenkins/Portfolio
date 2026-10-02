'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MailIcon, GithubIcon, YoutubeIcon, DownloadIcon, CopyIcon, CheckIcon, SparklesIcon } from './Icons';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "renji.jenkins@mail.mcgill.ca";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        {/* Contact Glass Card */}
        <div className="glass contact-card">
          <div className="contact-header">
            <span className="contact-badge">
              <SparklesIcon className="icon-xs" />
              <span>Let&apos;s Connect</span>
            </span>
            <h2 className="contact-title">
              Interested in collaborating or discussing <span className="text-gradient">Co-op Opportunities</span>?
            </h2>
            <p className="contact-desc">
              I am always eager to discuss software engineering internships, novel game projects, or self-hosted systems. Feel free to reach out directly.
            </p>
          </div>

          <div className="contact-actions">
            <a href={`mailto:${email}`} className="btn btn-primary btn-glow">
              <MailIcon className="icon-sm" />
              <span>Send an Email</span>
            </a>
            <button className="btn btn-secondary" onClick={handleCopy}>
              {copied ? (
                <>
                  <CheckIcon className="icon-sm text-emerald" />
                  <span className="text-emerald">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <CopyIcon className="icon-sm" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
            <a href="/cv.pdf" className="btn btn-outline" download>
              <DownloadIcon className="icon-sm" />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="contact-meta-row">
            <div className="contact-meta-item">
              <span className="meta-label">Location:</span>
              <span className="meta-val">Montréal / Québec, Canada</span>
            </div>
            <div className="contact-meta-item">
              <span className="meta-label">University:</span>
              <span className="meta-val">McGill University (B.Eng Software Engineering)</span>
            </div>
            <div className="contact-meta-item">
              <span className="meta-label">Languages:</span>
              <span className="meta-val">English, Français, Español, Bahasa</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-brand">
            <span className="brand-badge">RJ</span>
            <span className="footer-copy">© {new Date().getFullYear()} Renji Jenkins. Built with Next.js & TypeScript.</span>
          </div>

          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
              <GithubIcon className="icon-sm" />
            </a>
            <a href="https://www.youtube.com/@mgfsdev" target="_blank" rel="noopener noreferrer" className="footer-icon-link yt">
              <YoutubeIcon className="icon-sm" />
            </a>
            <a href={`mailto:${email}`} className="footer-icon-link">
              <MailIcon className="icon-sm" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
