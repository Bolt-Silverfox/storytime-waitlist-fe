import { createFileRoute } from "@tanstack/react-router";
import LoginForm from "../../components/admin/LoginForm";

export const Route = createFileRoute("/admin/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="font-inter flex min-h-dvh min-w-dvw flex-col items-center justify-center bg-[#f5f5f5] px-4 md:px-10">
      <div className="flex flex-row items-center justify-center gap-x-2">
        <img
          src="/icons/emerj-logo.svg"
          className="size-3 lg:size-6"
          alt="Emerj logo"
        />
        <p className="font-inter text-black">Emerj</p>
      </div>
      <main className="mx-auto mt-6 w-full max-w-[362px] rounded-xl border border-[#E4E4E7] bg-white p-6 lg:max-w-lg">
        <h3 className="text-center text-lg font-semibold text-black">
          Welcome back
        </h3>
        <p className="mt-2 mb-6 text-center text-sm leading-5 text-[#71717A]">
          Login to your project by inputing email and password
        </p>
        <LoginForm />
      </main>
    </div>
  );
}
