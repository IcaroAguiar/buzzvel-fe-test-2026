"use client";

import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import { Button } from "../ui/button";
import type { ReactNode, FormEvent } from "react";

const fieldClass =
  "w-full min-w-0 rounded-lg border border-luma-border bg-luma-paper px-4 py-3 text-base/[22px] text-luma-ink caret-luma-blue placeholder:text-luma-muted placeholder:opacity-100 md:text-sm";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm/5 font-bold" htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
}

const mobileQuery = "(max-width: 767px)";
function subscribeToViewport(onChange: () => void) {
  const media = window.matchMedia(mobileQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

const messages = {
  en: {
    intro: "Fill out the fields and we will get in touch.",
    name: "Full name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "youremail@example.com",
    question: "Your question",
    questionPlaceholder: "Tell us how we can help...",
    send: "Send message",
    nameError: "Please enter your name.",
    questionError: "Please enter your question.",
    thanks: "Thank you",
    confirmation: "This is a preview. Nothing was saved or sent.",
    reset: "Write another message",
  },
  pt: {
    intro: "Preencha os campos e entraremos em contato.",
    name: "Nome completo",
    namePlaceholder: "Seu nome",
    email: "E-mail",
    emailPlaceholder: "seuemail@exemplo.com",
    question: "Sua dúvida",
    questionPlaceholder: "Conte como podemos ajudar...",
    send: "Enviar mensagem",
    nameError: "Informe seu nome.",
    questionError: "Informe sua dúvida.",
    thanks: "Obrigado",
    confirmation: "Esta é uma demonstração. Nada foi salvo nem enviado.",
    reset: "Escrever outra mensagem",
  },
};

type ContactState = { kind: "editing" } | { kind: "complete"; name: string };

export function ContactForm() {
  const mobile = useSyncExternalStore(
    subscribeToViewport,
    () => window.matchMedia(mobileQuery).matches,
    () => false,
  );
  const copy = mobile ? messages.pt : messages.en;
  const [state, setState] = useState<ContactState>({ kind: "editing" });
  const resetFocusRequested = useRef(false);
  const focusConfirmation = useCallback((element: HTMLDivElement | null) => {
    element?.focus();
  }, []);
  const focusNameOnReset = useCallback((element: HTMLInputElement | null) => {
    if (element && resetFocusRequested.current) {
      element.focus();
      resetFocusRequested.current = false;
    }
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nameField = event.currentTarget.elements.namedItem("contact-name");
    const questionField =
      event.currentTarget.elements.namedItem("contact-question");
    if (
      !(nameField instanceof HTMLInputElement) ||
      !(questionField instanceof HTMLTextAreaElement)
    )
      return;
    const name = nameField.value.trim();
    nameField.setCustomValidity(name ? "" : copy.nameError);
    questionField.setCustomValidity(
      questionField.value.trim() ? "" : copy.questionError,
    );
    if (event.currentTarget.reportValidity())
      setState({ kind: "complete", name });
  }

  return (
    <div
      className="rounded-2xl border border-luma-border p-5 shadow-[0_12px_32px_#171b2c08] md:p-7 wide:p-10"
      lang={mobile ? "pt-BR" : "en"}
    >
      <h3
        className="mb-3 font-display text-xl/7 font-bold tracking-[-.2px]"
        lang="en"
      >
        Contact us
      </h3>
      <p className="mb-6 text-sm/6 text-luma-muted">{copy.intro}</p>
      <noscript>
        <p>
          This demo needs JavaScript for local confirmation. You can use the
          email link instead.
        </p>
      </noscript>
      {state.kind === "complete" ? (
        <div
          className="grid min-h-[420px] content-center gap-6 md:min-h-[396px]"
          role="status"
          tabIndex={-1}
          ref={focusConfirmation}
        >
          <h4 className="font-display text-xl/7 font-bold">
            {copy.thanks}, {state.name}.
          </h4>
          <p className="text-luma-muted">{copy.confirmation}</p>
          <Button
            type="button"
            onClick={() => {
              resetFocusRequested.current = true;
              setState({ kind: "editing" });
            }}
          >
            {copy.reset}
          </Button>
        </div>
      ) : (
        <form className="grid gap-6" onSubmit={submit}>
          {/* Omit name attributes so a native pre-hydration GET cannot serialize personal input. */}
          <Field id="contact-name" label={copy.name}>
            <input
              id="contact-name"
              className={fieldClass + " h-12"}
              ref={focusNameOnReset}
              autoComplete="name"
              placeholder={copy.namePlaceholder}
              required
              maxLength={100}
              onInput={(event) => event.currentTarget.setCustomValidity("")}
            />
          </Field>
          <Field id="contact-email" label={copy.email}>
            <input
              id="contact-email"
              className={fieldClass + " h-12"}
              type="email"
              autoComplete="email"
              placeholder={copy.emailPlaceholder}
              required
              maxLength={254}
            />
          </Field>
          <Field id="contact-question" label={copy.question}>
            <textarea
              id="contact-question"
              className={
                fieldClass +
                " min-h-[100px] h-[100px] resize-y md:h-30 md:min-h-30"
              }
              placeholder={copy.questionPlaceholder}
              required
              maxLength={2000}
              onInput={(event) => event.currentTarget.setCustomValidity("")}
            />
          </Field>
          <Button type="submit">{copy.send}</Button>
        </form>
      )}
    </div>
  );
}
