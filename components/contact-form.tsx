"use client";

import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import type { FormEvent } from "react";

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
    <div className="contact-card" lang={mobile ? "pt-BR" : "en"}>
      <h3 lang="en">Contact us</h3>
      <p>{copy.intro}</p>
      <noscript>
        <p>
          This demo needs JavaScript for local confirmation. You can use the
          email link instead.
        </p>
      </noscript>
      {state.kind === "complete" ? (
        <div
          className="contact-confirmation"
          role="status"
          tabIndex={-1}
          ref={focusConfirmation}
        >
          <h4>
            {copy.thanks}, {state.name}.
          </h4>
          <p>{copy.confirmation}</p>
          <button
            className="button button-primary"
            type="button"
            onClick={() => {
              resetFocusRequested.current = true;
              setState({ kind: "editing" });
            }}
          >
            {copy.reset}
          </button>
        </div>
      ) : (
        <form onSubmit={submit}>
          {/* Omit name attributes so a native pre-hydration GET cannot serialize personal input. */}
          <div className="form-field">
            <label htmlFor="contact-name">{copy.name}</label>
            <input
              id="contact-name"
              ref={focusNameOnReset}
              autoComplete="name"
              placeholder={copy.namePlaceholder}
              required
              maxLength={100}
              onInput={(event) => event.currentTarget.setCustomValidity("")}
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">{copy.email}</label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              placeholder={copy.emailPlaceholder}
              required
              maxLength={254}
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-question">{copy.question}</label>
            <textarea
              id="contact-question"
              placeholder={copy.questionPlaceholder}
              required
              maxLength={2000}
              onInput={(event) => event.currentTarget.setCustomValidity("")}
            />
          </div>
          <button className="button button-primary" type="submit">
            {copy.send}
          </button>
        </form>
      )}
    </div>
  );
}
