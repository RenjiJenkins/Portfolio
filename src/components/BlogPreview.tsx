import React from 'react';
import Link from 'next/link';
import { getBlogPosts } from '../lib/blog';
import { SparklesIcon, ExternalLinkIcon } from './Icons';

export default function BlogPreview() {
  const posts = getBlogPosts().slice(0, 2);

  if (posts.length === 0) return null;

  return (
    <section id="blog-preview" className="section blog-preview-section">
      <div className="section-header">
        <div className="section-tag">
          <SparklesIcon className="icon-xs" />
          <span>Reflections & Thoughts</span>
        </div>
        <div className="title-row-between">
          <div>
            <h2 className="section-title">
              Recent <span className="text-gradient">Reflections</span>
            </h2>
            <p className="section-desc">
              Insights on engineering, self-hosting, game development, and lessons learned.
            </p>
          </div>
          <Link href="/blog" className="btn btn-secondary view-all-btn">
            <span>View All Posts</span>
            <ExternalLinkIcon className="icon-xs" />
          </Link>
        </div>
      </div>

      <div className="grid-2 blog-preview-grid">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-preview-card glass">
            <div className="blog-card-meta">
              <span className="blog-date">{post.date}</span>
              <div className="blog-tags">
                {post.tags?.map((tag) => (
                  <span key={tag} className="blog-tag">#{tag}</span>
                ))}
              </div>
            </div>

            <h3 className="blog-card-title">{post.title}</h3>
            <p className="blog-card-excerpt">{post.excerpt}</p>

            <div className="read-more-link">
              <span>Read article</span>
              <span className="arrow">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
