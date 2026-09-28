import SocialCycler from "./SocialCycler";

// One moving showcase for every screen size. SocialCycler itself switches
// its window width responsively: full-bleed edge-to-edge on phone (~3 icons
// visible), a fixed 792px window on tablet/desktop (~6 icons visible) — same
// drift + arrow-controlled motion throughout, just a wider viewing window.
export default function SocialShowcase() {
  return <SocialCycler />;
}
