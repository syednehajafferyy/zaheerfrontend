export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`flex items-center gap-2 font-serif text-xl tracking-tight ${light ? "text-paper" : "text-forest"}`}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor" aria-hidden>
        <circle cx="13" cy="5" r="2.6" /><circle cx="7" cy="11" r="2.6" /><circle cx="19" cy="11" r="2.6" />
        <circle cx="13" cy="17" r="2.6" /><circle cx="13" cy="23" r="1.6" />
      </svg>
      Zaheer Seed
    </span>
  );
}

