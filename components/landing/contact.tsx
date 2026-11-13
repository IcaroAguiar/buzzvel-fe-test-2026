import { Container } from "../ui/container";
import { Eyebrow, SectionHeading } from "../ui/section-heading";
import { ContactForm } from "./contact-form";
import { MessageIcon, ClockIcon } from "../icons";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-y border-luma-divider/30 py-15 md:py-25"
      aria-labelledby="contact-title"
    >
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 wide:grid-cols-[minmax(0,480px)_minmax(0,540px)] wide:gap-25">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <SectionHeading id="contact-title" className="mb-5">
            Get in touch
          </SectionHeading>
          <p className="text-sm/6 text-luma-muted md:text-lg/7">
            Have a question? We’re here to help. Whether you’re looking for the
            right course, learning with your team or interested in teaching with
            Luma, we’d love to hear from you.
          </p>
          <div className="mt-7 grid gap-3 md:mt-10 md:gap-4">
            <div className="flex items-center gap-4 rounded-xl bg-luma-paper p-4 md:p-5">
              <span className="flex h-11 w-10 shrink-0 items-center justify-center rounded-lg bg-luma-pale text-luma-blue">
                <MessageIcon />
              </span>
              <p className="text-sm/6">
                Email
                <a
                  className="mt-1 block text-luma-blue hover:underline"
                  href="mailto:contact@luma.com"
                >
                  contact@luma.com
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-luma-paper p-4 md:p-5">
              <span className="flex h-11 w-10 shrink-0 items-center justify-center rounded-lg bg-luma-pale text-luma-blue">
                <ClockIcon />
              </span>
              <p className="text-sm/6">
                Response Time
                <span className="mt-1 block text-luma-muted">
                  Up to 24 hours on business days
                </span>
              </p>
            </div>
          </div>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
