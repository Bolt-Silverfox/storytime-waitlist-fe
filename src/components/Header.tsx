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
    <header className="hidden w-full flex-row items-center justify-between pt-[63px] pl-[114px] md:flex">
      <img
        src="/logo.svg"
        alt="storytime logo image"
        className="h-6 w-[164px]"
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
      <button className="bg-primary font-abezee rounded-full px-[40.45px] py-[13.48px] text-center text-white">
        Sign Up
      </button>
    </header>
  );
};

export default Header;
