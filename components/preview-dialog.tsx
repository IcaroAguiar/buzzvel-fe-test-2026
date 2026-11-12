"use client";

import { useId, useRef } from "react";
import type { ReactNode } from "react";

type PreviewDialogProps = {
  title: string;
  description: string;
  className: string;
  children: ReactNode;
};

export function PreviewDialog({
  title,
  description,
  className,
  children,
}: PreviewDialogProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  return (
    <>
      <button
        className={className}
        type="button"
        onClick={() => dialog.current?.showModal()}
      >
        {children}
      </button>
      <dialog ref={dialog} className="course-dialog" aria-labelledby={titleId}>
        <h2 id={titleId}>{title}</h2>
        <p>{description}</p>
        <p className="dialog-note">
          This is a local demonstration. Enrollment and account services are not
          connected.
        </p>
        <a
          className="button button-primary"
          href="#contact"
          onClick={() => dialog.current?.close()}
        >
          Get in touch
        </a>
        <form method="dialog">
          <button className="button button-secondary">Close preview</button>
        </form>
      </dialog>
    </>
  );
}
