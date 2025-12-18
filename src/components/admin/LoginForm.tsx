import { useState, type FormEvent } from "react";
import Icon from "../shared/Icon";
import { useNavigate } from "@tanstack/react-router";

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("data", data);
    navigate({ to: "/admin/dashboard/overview" });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <label htmlFor="email" className="text-sm font-medium text-black">
          Email Address
        </label>
        <input
          required
          name="email"
          type="email"
          placeholder="m@example.com"
          className="focus:ring-primary/50 border-border placeholder:text-text h-10 w-full rounded-md border px-4 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
        />
      </div>
      <div className="relative flex flex-col gap-y-2">
        <label htmlFor="password" className="text-sm font-medium text-black">
          Password
        </label>
        <input
          minLength={8}
          required
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="VerYSTrongPAssWORD34@#6"
          className="focus:ring-primary/50 border-border placeholder:text-text h-10 w-full rounded-md border px-4 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
        />
        <div className="absolute top-9 right-2 cursor-pointer">
          {showPassword ? (
            <Icon
              name="EyeOff"
              onClick={() => setShowPassword(false)}
              color="#71717a"
            />
          ) : (
            <Icon
              name="Eye"
              onClick={() => setShowPassword(true)}
              color="#71717a"
            />
          )}
        </div>
      </div>
      <button
        type="submit"
        className="h-10 w-full cursor-pointer rounded-md bg-black font-medium text-white transition-all duration-200 hover:bg-black/80"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
