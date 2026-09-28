import SocialShowcase from "@/components/social/SocialShowcase";

// Experimental preview — not linked from the main site.
// Visit /lab/social-marquee directly to test this alternate layout.
// Resize the window: below the `md` breakpoint you get the one-at-a-time
// cycler; at `md` and up you get the full row of cards.
export default function SocialMarqueeLab() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-background px-4 py-24">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Experiment</p>
        <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
          Responsive social showcase
        </h1>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Phone: one icon cycles at a time. Laptop/desktop: the full row, all
          at once — resize the window to see it switch.
        </p>
      </div>

      <SocialShowcase />
    </div>
  );
}
