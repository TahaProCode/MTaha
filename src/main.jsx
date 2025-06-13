import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AboutSection } from "./components/About";
import { SkillsSection } from "./components/Skills";
import { ProjectsSection } from "./components/Projects.jsx";
import { ContactSection } from "./components/Contact";
import { MoreInfoSection } from "./components/More";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/:id" element={<App />} />
        <Route path="/About" element={<AboutSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/More" element={<MoreInfoSection />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
