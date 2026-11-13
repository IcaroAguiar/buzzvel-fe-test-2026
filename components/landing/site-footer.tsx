import { Container } from "../ui/container";
import { PreviewDialog } from "../ui/preview-dialog";

type FooterLink =
  | { kind: "anchor"; label: string; href: string }
  | { kind: "preview"; label: string; description: string };
type FooterGroup = { title: string; links: readonly FooterLink[] };

const groups: readonly FooterGroup[] = [
  {
    title: "Explore",
    links: [
      { kind: "anchor", label: "Courses", href: "#featured-course" },
      { kind: "anchor", label: "Categories", href: "#courses" },
      { kind: "anchor", label: "Instructors", href: "#community" },
      { kind: "anchor", label: "For Teams", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { kind: "anchor", label: "About", href: "#how-it-works" },
      {
        kind: "preview",
        label: "Careers",
        description:
          "Job listings are not included in this single-page demonstration. Get in touch to ask about the sample platform.",
      },
      {
        kind: "preview",
        label: "Journal",
        description:
          "Journal articles are not included in this single-page demonstration.",
      },
    ],
  },
  {
    title: "Support",
    links: [
      { kind: "anchor", label: "Help Center", href: "#contact" },
      { kind: "anchor", label: "Contact", href: "#contact" },
      {
        kind: "preview",
        label: "Terms",
        description:
          "Legal documents are not included in this recruitment demonstration. This preview is not a terms-of-service agreement.",
      },
      {
        kind: "preview",
        label: "Privacy",
        description:
          "A privacy policy is not included in this recruitment demonstration. The local contact preview does not transmit or persist your input.",
      },
    ],
  },
];

const linkClass =
  "inline-flex min-h-7 items-center text-left hover:underline focus-visible:outline-luma-cream md:min-h-6";

export function Footer() {
  return (
    <footer className="bg-luma-ink pt-10 pb-6 text-sm/6 text-[#a1a2ac] md:pt-18 md:pb-10">
      <Container>
        <div className="mb-10 grid grid-cols-2 gap-x-5 gap-y-8 md:mb-16 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-10 wide:grid-cols-[388px_180px_180px_1fr] wide:gap-15">
          <div className="col-span-2 md:col-span-1">
            <a
              className="mb-2.5 inline-block font-display text-[22px]/7 font-semibold tracking-[-.6px] text-white focus-visible:outline-luma-cream"
              href="#top"
              aria-label="Luma home"
            >
              luma.
            </a>
            <p>
              Practical learning for curious <br className="hidden md:block" />
              people.
            </p>
          </div>
          {groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="mb-4 font-sans text-xs/[18px] font-semibold tracking-[1.2px] text-[#e4e4e9] uppercase md:mt-2">
                {group.title}
              </h2>
              <ul className="m-0 grid list-none gap-2 p-0 md:gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.kind === "anchor" ? (
                      <a href={link.href} className={linkClass}>
                        {link.label}
                      </a>
                    ) : (
                      <PreviewDialog
                        title={link.label}
                        description={link.description}
                        className={linkClass}
                      >
                        {link.label}
                      </PreviewDialog>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="border-t border-luma-muted pt-6 text-center text-[#d5d5dc] md:text-left">
          © 2026 Luma Learning
        </p>
      </Container>
    </footer>
  );
}
