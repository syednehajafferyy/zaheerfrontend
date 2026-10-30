"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/seeds", label: "Our Seeds" },
  { href: "/#process", label: "Our Process" },
  { href: "/#contact", label: "Contact" },
];

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
    <path d="M3 9h12M10 4l5 5-5 5" />
  </svg>
);

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    setOpen(false);
    setHash(window.location.hash);
  }, [path]);

  const active = (h: string) =>
    h === "/" ? path === "/" && !hash
    : h.startsWith("/#") ? path === "/" && hash === h.slice(1)
    : path.startsWith(h);

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-white shadow-sm">
        <div className="flex h-[60px] items-center justify-between pl-5 pr-2">
          <Link href="/" aria-label="Zaheer Seed Corporation home"><Logo /></Link>

          <nav className="hidden items-center gap-9 text-[15px] md:flex" aria-label="Main">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setHash(l.href.startsWith("/#") ? l.href.slice(1) : "")}
                className={`navlink transition-colors ${active(l.href) ? "text-leaf" : "text-ink hover:text-leaf"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link href="/#contact" className="btn hidden gap-3 bg-leaf pr-3 text-white hover:bg-forest md:inline-flex">
            Contact Us <Arrow />
          </Link>

          <button
            className="mr-2 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span className={`h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>

        <div className={`grid transition-[grid-template-rows] duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1 px-5 pb-5 pt-1">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => {
                    setOpen(false);
                    setHash(l.href.startsWith("/#") ? l.href.slice(1) : "");
                  }}
                  className={`py-2 text-lg ${active(l.href) ? "text-leaf" : ""}`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => {
                  setOpen(false);
                  setHash("contact");
                }}
                className="btn mt-2 gap-3 bg-leaf text-white"
              >
                Contact Us <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

