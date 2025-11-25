import { Link } from "@tanstack/react-router";
import { useState } from "react";
import Icon from "./Icon";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Contact", route: "/contact-us" },
  { name: "Faq", route: "/frequently-asked-questions" },
];

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="border-b-primary/15 sticky top-0 z-50 w-full border-b bg-white">
      <section className="relative mx-auto flex max-w-7xl flex-row items-center justify-between px-5 py-5 md:px-10 md:py-[30px]">
        <img
          src="/icons/new-logo-blue.svg"
          alt="storytime logo image"
          className="h-16 w-53
53
53
[178.9px]"
        />
        <nav5353


          aria-labelledby="navigation links"
          className="hidden flex-row md:flex"
        >
          <ul className="flex flex-1 flex-row items-center gap-x-[27px]">
            {navLinks.map((link) => (
              <li
                key={link.route}
                className="hover:text-primary cursor-pointer transition-all duration-200 hover:scale-110 lg:text-xl"
              >
                <Link53

                  className="font-abezee [&.active]:text-primary [&.active]:scale-110"
                  to={link.route}
                >53

                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="bg-primary hover:bg-primary/70 font-abezee hidden rounded-full px-[40.45px] py-[13.48px] text-center text-white transition-all duration-300 md:flex">
          Download
        </button>
        <button
          aria-labelledby="Open mobile navigation dropdown button"
          className="flex transition-all duration-300 hover:rotate-180 md:hidden"
          onClick={() => {
            setIsMobileNavOpen((cur) => !cur);
          }}
        >
          <Icon name={!isMobileNavOpen ? "Menu" : "X"} color="black" />
        </button>
        <nav
          aria-labelledby="Mobile navigation dropdown"
          className={`border-r-primary/15 fixed inset-y-0 left-0 z-20 flex w-60 flex-col border-r bg-white px-4 py-10 transition-all duration-500 ease-out md:hidden ${isMobileNavOpen ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-full opacity-0"} `}
        >
          <ul className="flex flex-1 flex-col items-center gap-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  key={link.route}
                  to={link.route}
                  className="font-abezee [&.active]:text-primary [&.active]:scale-110"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="bg-primary w-full rounded-full py-3 font-[abeezee] text-base text-white">
            Download
          </button>
        </nav>
      </section>
    </header>
  );
};

export default Header;
