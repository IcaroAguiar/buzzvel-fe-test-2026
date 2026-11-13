import { Container } from "../ui/container";
import { Eyebrow, SectionHeading } from "../ui/section-heading";
import { ButtonLink } from "../ui/button";
import { getImageProps } from "next/image";
import communityDesktop from "../../public/images/community.webp";
import communityMobile from "../../public/images/community-mobile.png";

export function Community() {
  const alt =
    "A collage of students and teachers studying, creating and learning together around the world";
  const { props: desktop } = getImageProps({
    src: communityDesktop,
    alt,
    sizes: "45vw",
  });
  const { props: mobile } = getImageProps({
    src: communityMobile,
    alt,
    sizes: "90vw",
  });
  return (
    <section
      id="community"
      className="py-15 md:py-25 bg-luma-paper"
      aria-labelledby="community-title"
    >
      <Container className="grid grid-cols-1 items-center gap-0 md:grid-cols-2 md:gap-10 wide:grid-cols-[minmax(0,530px)_minmax(0,530px)] wide:gap-15">
        <div>
          <Eyebrow>The people</Eyebrow>
          <SectionHeading id="community-title" className="mb-6 md:mb-8">
            Meet international students &amp; teachers
          </SectionHeading>
          <p className="mb-6 text-base/[26px] text-luma-ink md:mb-8 md:text-lg/7 md:text-luma-muted">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
            senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
            facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
            urna, faucibus aenean lorem faucibus integer.
          </p>
          <ButtonLink
            href="#contact"
            variant="secondary"
            className="px-4 text-sm md:px-7"
          >
            Explore teachers and students
          </ButtonLink>
        </div>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={desktop.srcSet}
            sizes={desktop.sizes}
            width={1042}
            height={1027}
          />
          <img {...mobile} alt={alt} className="block h-auto w-full" />
        </picture>
      </Container>
    </section>
  );
}
