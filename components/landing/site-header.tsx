"use client";

import { useEffect, useRef, useState } from "react";
import { PreviewDialog } from "../ui/preview-dialog";

import { Container } from "../ui/container";
import { Button, ButtonLink } from "../ui/button";

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
      <a
        className="absolute -top-25 left-4 z-20 rounded-lg bg-white px-5 py-3 focus:top-3"
        href="#main"
      >
        Skip to content
      </a>
      <header
        className="relative z-5 border-b border-luma-divider bg-luma-paper"
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
        <Container className="flex h-17 items-center justify-between gap-8 lg:h-[69px]">
          <a
            className="font-display text-[22px]/7 font-extrabold tracking-[-.8px]"
            href="#top"
            aria-label="Luma home"
            onClick={closeMenu}
          >
            luma.
          </a>
          <Button
            variant="plain"
            ref={toggle}
            type="button"
            className="-mr-0.5 p-2.5 text-luma-ink lg:hidden"
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
          </Button>
          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={`absolute inset-x-0 top-[69px] items-center gap-6 border-b border-luma-divider bg-luma-paper px-5 py-6 text-sm text-luma-muted shadow-[0_12px_24px_#171b2c1a] lg:static lg:ml-15 lg:flex lg:flex-1 lg:justify-between lg:gap-5 lg:border-0 lg:p-0 lg:shadow-none wide:ml-[305px] wide:gap-[30px] ${menuOpen ? "grid" : "hidden"}`}
          >
            <div className="grid items-center gap-3 whitespace-nowrap lg:flex lg:gap-5 wide:gap-8">
              {navigation.map((link) => (
                <a
                  className="flex min-h-11 items-center py-2 hover:underline lg:min-h-0 lg:py-0"
                  href={link.href}
                  key={link.label}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-between gap-6 whitespace-nowrap">
              <PreviewDialog
                title="Log in"
                description="Account access is outside this single-page demonstration. No login credentials are collected."
                className="min-h-11 lg:min-h-0"
              >
                Log in
              </PreviewDialog>
              <ButtonLink compact href="#courses" onClick={closeMenu}>
                Start learning
              </ButtonLink>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
}
