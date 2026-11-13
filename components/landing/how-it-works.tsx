import type { ReactNode } from "react";
import { Container } from "../ui/container";
import { Eyebrow, SectionHeading } from "../ui/section-heading";
import styles from "./how-it-works.module.css";
type Step = {
  title: string;
  description: ReactNode;
  shape: string;
  mark: string;
};
const steps: readonly Step[] = [
  {
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    shape: "rounded-full bg-luma-pale",
    mark: "absolute top-2 left-2 size-6 rounded-[7px] bg-luma-blue",
  },
  {
    title: "Learn from experience",
    description: (
      <>
        Follow concise lessons created by professionals who{" "}
        <span className="md:hidden">actually </span>use these skills.
      </>
    ),
    shape: "rotate-12 rounded-lg bg-[#fae4da] md:bg-luma-peach",
    mark: "absolute right-1 bottom-1 size-7 rounded-full bg-[#ff704d]",
  },
  {
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    shape: "rounded-xl bg-luma-cream",
    mark: "absolute bottom-2 left-2 size-5 rounded-full bg-[#e9d659]",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-15 md:py-25 bg-luma-paper"
      aria-labelledby="how-title"
    >
      <Container>
        <div className="text-center">
          <Eyebrow>How Luma works</Eyebrow>
          <SectionHeading id="how-title">
            Less browsing. More learning.
          </SectionHeading>
        </div>
        <ol className="mt-12 mb-0 grid list-none grid-cols-1 gap-18 p-0 md:mt-25 md:mb-7 md:grid-cols-3 md:gap-15">
          {steps.map((step, index) => (
            <li className={styles.step} key={step.title}>
              <div
                className={`relative mb-5 size-14 md:mb-6 ${step.shape}`}
                aria-hidden="true"
              >
                <span className={step.mark} />
              </div>
              <p className="mb-3 text-xs/[18px] font-semibold tracking-[1.2px] text-luma-muted uppercase">
                Step <span className="hidden md:inline">01</span>
                <span className="inline md:hidden">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </p>
              <h3 className="mb-3 font-display text-xl/7 font-bold tracking-[-.2px] md:mb-4">
                {step.title}
              </h3>
              <p className="text-sm/6 text-luma-muted md:text-base/7">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
