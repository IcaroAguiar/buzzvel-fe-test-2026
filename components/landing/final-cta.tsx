import Image from "next/image";
import { Container } from "../ui/container";
import { ButtonLink } from "../ui/button";
import ctaAvatars from "../../public/images/cta-learners.webp";

export function FinalCta() {
  return (
    <section
      className="relative overflow-hidden bg-luma-cream text-center py-15 md:py-25"
      aria-labelledby="final-title"
    >
      <div
        className="pointer-events-none absolute inset-0 hidden bg-[url(/cta-decorations.svg)] bg-cover bg-center md:block"
        aria-hidden="true"
      />
      <Container className="relative">
        <Image
          className="mx-auto mb-6 block"
          src={ctaAvatars}
          alt=""
          width={140}
          height={42}
        />
        <h2
          id="final-title"
          className="mb-4 font-display text-4xl/10 font-extrabold tracking-[-.96px] md:text-[56px]/16 md:tracking-[-1.68px]"
        >
          What will you learn next?
        </h2>
        <p className="mb-8 text-base/[26px] text-luma-muted md:text-lg/7 md:mb-10">
          Start with one course. Build from there.
        </p>
        <div className="flex flex-col items-stretch gap-3 md:flex-row md:flex-wrap md:items-center mx-auto max-w-[362px] md:max-w-none md:justify-center">
          <ButtonLink variant="primary" href="#courses">
            Explore all courses
          </ButtonLink>
          <ButtonLink variant="secondary" href="#contact">
            Join Luma
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
