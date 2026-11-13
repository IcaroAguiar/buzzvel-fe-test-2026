import type { ComponentProps } from "react";
import { classes } from "./classes";

export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={classes(
        "mb-5 text-xs/[18px] font-semibold tracking-[1.2px] text-luma-blue uppercase",
        className,
      )}
      {...props}
    />
  );
}

export function SectionHeading({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      className={classes(
        "font-display text-[32px]/9 font-bold tracking-[-.8px] md:text-5xl/14 md:tracking-[-.96px]",
        className,
      )}
      {...props}
    />
  );
}
