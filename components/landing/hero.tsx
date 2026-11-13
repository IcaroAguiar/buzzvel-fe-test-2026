import Image from "next/image";
import { Container } from "../ui/container";
import { Eyebrow } from "../ui/section-heading";
import { ButtonLink } from "../ui/button";
import { StarIcon } from "../icons";
import heroPhoto from "../../public/images/hero.jpg";
import learnerAvatars from "../../public/images/learners.webp";

export function Hero() {
  return (
    <section
      className="overflow-hidden py-15 md:py-25 bg-luma-paper"
      aria-labelledby="hero-title"
    >
      <Container className="flex flex-col-reverse items-stretch gap-10 md:grid md:grid-cols-2 md:items-center md:gap-12 wide:grid-cols-[minmax(0,540px)_500px] wide:gap-20">
        <div className="self-stretch md:self-start">
          <Eyebrow>Learn at your own pace</Eyebrow>
          <h1
            id="hero-title"
            className="mb-7 font-display text-[40px]/11 font-extrabold tracking-[-1.2px] md:mb-6 md:text-5xl/[1.1] md:tracking-[-1.92px] wide:text-[64px] max-[23.375rem]:text-4xl/10"
          >
            Build skills that actually move you forward.
          </h1>
          <p className="mb-8 max-w-[480px] text-base/[26px] text-luma-muted md:text-lg/7">
            Practical courses taught by people who do the work every day. Learn
            design, technology, business and more — one focused lesson at a
            time.
          </p>
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:flex-wrap md:items-center mb-6 md:mb-8">
            <ButtonLink variant="primary" href="#courses">
              Explore courses
            </ButtonLink>
            <ButtonLink variant="secondary" href="#how-it-works">
              See how it works
            </ButtonLink>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-luma-muted md:justify-start md:gap-[18px] max-[23.375rem]:gap-2">
            <Image src={learnerAvatars} alt="" width={74} height={32} />
            <p className="whitespace-nowrap max-[23.375rem]:text-xs">
              <strong className="font-bold text-luma-ink">
                Trusted by 24,000+
              </strong>{" "}
              learners
            </p>
          </div>
        </div>
        <div className="relative ml-2 aspect-[346/380] w-[calc(100%-16px)] md:ml-0 md:aspect-auto md:h-[450px] md:w-full wide:h-[520px] wide:w-[500px]">
          <div
            className="absolute bottom-2.5 -left-[18px] size-16 rounded-full bg-luma-pale md:bottom-3 md:-left-[45px] md:size-26"
            aria-hidden="true"
          />
          <div
            className="absolute inset-[24px_-18px_14px_24px] rounded-2xl bg-luma-peach md:inset-[24px_-16px_28px_35px] md:rounded-[18px] wide:right-[-39px]"
            aria-hidden="true"
          />
          <Image
            className="relative z-1 block size-full rounded-2xl object-cover md:rounded-3xl"
            src={heroPhoto}
            alt="A learner focused on a lesson at their laptop"
            quality={90}
            fill
            sizes="(max-width: 767px) 90vw, (max-width: 1100px) 44vw, 500px"
            preload
          />
          <div className="absolute top-1.5 -left-2 z-2 flex items-center gap-3 rounded-[14px] bg-white px-4 py-3 text-sm/6 whitespace-nowrap shadow-[0_8px_24px_#171b2c14] md:top-4 md:-left-[22px] max-[23.375rem]:gap-2 max-[23.375rem]:px-3 max-[23.375rem]:py-2.5 max-[23.375rem]:text-xs">
            <strong className="rounded-lg bg-luma-pale px-[5px] py-1 text-luma-blue">
              120+
            </strong>
            <span>expert-led courses</span>
          </div>
          <div className="absolute right-[-18px] bottom-9 z-2 flex items-center gap-3 rounded-[14px] bg-white px-4 py-3 text-sm/6 whitespace-nowrap shadow-[0_8px_24px_#171b2c14] md:right-[-15px] wide:right-[-57px] max-[23.375rem]:gap-2 max-[23.375rem]:px-3 max-[23.375rem]:py-2.5 max-[23.375rem]:text-xs">
            <span className="flex gap-[3px] text-[#f5c941]">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} />
              ))}
            </span>
            <span>4.9 avg rating</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
