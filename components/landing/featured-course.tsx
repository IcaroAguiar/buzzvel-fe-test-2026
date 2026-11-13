import Image from "next/image";
import { Container } from "../ui/container";
import { Eyebrow } from "../ui/section-heading";
import { PreviewDialog } from "../ui/preview-dialog";
import { ArrowIcon } from "../icons";
import coursePhoto from "../../public/images/course.jpg";

export function FeaturedCourse() {
  return (
    <section
      id="featured-course"
      className="bg-luma-blue text-white py-15 md:py-25"
      aria-labelledby="featured-title"
    >
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 wide:grid-cols-[minmax(0,538px)_minmax(0,1fr)] wide:gap-15">
        <div className="relative">
          <Image
            src={coursePhoto}
            alt="A designer exploring materials and product concepts at a workbench"
            className="block aspect-[362/280] w-full rounded-2xl object-cover md:aspect-[538/408]"
            quality={90}
            width={538}
            height={408}
            sizes="(max-width: 767px) 90vw, 45vw"
          />
          <span className="absolute -top-3 -left-3 rounded-md bg-luma-yellow px-3 py-[5px] text-xs/5 font-semibold tracking-[1.2px] text-luma-ink uppercase">
            Featured course
          </span>
        </div>
        <div>
          <Eyebrow className="text-white">Most popular this month</Eyebrow>
          <h2
            id="featured-title"
            className="mb-5 font-display text-[32px]/9 font-bold tracking-[-.8px] md:text-5xl/14 md:tracking-[-.96px]"
          >
            Designing products people understand.
          </h2>
          <p className="text-sm/6 text-[#f1f3ff] md:text-base/7">
            Learn how to turn complex workflows into simple, intentional product
            experiences through research, structure and thoughtful interaction
            design.
          </p>
          <p className="mt-6 text-sm md:mt-7 md:text-base">
            with Maya Chen · Senior Product Designer
          </p>
          <ul
            className="mt-5 mb-7 flex list-none flex-wrap gap-2 p-0 md:mt-6 md:mb-8 md:gap-2.5"
            aria-label="Course details"
          >
            {["8 lessons", "2h 40min", "Intermediate"].map((fact) => (
              <li
                key={fact}
                className="rounded-lg border border-[#a5b5ff] px-3.5 py-[7px] text-sm/[22px]"
              >
                {fact}
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:flex-wrap md:items-center wide:flex-nowrap">
            <PreviewDialog
              title="Designing products people understand."
              description="8 lessons · 2h 40min · Intermediate. Learn product design with Maya Chen through research, structure and thoughtful interaction design."
              variant="yellow"
            >
              View course
            </PreviewDialog>
            <a
              className="inline-flex items-center gap-3 self-center px-2 py-3 text-sm font-bold hover:underline"
              href="#courses"
            >
              Browse all courses <ArrowIcon />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
