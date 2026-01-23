import { useState } from "react";
import { navLinks } from "../constants";
import { elLogo, menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary backdrop-blur-sm bg-opacity-90">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        <a href="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
          <img src={elLogo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-lg font-bold">Elyas Abate</p>
        </a>

        {/* Desktop Menu */}
        <ul className="list-none hidden md:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-secondary hover:text-white text-base font-medium transition">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className="w-7 h-7 cursor-pointer" 
            onClick={() => setToggle(!toggle)} 
          />
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <div className="md:hidden absolute top-20 right-0 mx-4 my-2 min-w-[200px] bg-tertiary rounded-xl p-6 z-10">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    className="text-secondary hover:text-white text-base font-medium transition block"
                    onClick={() => setToggle(false)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
