import Link from 'next/link';
import { getBlogPosts } from '../../lib/blog';
import { SparklesIcon } from '../../components/Icons';

export const metadata = {
  title: "Reflections & Blog | Renji Jenkins",
  description: "Personal engineering reflections, game development insights, and lessons learned by Renji Jenkins."
};

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <main className="container">
      <section className="section" style={{ paddingTop: '8.5rem', minHeight: '80vh' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <Link href="/" className="btn btn-secondary btn-sm">
            &larr; Back to Portfolio
          </Link>
        </div>

        <div className="section-header" style={{ textAlign: 'left', marginLeft: 0, marginBottom: '3rem' }}>
          <div className="section-tag">
            <SparklesIcon className="icon-xs" />
            <span>Reflections & Journal</span>
          </div>
          <h1 className="section-title">
            Engineering Insights & <span className="text-gradient">Reflections</span>
          </h1>
          <p className="section-desc">
            A continuous collection of write-ups on building scalable systems, game design in Unity, self-hosted architecture, and academic research.
          </p>
        </div>
        
        <div className="grid-2">
          {posts.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-preview-card glass">
              <div className="blog-card-meta">
                <span className="blog-date">{post.date}</span>
                <div className="blog-tags">
                  {post.tags?.map(tag => (
                    <span key={tag} className="blog-tag">#{tag}</span>
                  ))}
                </div>
              </div>

              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-excerpt">{post.excerpt}</p>

              <div className="read-more-link">
                <span>Read Full Reflection</span>
                <span className="arrow">→</span>
              </div>
            </Link>
          ))}
          {posts.length === 0 && (
            <div className="glass card" style={{ padding: '3rem', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-secondary)' }}>No blog posts found yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
