import { Container } from "../ui/container";
import { Eyebrow, SectionHeading } from "../ui/section-heading";
import { PreviewDialog } from "../ui/preview-dialog";
import { ArrowIcon } from "../icons";

type Category = { number: string; title: string; description: string };
const categories: readonly Category[] = [
  {
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
  },
  {
    number: "02",
    title: "Technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
  },
  {
    number: "03",
    title: "Business",
    description:
      "Develop practical skills for better decisions and stronger teams.",
  },
  {
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
  },
];

export function Categories() {
  return (
    <section
      id="courses"
      className="py-15 md:py-25"
      aria-labelledby="categories-title"
    >
      <Container>
        <div className="max-w-[600px]">
          <Eyebrow>Find your next skill</Eyebrow>
          <SectionHeading id="categories-title" className="mb-3 max-w-[630px]">
            Learn something worth knowing.
          </SectionHeading>
          <p className="text-base/[26px] text-luma-muted md:text-lg/7">
            Short, practical courses designed around skills you can put to work
            immediately.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 md:gap-5 wide:grid-cols-4">
          {categories.map((category) => (
            <article
              className="flex min-h-[228px] flex-col items-start rounded-2xl border border-luma-border p-6 md:min-h-[264px] md:p-7"
              key={category.title}
            >
              <span className="mb-6 rounded-md bg-luma-pale px-2 py-[3px] text-xs/[18px] font-semibold tracking-[1.2px] text-luma-blue">
                {category.number}
              </span>
              <h3 className="mb-3 font-display text-xl/7 font-bold tracking-[-.2px] whitespace-nowrap md:mb-4">
                {category.title}
              </h3>
              <p className="mb-4 text-sm/6 text-luma-muted md:mb-[18px]">
                {category.description}
              </p>
              <PreviewDialog
                title={category.title}
                description={category.description}
                variant="text"
                className="mt-auto min-h-6"
              >
                Explore <span className="sr-only">{category.title}</span>
                <ArrowIcon className="w-5" />
              </PreviewDialog>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
