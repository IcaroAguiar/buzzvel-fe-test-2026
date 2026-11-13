import type { ComponentProps } from "react";
import { classes } from "./classes";

const variants = {
  primary: "border-transparent bg-luma-blue text-white hover:bg-[#2344d8]",
  secondary:
    "border-luma-border bg-white text-luma-ink hover:border-[#a6b6f8] hover:bg-[#f1f3ff]",
  yellow: "border-transparent bg-luma-yellow text-luma-ink hover:bg-[#ffe64f]",
  text: "gap-3 p-0 text-sm/6 font-bold hover:text-luma-blue",
  plain: "border-0 bg-transparent p-0 text-inherit hover:underline",
};

export type ButtonVariant = keyof typeof variants;
type Appearance = {
  variant?: ButtonVariant;
  compact?: boolean;
  className?: string;
};

function appearance({ variant = "primary", compact, className }: Appearance) {
  const filled = variant !== "text" && variant !== "plain";
  return classes(
    "inline-flex items-center justify-center align-middle",
    filled &&
      "gap-2.5 rounded-lg border text-center text-sm/6 font-bold motion-safe:transition-[background-color,border-color] motion-safe:duration-150",
    filled && (compact ? "min-h-11 px-4 py-[9px]" : "min-h-[54px] px-7 py-3.5"),
    variants[variant],
    className,
  );
}

export function Button({
  variant,
  compact,
  className,
  type = "button",
  ...props
}: ComponentProps<"button"> & Appearance) {
  return (
    <button
      type={type}
      className={appearance({ variant, compact, className })}
      {...props}
    />
  );
}

export function ButtonLink({
  variant,
  compact,
  className,
  ...props
}: ComponentProps<"a"> & Appearance & { href: string }) {
  return (
    <a className={appearance({ variant, compact, className })} {...props} />
  );
}
