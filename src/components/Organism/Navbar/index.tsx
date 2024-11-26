import { useState } from "react"; // Import useState for managing state
import { Menu, Moon, X } from "lucide-react";
import Button from "../../Atoms/Button";
import Logo from "../../Atoms/Logo";
import NavLinks from "../../Molecules/NavLinks";
import { navbarLinks } from "../../../resources";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <nav className="fixed w-full z-50 bg-darkRed backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <div className="w-full hidden md:flex items-center justify-between space-x-8">
          <NavLinks />
          <div className="flex items-center gap-8">
            <Moon
              size={35}
              className="bg-red-500 p-1 rounded-full cursor-pointer"
            />
            <Button>Start a project</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white bg-red-500 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu} // Toggle menu on click
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-red-600 text-white py-2 px-4`}
      >
        {navbarLinks.map((link) => (
          <li key={link.name} className="py-2 border-b border-white last:border-none cursor-pointer">
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
