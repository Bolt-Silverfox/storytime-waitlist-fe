import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Contact", route: "/contact-us" },
  { name: "Faq", route: "/frequently-asked-questions" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 flex border-b border-gray-200 flex-row items-center justify-between px-4 py-4 bg-white shadow-sm">
        <img src="/logo-iii.png" alt="storytime logo image" className="h-12 w-auto" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#231F1E] hover:text-[#EC4007] transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-md z-40 sticky top-[64px]">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.route}>
                <Link
                  className="font-abezee text-[#231F1E] hover:text-[#EC4007] transition-colors"
                  to={link.route}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <button className="bg-[#EC4007] font-abezee rounded-full w-full max-w-[200px] h-12 text-center text-white hover:bg-orange-600 transition-colors">
              Sign Up
            </button>
          </ul>
        </nav>
      )}

      {/* Desktop Header */}
      <header className="hidden md:flex md:py-[15px] fixed top-0 left-0 w-full z-50 bg-white flex-row items-center justify-between px-6 lg:px-[100px]">
        <img src="/logo-iii.png" alt="storytime logo image" className="h-16 w-auto" />

        <nav className="flex flex-row flex-1 justify-center">
          <ul className="flex flex-row items-center gap-6 lg:gap-[27px]">
            {navLinks.map((link) => (
              <li key={link.route}>
                <Link
                  className="font-abezee text-[#231F1E] hover:text-[#EC4007] transition-colors duration-300"
                  to={link.route}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() =>
            window.open(
              "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
              "_blank"
            )
          }
          className="bg-[#EC4007] font-abezee rounded-full w-[205px] h-12 lg:h-[48px] text-center text-white hover:bg-orange-600 transition-colors"
        >
          Download App
        </button>
      </header>

      {/* Push contentown so it doesn't sit under the fixed header */}
      <div className=" md:h-[100px]" />
    </>
  );
};

export default Header;
