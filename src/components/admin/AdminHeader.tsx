import { Link } from "@tanstack/react-router";
import { dashboardNavLinks } from "../../../data";

const AdminHeader: React.FC = () => {
  return (
    <header className="border-border flex h-16 w-full flex-row items-center justify-between border-b">
      <nav>
        <ul className="flex flex-row items-center gap-x-4">
          {dashboardNavLinks.map((link) => (
            <li key={link.route}>
              <Link
                className="font-inter text-text text-sm leading-5 font-medium transition-all duration-200 hover:text-black [&.active]:text-black"
                to={link.route}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden flex-row items-center gap-x-4 md:flex">
        <input
          type="text"
          className="border-border focus:ring-brand placeholder:text-text h-10 w-72 rounded-md border bg-white px-4 text-sm transition-all duration-200 focus:w-96 focus:ring-1 focus:ring-offset-2 focus:outline-none"
          placeholder="Search..."
        />
        <div className="relative">
          <input
            type="text"
            className="border-border placeholder:text-text h-10 rounded-md border bg-white pl-7 text-sm"
            defaultValue={"Admin"}
            disabled={true}
          />
          <img
            src="/icons/admin-avatar.svg"
            alt="admin avatar"
            className="absolute top-3 left-2 size-4"
          />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
