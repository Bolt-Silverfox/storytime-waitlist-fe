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
    name: "FAQ",
    route: "/frequently-asked-questions",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#363232]">
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-y-10 bg-[#363232] py-5 md:px-10 lg:flex-row">
        <Link to="/">
          <img
            src="/icons/new-logo.svg"
            alt="storytime logo image"
            className="h-[38px] w-[106px] md:hidden"
          />
          <img
            src="/icons/new-logo.svg"
            alt="storytime logo image"
            className="hidden h-12 w-[108px] md:block"
          />
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
        <ul className="flex flex-row items-center gap-x-4">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61585584201713"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:opacity-70"
            >
              <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/teamstorytimehq/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:opacity-70"
            >
              <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@teamstorytimehq"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:opacity-70"
            >
              <img src="/icons/tiktok.svg" alt="TikTok" className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/storytimehq"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:opacity-70"
              aria-label="X (Twitter)"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/storytimehq/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:opacity-70"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
