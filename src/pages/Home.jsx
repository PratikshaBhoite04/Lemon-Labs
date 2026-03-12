import Hero from "../components/Hero";
import HeroMedia from "../components/HeroMedia";
import FeaturedProjects from "../components/FeaturedProjects";
import Clients from "../components/Clients";
import Services from "../components/Services";
import WhatClientsSay from "../components/WhatClientsSay";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroMedia />
       <FeaturedProjects />
       < Clients/>
       <Services />
       <WhatClientsSay />
       <Contact />
       
    </>
  );
};

export default Home;