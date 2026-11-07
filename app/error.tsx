"use client";

import PageTitle from "../components/PageTitle";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-1 flex-col items-center px-4 pb-24">
      <PageTitle title="Something went wrong" />
      <p className="font-abezee mt-4 max-w-md text-center text-[#4A413F]">
        We hit a problem loading this page. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="bg-primary hover:bg-primary/80 font-abezee mt-8 cursor-pointer rounded-full px-8 py-3 text-white transition-all"
      >
        Try again
      </button>
    </div>
  );
}
