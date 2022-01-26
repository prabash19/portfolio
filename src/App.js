import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
