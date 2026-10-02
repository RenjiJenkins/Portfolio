import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDir);
  
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const fullPath = path.join(contentDir, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug: file.replace(/\.md$/, ''),
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || '',
        tags: data.tags || [],
        content
      } as BlogPost;
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
    
  return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
  const fullPath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || '',
    tags: data.tags || [],
    content
  } as BlogPost;
}
