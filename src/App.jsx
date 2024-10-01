import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contacts";
import Footer from "./Components/Footer";



const App = () => {
  return (
    <div>
      <Navbar />
<a href="/">       <Hero /> </a>
 <a href="about">     <About /> </a>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
