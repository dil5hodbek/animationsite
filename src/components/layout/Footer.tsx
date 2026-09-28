import { socials } from "@/lib/socials";
import { projects } from "@/lib/projects";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("http") || l.href.startsWith("mailto") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
          {/* brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <a href="#home" className="text-gradient text-2xl font-bold">
              D
            </a>
            <p className="mt-4 max-w-[220px] text-sm text-muted">
              Building software that solves real problems.
            </p>
          </div>

          <FooterColumn title="Navigation" links={navigation} />
          <FooterColumn
            title="Projects"
            links={projects.map((p) => ({ label: p.title, href: p.href }))}
          />
          <FooterColumn
            title="Connect"
            links={socials.map((s) => ({ label: s.name, href: s.href }))}
          />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Dilshodbek. All rights reserved.</p>
          <p>Designed &amp; developed by Dilshodbek.</p>
          <a
            href="#home"
            className="glass flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
