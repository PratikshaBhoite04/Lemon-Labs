import Hero from "../components/Hero";
import HeroMedia from "../components/HeroMedia";
import FeaturedProjects from "../components/FeaturedProjects";
import Clients from "../components/Clients";
import Services from "../components/Services";
import WhatClientsSay from "../components/WhatClientsSay";
import Contact from "./Contact";
import ScrollToTop from "../components/ScrollToTop";
import ProcessSection from "../components/ProcessSection";

const Home = () => {
  return (
    <>
    <ScrollToTop />
      <Hero />
      <HeroMedia />
       <FeaturedProjects />
       < Clients/>
       <Services />
       <ProcessSection />
       <WhatClientsSay />
       <Contact />
       
    </>
  );
};

export default Home;