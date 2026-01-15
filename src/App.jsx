import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <ContactPage />
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                © 2025{" "}
                <a href="https://github.com/neeraj214" className="hover:underline">
                  Neeraj Negi
                </a>
                . All Rights Reserved.
              </span>
            </center>
          </footer>
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://github.com/neeraj214" className="hover:underline">
            Neeraj Negi
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    const existing = localStorage.getItem("projects");
    if (!existing) {
      const seed = [
        {
          id: 1,
          Title: "Dummy Project",
          Description: "A placeholder project entry for portfolio testing.",
          Img: "https://via.placeholder.com/800x400?text=Dummy+Project",
          Link: "",
          Github: "https://github.com/neeraj214/MyPersonalPortfolio",
          Features: ["Placeholder feature A", "Placeholder feature B"],
          TechStack: ["React", "Tailwind"]
        }
      ];
      localStorage.setItem("projects", JSON.stringify(seed));
    }
    const existingCerts = localStorage.getItem("certificates");
    if (!existingCerts) {
      const certs = [
        {
          id: 1,
          ImgSertif: "https://via.placeholder.com/1200x800?text=Dummy+Certificate"
        }
      ];
      localStorage.setItem("certificates", JSON.stringify(certs));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
