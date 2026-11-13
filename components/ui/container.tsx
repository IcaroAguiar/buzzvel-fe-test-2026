import type { ReactNode } from "react";
import { classes } from "./classes";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classes(
        "mx-auto w-full max-w-[1280px] px-5 md:px-10 wide:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
}
