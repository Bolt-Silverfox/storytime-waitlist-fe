import { Link } from "@tanstack/react-router";

const navLinks = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Contact",
    route: "/contact-us",
  },
  {
    name: "Faq",
    route: "/frequently-asked-questions",
  },
];

const Header: React.FC = () => {
  return (
    <header className="hidden w-full flex-row items-center justify-between px-20 pt-[63px] md:flex">
      <img
        src="/logo.svg"
        alt="storytime logo image"
        className="h-10 w-[164px]"
      />
      <nav className="flex flex-row">
        <ul className="flex flex-1 flex-row items-center gap-x-[27px]">
          {navLinks.map((link) => (
            <li key={link.route}>
              <Link className="font-abezee" to={link.route}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="bg-primary font-abezee rounded-full px-[40.45px] py-[9.48px] text-center text-white">
        <span className="flex items-center gap-3">
          Sign Up
          <img src="/downward.png" alt="downward arrow" className="h-2.5 w-3.5" />
        </span>
      </button>
    </header>
  );
};

export default Header;
