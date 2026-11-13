import { SiteHeader } from "../components/landing/site-header";
import { Categories } from "../components/landing/categories";
import { Community } from "../components/landing/community";
import { Contact } from "../components/landing/contact";
import { FeaturedCourse } from "../components/landing/featured-course";
import { FinalCta } from "../components/landing/final-cta";
import { Footer } from "../components/landing/site-footer";
import { Hero } from "../components/landing/hero";
import { HowItWorks } from "../components/landing/how-it-works";
import { Testimonial } from "../components/landing/testimonial";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="main">
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <Community />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
