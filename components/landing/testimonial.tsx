import Image from "next/image";
import { Container } from "../ui/container";
import alexAvatar from "../../public/images/alex.webp";
import quoteMark from "../../public/images/quote.png";

export function Testimonial() {
  return (
    <section
      className="py-15 md:py-25"
      aria-label="Learner testimonial and Luma in numbers"
    >
      <Container className="grid grid-cols-1 items-center gap-16 md:grid-cols-[minmax(0,1fr)_250px] md:gap-10 wide:grid-cols-[minmax(0,1fr)_385px] wide:gap-20">
        <figure>
          <Image
            src={quoteMark}
            alt=""
            width={32}
            height={32}
            className="mb-4"
          />
          <blockquote className="mb-6 max-w-[600px] font-display text-[22px]/8 font-semibold tracking-[-.55px] md:mb-8 md:text-[30px]/11 md:tracking-[-.75px]">
            The lessons are short enough to fit into my week, but detailed
            enough that I actually leave with something I can use.
          </blockquote>
          <figcaption className="flex items-center gap-3 text-sm md:gap-4">
            <Image
              className="rounded-full"
              src={alexAvatar}
              alt=""
              width={48}
              height={48}
            />
            <div>
              <strong className="block text-sm font-bold md:text-base">
                Alex Morgan
              </strong>
              <span className="block text-xs text-luma-muted md:text-sm">
                Product Manager
              </span>
            </div>
          </figcaption>
        </figure>
        <dl className="flex flex-row justify-between gap-3 md:flex-col md:gap-6 md:border-l md:border-luma-border md:pl-12">
          {[
            { value: "24K+", label: "active learners" },
            { value: "120+", label: "expert-led courses" },
            { value: "92%", label: "complete their first course" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-1 flex-col-reverse justify-end"
            >
              <dt className="text-sm/6 text-luma-muted">{stat.label}</dt>
              <dd className="font-display text-[40px]/12 font-extrabold tracking-[-.96px] text-luma-blue md:text-[64px]/[70px] md:tracking-[-1.92px] max-[23.375rem]:text-[28px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
