"use client";

import { useEffect, useRef, useState } from "react";
import { PreviewDialog } from "./preview-dialog";

const navigation = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#contact" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#how-it-works" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header
        className="site-header"
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
        }}
        onKeyDown={(event) => {
          if (
            event.key === "Escape" &&
            menuOpen &&
            !(
              event.target instanceof Element &&
              event.target.closest("dialog[open]")
            )
          ) {
            closeMenu();
            toggle.current?.focus();
          }
        }}
      >
        <div className="section-container header-inner">
          <a
            className="wordmark"
            href="#top"
            aria-label="Luma home"
            onClick={closeMenu}
          >
            luma.
          </a>
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d={
                  menuOpen ? "m6 6 12 12M6 18 18 6" : "M3 6h18M3 12h18M3 18h18"
                }
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={`navigation ${menuOpen ? "navigation-open" : ""}`}
          >
            <div className="navigation-links">
              {navigation.map((link) => (
                <a href={link.href} key={link.label} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="navigation-actions">
              <PreviewDialog
                title="Log in"
                description="Account access is outside this single-page demonstration. No login credentials are collected."
                className="navigation-preview"
              >
                Log in
              </PreviewDialog>
              <a
                href="#courses"
                className="button button-primary"
                onClick={closeMenu}
              >
                Start learning
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
