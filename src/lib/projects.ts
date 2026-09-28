export type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  tech: string[];
  href: string;
};

// TODO: replace with your real projects (title, description, tech, link).
export const projects: Project[] = [
  {
    id: "ai-parking",
    index: "01",
    title: "AI Parking System",
    description:
      "Smart parking solution with ANPR, real-time availability and automated payments.",
    tech: ["AI", "IoT", "Next.js", "PostgreSQL"],
    href: "#",
  },
  {
    id: "fintrack",
    index: "02",
    title: "FinTrack",
    description: "Personal finance tracker with advanced analytics and AI insights.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "#",
  },
  {
    id: "studyflow",
    index: "03",
    title: "StudyFlow AI",
    description: "AI-powered learning platform that generates personalized study plans.",
    tech: ["AI", "Python", "FastAPI"],
    href: "#",
  },
];
