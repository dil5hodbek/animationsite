import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import SocialDock from "@/components/social/SocialDock";
import PlaceholderSection from "@/components/sections/PlaceholderSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <PlaceholderSection
        id="about"
        eyebrow="About Me"
        title="The story so far"
        description="Full About section coming next — your bio, photo and story will go here."
      />
      <PlaceholderSection
        id="journey"
        eyebrow="Journey"
        title="2022 → 2026"
        description="Timeline section coming next — education, projects, and milestones."
      />
      <PlaceholderSection
        id="gallery"
        eyebrow="Gallery"
        title="Life beyond code"
        description="Gallery section coming next — travel, lifestyle, and workspace shots."
      />
      <SocialDock />
    </>
  );
}
