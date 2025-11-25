import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import Icon from "./Icon";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ name: string; route: string }>;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, navLinks }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <nav
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 left-0 z-50 flex w-full flex-col bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden md:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <img
            src="/icons/mobile-logo.svg"
            alt="Storytime logo"
            className="h-[38px] w-[106px]"
          />
          <button
            aria-label="Close mobile navigation"
            className="flex items-center justify-center rounded-full p-2 transition-all hover:bg-gray-100"
            onClick={onClose}
          >
            <Icon name="X" color="#3A3A3A" size={24} />
          </button>
        </div>

        <ul className="flex flex-1 flex-col gap-y-2 px-4 py-6">
          {navLinks.map((link) => (
            <li key={link.route}>
              <Link
                to={link.route}
                className="font-abezee [&.active]:bg-primary/10 [&.active]:text-primary block rounded-lg px-4 py-3 text-lg transition-all hover:bg-gray-50 [&.active]:font-semibold"
                onClick={onClose}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-100 p-4">
          <button className="bg-primary hover:bg-primary/90 font-abezee w-full rounded-full py-4 text-base font-semibold text-white shadow-lg transition-all active:scale-95">
            Download App
          </button>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
