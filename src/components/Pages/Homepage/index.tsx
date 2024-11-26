import BlogSection from "../../Organism/BlogSection";
import ContactForm from "../../Organism/ContactForm";
import Newsletter from "../../Organism/NewsLetter";
import HeroSection from "../../Organism/HeroSection";
import Partners from "../../Organism/Partners";
import Services from "../../Organism/Services";
import SuperPowerSection from "../../Organism/SuperPowerSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Partners />
      <Services />
      <SuperPowerSection />
      <BlogSection />
      <ContactForm />
      <Newsletter />
    </>
  );
}
