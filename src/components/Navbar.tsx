import { useState } from "react";
import { navLinks } from "../constants";
import { elLogo, menu, close } from "../assets";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="w-full flex items-center py-4 fixed top-0 z-20 backdrop-blur-md"
      style={{
        backgroundColor: "var(--color-surface)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="w-full flex justify-between items-center max-w-5xl mx-auto px-6">
        <a href="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
          <img src={elLogo} alt="logo" className="w-8 h-8 object-contain" />
          <span className="font-semibold text-base" style={{ color: "var(--color-ink)" }}>
            Elyas Abate
          </span>
        </a>

        {/* Desktop */}
        <ul className="list-none hidden md:flex flex-row gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--color-ink-2)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink-2)")}
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
              style={{ background: "var(--color-surface-3)", color: "var(--color-ink-2)" }}
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "var(--color-surface-3)", color: "var(--color-ink-2)" }}
          >
            {isDark ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 cursor-pointer"
            style={{ filter: isDark ? "invert(1)" : "none" }}
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile menu */}
        {toggle && (
          <div
            className="md:hidden absolute top-16 right-4 min-w-[180px] rounded-xl p-5 z-10"
            style={{ background: "var(--color-surface-3)", border: "1px solid var(--color-border)" }}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm font-medium block transition-colors"
                    style={{ color: "var(--color-ink-2)" }}
                    onClick={() => setToggle(false)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
