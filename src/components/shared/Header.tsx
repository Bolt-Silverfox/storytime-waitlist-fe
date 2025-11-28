import { Link } from "@tanstack/react-router";
import { useState } from "react";
import Icon from "./Icon";
import MobileNav from "./MobileNav";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Contact", route: "/contact-us" },
  { name: "Faq", route: "/frequently-asked-questions" },
  { name: "Resources", route: "/resources" },
];

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
        <nav className="relative mx-auto flex max-w-[1300px] flex-row items-center justify-between px-5 py-5 md:py-[30px] lg:px-10">
          <Link to="/">
            <img
              src="/icons/mobile-logo.svg"
              alt="storytime logo image"
              className="h-[38px] w-[106px] md:hidden"
            />
            <img
              src="/icons/new-logo-blue.svg"
              alt="storytime logo image"
              className="hidden h-16 w-[178px] md:block"
            />
          </Link>
          <div
            aria-label="navigation links"
            className="hidden flex-row md:flex"
          >
            <ul className="flex flex-1 flex-row items-center gap-x-[27px]">
              {navLinks.map((link) => (
                <li
                  key={link.route}
                  className="hover:text-primary cursor-pointer transition-all duration-200 hover:scale-110 lg:text-xl"
                >
                  <Link
                    className="font-abezee [&.active]:text-primary [&.active]:scale-110"
                    to={link.route}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button className="bg-primary hover:bg-primary/70 font-abezee hidden rounded-full px-[40.45px] py-[13.48px] text-center text-white transition-all duration-300 md:flex">
            Download
          </button>
          <button
            aria-label="Open mobile navigation"
            className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 md:hidden"
            onClick={() => setIsMobileNavOpen(true)}
          >
            <Icon name="Menu" color="black" size={28} />
          </button>
        </nav>
      </header>

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Header;
