import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import NasLab from "../components/NasLab";
import BlogPreview from "../components/BlogPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <NasLab />
      <Experience />
      <BlogPreview />
    </main>
  );
}
