import Link from "next/link";
import PageTitle from "../components/PageTitle";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center px-4 pb-24">
      <PageTitle title="Page not found" />
      <p className="font-abezee mt-4 max-w-md text-center text-[#4A413F]">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="bg-primary hover:bg-primary/80 font-abezee mt-8 rounded-full px-8 py-3 text-white transition-all"
      >
        Back to home
      </Link>
    </div>
  );
}
