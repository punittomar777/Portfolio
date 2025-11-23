import { useState } from "react";
import "./App.css";
import { HeroSection } from "./components/hero-section/hero-section";
import { About } from "./components/about/about";
import { Skills } from "./components/skills/skills";
import { Projects } from "./components/work/project";
import { ContactMe } from "./components/contact/contactme";

function App() {
  return (
    <div className="body">
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
