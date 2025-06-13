import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/Hero";
import { AboutSection } from "./components/About";
import { ProjectsSection } from "./components/Projects";
import { SkillsSection } from "./components/Skills";
import { ContactSection } from "./components/Contact";
import { Footer } from "./components/Footer";
// This function returns a JSX element that contains three child components: Header, HeroSection, and AboutSection
function App() {
  return (
    <>
      {/* This is the Header component */}
      <Header />
      {/* This is the HeroSection component */}
      <HeroSection />
      {/* This is the AboutSection component */}
      <AboutSection />
      {/* This is the ProjectsSection component */}
      <ProjectsSection />
      {/* This is the SkillsSection component */}
      <SkillsSection />
      {/* This is the ContactSection component */}
      <ContactSection />
      {/* This is the Footer component */}
      <Footer />
    </>
  );
}

export default App;
