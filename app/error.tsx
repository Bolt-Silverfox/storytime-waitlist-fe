"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import * as Sentry from "@sentry/nextjs";
import PageTitle from "../components/PageTitle";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  const retry = () => {
    router.refresh();
    reset();
  };

  return (
    <div className="flex flex-1 flex-col items-center px-4 pb-24">
      <PageTitle title="Something went wrong" />
      <p className="font-abezee mt-4 max-w-md text-center text-[#4A413F]">
        We hit a problem loading this page. Please try again.
      </p>
      <button
        type="button"
        onClick={retry}
        className="bg-primary hover:bg-primary/80 font-abezee mt-8 cursor-pointer rounded-full px-8 py-3 text-white transition-all"
      >
        Try again
      </button>
    </div>
  );
}
