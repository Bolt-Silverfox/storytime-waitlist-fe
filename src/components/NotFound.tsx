import { Link } from "@tanstack/react-router";

const NotFound = () => {
  return (
    <div className="flex min-h-dvh min-w-dvw flex-col items-center justify-center gap-y-6">
      <h1 className="font-Qilka text-4xl">404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link
        to="/"
        className="bg-primary hover:bg-primary/70 flex h-10 w-52 flex-col items-center justify-center rounded-lg text-white transition-all duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
