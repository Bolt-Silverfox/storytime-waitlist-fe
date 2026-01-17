import { useState, type FormEvent, type MouseEvent } from "react";
import { Icon } from "@iconify/react";
import useSqueezeInfo from "../contexts/SqueezeContext";
import confetti from "/squeeze/confetti.svg";
import { WAITLIST_API } from "../constants";
import { toast } from "sonner";

interface JoinEarlyModalProps {
  onClose: () => void;
}

const JoinEarlyModal = ({ onClose }: JoinEarlyModalProps) => {
  const { setUserInfo } = useSqueezeInfo();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = {
        name: formData.parentName,
        email: formData.email,
        phone: formData.phone, // Sending phone as well in case the API accepts it or ignores extra fields
      };

      const request = await fetch(`${WAITLIST_API}/waitlist/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const response = await request.json();

      if (!request.ok) {
        throw new Error(
          response.message || response.error || request.statusText,
        );
      }

      if (!response.status)
        throw new Error(
          response.message || response.messsage || "Something went wrong",
        );

      setUserInfo({
        fullName: formData.parentName,
        email: formData.email,
      });
      setIsSuccess(true);
      toast.success("Joined early access successfully!");
    } catch (err: unknown) {
      const errMessage =
        err instanceof Error ? err.message : "Unexpected error, try again.";
      toast.error(errMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBackdropClick = (e: MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <section
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#221D1DB2]/70 px-4 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-center gap-6 rounded-[24px] bg-white px-4 py-6 md:max-w-[528px] md:rounded-[32px] md:px-6 md:py-10"
      >
        {!isSuccess ? (
          <>
            <div className="relative flex w-full flex-col items-start gap-1">
              <div className="relative flex w-full items-center justify-between">
                <h2 className="font-Qilka text-lg leading-tight font-bold text-[#212121] not-italic md:text-xl md:leading-[36.212px]">
                  Join Early Access
                </h2>
                <button
                  onClick={onClose}
                  className="relative size-6 shrink-0 cursor-pointer transition-opacity hover:opacity-70"
                  aria-label="Close modal"
                >
                  <Icon icon="formkit:close" className="size-full text-black" />
                </button>
              </div>
              <p className="font-abezee text-text-light w-full text-sm leading-5 font-normal not-italic md:text-base md:leading-6">
                Be among the first to try Storytime, an interactive storytelling
                app with animated stories and AI read-along voices for kids.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="relative flex w-full flex-col items-start gap-6 md:gap-[42px]"
            >
              <div className="relative flex w-full flex-col items-end gap-4 md:gap-[25px]">
                <input
                  type="text"
                  placeholder="Parent's name"
                  value={formData.parentName}
                  onChange={(e) => handleChange("parentName", e.target.value)}
                  required
                  className="font-abezee relative flex w-full items-center overflow-clip rounded-[100px] border border-solid border-[#bdbdbd] px-4 py-2.5 text-base leading-normal font-normal text-[#616161] transition-colors placeholder:text-[#616161] focus:border-[#EC4007] focus:outline-none md:py-[10px] md:text-xl md:leading-[36.212px]"
                />
                <input
                  type="email"
                  placeholder="Email for updates"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="font-abezee relative flex w-full items-center overflow-clip rounded-[100px] border border-solid border-[#bdbdbd] px-4 py-2.5 text-base leading-normal font-normal text-[#616161] transition-colors placeholder:text-[#616161] focus:border-[#EC4007] focus:outline-none md:py-[10px] md:text-xl md:leading-[36.212px]"
                />
                <input
                  type="tel"
                  placeholder="Phone number (optional)"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="font-abezee relative flex w-full items-center overflow-clip rounded-[100px] border border-solid border-[#bdbdbd] px-4 py-2.5 text-base leading-normal font-normal text-[#616161] transition-colors placeholder:text-[#616161] focus:border-[#EC4007] focus:outline-none md:py-[10px] md:text-xl md:leading-[36.212px]"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="font-abezee relative flex w-full cursor-pointer items-center justify-center overflow-clip rounded-[100px] bg-[#EC4007] px-6 py-2.5 text-base leading-normal font-normal text-white not-italic transition-colors hover:bg-[#d13706] disabled:opacity-70 md:px-8 md:py-[10px] md:text-xl md:leading-[36.212px]"
              >
                {isLoading ? "Loading..." : "Join Early Access"}
              </button>
            </form>
          </>
        ) : (
          <>
            <button
              onClick={onClose}
              className="absolute top-8 right-8 size-6 cursor-pointer transition-opacity hover:opacity-70"
              aria-label="Close modal"
            >
              <Icon icon="formkit:close" className="size-full text-black" />
            </button>
            <div className="relative h-[195.768px] w-[197.998px] shrink-0">
              <img
                src={confetti}
                alt="Confetti celebration"
                className="h-full w-full"
              />
            </div>
            <div className="relative flex w-full flex-col items-center justify-center gap-6 text-[#3a3a3a]">
              <h2 className="font-Qilka text-[32px] leading-none font-bold tracking-[1.92px] not-italic">
                You're all set!
              </h2>
              <p className="font-abezee text-center text-xl leading-normal font-normal tracking-[1.2px] not-italic">
                Thanks for signing up. We'll keep you updated with news and
                features from Storytime App.
              </p>
            </div>
            <button
              onClick={onClose}
              className="font-abezee relative flex w-full max-w-[450px] cursor-pointer items-center justify-center overflow-clip rounded-[100px] bg-[#EC4007] px-8 py-[10px] text-xl leading-[36.212px] font-normal text-white not-italic transition-colors hover:bg-[#d13706]"
            >
              Finish
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default JoinEarlyModal;
