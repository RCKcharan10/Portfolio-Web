import React from "react";
import PillPaginationNavbar from "./sections/PillPaginationNavbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';


const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <PillPaginationNavbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
