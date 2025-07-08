import Skills from "@/components/ui/skills";
import About from "@/components/ui/about";
import Hero from "@/components/ui/hero";
import Navigation from "@/components/ui/navigation";
import React from "react";
import Experience from "@/components/ui/experience";
import Work from "@/components/ui/work";
import Testimonial from "@/components/ui/testimonial";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";



const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navigation />
      <Hero />
      <About />
      <Skills/>
      <Experience />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
};

export default page;
