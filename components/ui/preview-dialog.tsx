"use client";

import { useId, useRef } from "react";
import type { ReactNode } from "react";
import { Button, ButtonLink } from "./button";
import type { ButtonVariant } from "./button";

type PreviewDialogProps = {
  title: string;
  description: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

export function PreviewDialog({
  title,
  description,
  variant = "plain",
  className,
  children,
}: PreviewDialogProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  return (
    <>
      <Button
        variant={variant}
        className={className}
        onClick={() => dialog.current?.showModal()}
      >
        {children}
      </Button>
      <dialog
        ref={dialog}
        aria-labelledby={titleId}
        className="m-auto w-[min(520px,calc(100%-40px))] rounded-2xl border border-luma-divider bg-white p-8 text-left font-sans text-base/[1.6] whitespace-normal text-luma-ink shadow-[0_24px_80px_#171b2c3d] backdrop:bg-luma-ink/50"
      >
        <h2
          id={titleId}
          className="mb-5 font-display text-[28px]/9 font-extrabold tracking-[-.5px] normal-case text-luma-ink"
        >
          {title}
        </h2>
        <p className="mb-5">{description}</p>
        <p className="mb-5 text-sm/[1.6] text-luma-muted">
          This is a local demonstration. Enrollment and account services are not
          connected.
        </p>
        <ButtonLink
          href="#contact"
          className="w-full"
          onClick={() => dialog.current?.close()}
        >
          Get in touch
        </ButtonLink>
        <form method="dialog" className="mt-3">
          <Button type="submit" variant="secondary" className="w-full">
            Close preview
          </Button>
        </form>
      </dialog>
    </>
  );
}
