import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
    </>
  );
}