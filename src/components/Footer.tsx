import { Link } from "@tanstack/react-router";
import Icon from "./Icon";

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
    <footer className="flex flex-row items-center justify-between bg-[#363232] py-[63px]">
      <img src="/public/logo.svg" alt="storytime logo image" />
      <nav className="flex flex-row">
        <ul className="flex flex-1 flex-row items-center gap-x-[27px]">
          {footerLinks.map((link) => (
            <li key={link.route}>
              <Link className="font-abeezee text-white" to={link.route}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="flex flex-row gap-x-4">
        <li>
          <Icon color="white" name="Facebook" />
        </li>
        <li>
          <Icon color="white" name="Instagram" />
        </li>
        <li>
          <Icon color="white" name="Twitter" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
