import { SiteHeader } from "../components/site-header";
import {
  Categories,
  Community,
  Contact,
  FeaturedCourse,
  FinalCta,
  Footer,
  Hero,
  HowItWorks,
  Testimonial,
} from "../components/landing-sections";

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
