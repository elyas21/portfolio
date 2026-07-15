import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, About, Journey, Projects, Tech, GitHub, Contact } from "./components";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <BrowserRouter>
      <div className={`relative z-0 ${isDark ? "" : "light"}`} style={{ backgroundColor: "var(--color-surface)", minHeight: "100vh" }}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Tech />
        <GitHub />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
