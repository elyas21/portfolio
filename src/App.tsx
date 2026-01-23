import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, About, Projects, GitHub, Skills, Contact } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <GitHub />
        <Skills />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
