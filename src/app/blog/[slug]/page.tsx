import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getBlogPost, getBlogPosts } from '../../../lib/blog';
import { SparklesIcon } from '../../../components/Icons';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Renji Jenkins`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container">
      <article className="section" style={{ paddingTop: '8.5rem', maxWidth: '850px', margin: '0 auto', minHeight: '85vh' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <Link href="/blog" className="btn btn-secondary btn-sm">
            &larr; Back to All Reflections
          </Link>
        </div>
        
        <div className="glass" style={{ padding: '3.5rem 3rem' }}>
          <div className="section-tag" style={{ marginBottom: '1.25rem' }}>
            <SparklesIcon className="icon-xs" />
            <span>Reflection</span>
          </div>

          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: 1.2, letterSpacing: '-0.03em' }}>
            {post.title}
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Published: {post.date}
            </span>
            <div className="blog-tags">
              {post.tags?.map(tag => (
                <span key={tag} className="tech-tag" style={{ color: '#38bdf8' }}>#{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="markdown-content">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Written by <strong>Renji Jenkins</strong>
            </span>
            <Link href="/blog" className="btn btn-secondary btn-sm">
              Explore More Posts →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
