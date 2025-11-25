import { Link } from "@tanstack/react-router";

const footerLinks = [
  {
    name: "Privacy policy",
    route: "/privacy-policy",
  },
  {
    name: "Terms and conditions",
    route: "/terms-and-conditions",
  },
  {
    name: "How it works",
    route: "/how-it-works",
  },
  {
    name: "Faq",
    route: "/frequently-asked-questions",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#363232]">
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-y-10 bg-[#363232] py-[63px] md:px-10 lg:flex-row">
        <Link to="/">
          <img src="/icons/new-logo.svg" alt="storytime logo image" />
        </Link>
        <nav className="flex">
          <ul className="flex flex-1 flex-col items-center gap-x-[27px] gap-y-4 lg:flex-row">
            {footerLinks.map((link) => (
              <li
                key={link.route}
                className="text-xl transition duration-300 hover:scale-110"
              >
                <Link
                  className="font-abezee hover:text-primary [&.active]:text-primary cursor-pointer text-white transition-all duration-300 [&.active]:scale-110"
                  to={link.route}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex flex-row gap-x-4">
          <li>
            <img src="/icons/facebook.svg" alt="" />
          </li>
          <li>
            <img src="/icons/instagram.svg" alt="" />
          </li>
          <li>
            <img src="/icons/tiktok.svg" alt="" />
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
