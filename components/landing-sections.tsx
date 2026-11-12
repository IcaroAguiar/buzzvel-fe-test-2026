import Image from "next/image";
import { ContactForm } from "./contact-form";
import { PreviewDialog } from "./preview-dialog";
import { ArrowIcon, ClockIcon, MessageIcon, StarIcon } from "./icons";
import heroPhoto from "../public/images/hero.webp";
import coursePhoto from "../public/images/course.webp";
import learnerAvatars from "../public/images/learners.webp";
import alexAvatar from "../public/images/alex.webp";
import communityCollage from "../public/images/community.webp";
import ctaAvatars from "../public/images/cta-learners.webp";

const categories = [
  {
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
  },
  {
    number: "02",
    title: "Technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
  },
  {
    number: "03",
    title: "Business",
    description:
      "Develop practical skills for better decisions and stronger teams.",
  },
  {
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
  },
];

const steps = [
  {
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    shape: "focus",
  },
  {
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who actually use these skills.",
    shape: "experience",
  },
  {
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    shape: "practice",
  },
];

export function Hero() {
  return (
    <section className="hero warm-surface" aria-labelledby="hero-title">
      <div className="section-container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Learn at your own pace</p>
          <h1 id="hero-title">Build skills that actually move you forward.</h1>
          <p className="subtitle">
            Practical courses taught by people who do the work every day. Learn
            design, technology, business and more — one focused lesson at a
            time.
          </p>
          <div className="button-row">
            <a className="button button-primary" href="#courses">
              Explore courses
            </a>
            <a className="button button-secondary" href="#how-it-works">
              See how it works
            </a>
          </div>
          <div className="learner-proof">
            <Image src={learnerAvatars} alt="" width={74} height={32} />
            <p>
              <strong>Trusted by 24,000+</strong> learners
            </p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-circle" aria-hidden="true" />
          <div className="hero-backdrop" aria-hidden="true" />
          <Image
            className="hero-photo"
            src={heroPhoto}
            alt="A learner focused on a lesson at their laptop"
            width={500}
            height={520}
            sizes="(max-width: 767px) 90vw, (max-width: 1100px) 44vw, 500px"
            preload
          />
          <div className="course-badge">
            <strong>120+</strong>
            <span>expert-led courses</span>
          </div>
          <div className="rating-badge">
            <span className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} />
              ))}
            </span>
            <span>4.9 avg rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Categories() {
  return (
    <section
      id="courses"
      className="categories section-padding"
      aria-labelledby="categories-title"
    >
      <div className="section-container">
        <div className="section-heading">
          <p className="eyebrow">Find your next skill</p>
          <h2 id="categories-title">Learn something worth knowing.</h2>
          <p className="subtitle">
            Short, practical courses designed around skills you can put to work
            immediately.
          </p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.title}>
              <span className="category-number">{category.number}</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <PreviewDialog
                title={category.title}
                description={category.description}
                className="text-button"
              >
                Explore <span className="sr-only">{category.title}</span>
                <ArrowIcon />
              </PreviewDialog>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedCourse() {
  return (
    <section
      id="featured-course"
      className="featured section-padding"
      aria-labelledby="featured-title"
    >
      <div className="section-container featured-grid">
        <div className="featured-visual">
          <Image
            src={coursePhoto}
            alt="A designer exploring materials and product concepts at a workbench"
            width={538}
            height={408}
            sizes="(max-width: 767px) 90vw, 45vw"
          />
          <span>Featured course</span>
        </div>
        <div className="featured-copy">
          <p className="eyebrow">Most popular this month</p>
          <h2 id="featured-title">Designing products people understand.</h2>
          <p className="subtitle">
            Learn how to turn complex workflows into simple, intentional product
            experiences through research, structure and thoughtful interaction
            design.
          </p>
          <p className="instructor">with Maya Chen · Senior Product Designer</p>
          <ul className="course-facts" aria-label="Course details">
            <li>8 lessons</li>
            <li>2h 40min</li>
            <li>Intermediate</li>
          </ul>
          <div className="button-row">
            <PreviewDialog
              title="Designing products people understand."
              description="8 lessons · 2h 40min · Intermediate. Learn product design with Maya Chen through research, structure and thoughtful interaction design."
              className="button button-yellow"
            >
              View course
            </PreviewDialog>
            <a className="featured-link" href="#courses">
              Browse all courses <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="how-it-works section-padding warm-surface"
      aria-labelledby="how-title"
    >
      <div className="section-container">
        <div className="centered-heading">
          <p className="eyebrow">How Luma works</p>
          <h2 id="how-title">Less browsing. More learning.</h2>
        </div>
        <ol className="steps-grid">
          {steps.map((step, index) => (
            <li key={step.title}>
              <div className={`step-shape ${step.shape}`} aria-hidden="true">
                <span />
              </div>
              <p className="step-number">
                Step <span className="desktop-step">01</span>
                <span className="mobile-step">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Testimonial() {
  return (
    <section
      className="testimonial section-padding"
      aria-label="Learner testimonial and Luma in numbers"
    >
      <div className="section-container testimonial-grid">
        <figure>
          <span className="quote-mark" aria-hidden="true">
            ″
          </span>
          <blockquote>
            The lessons are short enough to fit into my week, but detailed
            enough that I actually leave with something I can use.
          </blockquote>
          <figcaption>
            <Image src={alexAvatar} alt="" width={48} height={48} />
            <div>
              <strong>Alex Morgan</strong>
              <span>Product Manager</span>
            </div>
          </figcaption>
        </figure>
        <dl className="stats">
          <div>
            <dt>active learners</dt>
            <dd>24K+</dd>
          </div>
          <div>
            <dt>expert-led courses</dt>
            <dd>120+</dd>
          </div>
          <div>
            <dt>complete their first course</dt>
            <dd>92%</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export function Community() {
  return (
    <section
      id="community"
      className="community section-padding warm-surface"
      aria-labelledby="community-title"
    >
      <div className="section-container community-grid">
        <div>
          <p className="eyebrow">The people</p>
          <h2 id="community-title">
            Meet international students &amp; teachers
          </h2>
          <p className="subtitle">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
            senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
            facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
            urna, faucibus aenean lorem faucibus integer.
          </p>
          <a href="#contact" className="button button-secondary">
            Explore teachers and students
          </a>
        </div>
        <Image
          className="community-collage"
          src={communityCollage}
          alt="A collage of students and teachers studying, creating and learning together around the world"
          width={1042}
          height={1027}
          sizes="(max-width: 767px) 90vw, 45vw"
        />
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="contact section-padding"
      aria-labelledby="contact-title"
    >
      <div className="section-container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Get in touch</h2>
          <p className="subtitle">
            Have a question? We’re here to help. Whether you’re looking for the
            right course, learning with your team or interested in teaching with
            Luma, we’d love to hear from you.
          </p>
          <div className="contact-methods">
            <div>
              <span className="contact-icon">
                <MessageIcon />
              </span>
              <p>
                Email<a href="mailto:contact@luma.com">contact@luma.com</a>
              </p>
            </div>
            <div>
              <span className="contact-icon">
                <ClockIcon />
              </span>
              <p>
                Response Time<span>Up to 24 hours on business days</span>
              </p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section
      className="final-cta section-padding"
      aria-labelledby="final-title"
    >
      <div className="cta-decorations" aria-hidden="true" />
      <div className="section-container">
        <Image src={ctaAvatars} alt="" width={140} height={42} />
        <h2 id="final-title">What will you learn next?</h2>
        <p className="subtitle">Start with one course. Build from there.</p>
        <div className="button-row">
          <a className="button button-primary" href="#courses">
            Explore all courses
          </a>
          <a className="button button-secondary" href="#contact">
            Join Luma
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const demoDestinations: Readonly<Record<string, string>> = {
    Careers:
      "Job listings are not included in this single-page demonstration. Get in touch to ask about the sample platform.",
    Journal:
      "Journal articles are not included in this single-page demonstration.",
    Terms:
      "Legal documents are not included in this recruitment demonstration. This preview is not a terms-of-service agreement.",
    Privacy:
      "A privacy policy is not included in this recruitment demonstration. The local contact preview does not transmit or persist your input.",
  };
  const groups = [
    {
      title: "Explore",
      links: [
        { label: "Courses", href: "#featured-course" },
        { label: "Categories", href: "#courses" },
        { label: "Instructors", href: "#community" },
        { label: "For Teams", href: "#contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#how-it-works" },
        { label: "Careers", href: "#contact" },
        { label: "Journal", href: "#community" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#contact" },
        { label: "Contact", href: "#contact" },
        { label: "Terms", href: "#contact" },
        { label: "Privacy", href: "#contact" },
      ],
    },
  ];
  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-grid">
          <div>
            <a className="wordmark" href="#top" aria-label="Luma home">
              luma.
            </a>
            <p>
              Practical learning for curious <br />
              people.
            </p>
          </div>
          {groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => {
                  const description = demoDestinations[link.label];
                  return (
                    <li key={link.label}>
                      {description ? (
                        <PreviewDialog
                          title={link.label}
                          description={description}
                          className="footer-preview"
                        >
                          {link.label}
                        </PreviewDialog>
                      ) : (
                        <a href={link.href}>{link.label}</a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>
        <p className="copyright">© 2026 Luma Learning</p>
      </div>
    </footer>
  );
}
