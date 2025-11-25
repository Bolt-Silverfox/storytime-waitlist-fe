import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FaqComponent = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-abezee w-full max-w-[622px] text-[20px] leading-9">
      {/* QUESTION ROW */}
      <div className="flex items-start justify-between gap-4 md:gap-6">
        {/* Question bubble */}
        <div
          onClick={() => setOpen(!open)}
          className="relative flex min-h-[64px] w-full cursor-pointer items-center rounded-[14px] px-4 py-4 md:min-h-[96px] md:px-[34px] md:py-[18px]"
        >
          <svg
            className="absolute inset-0 -z-10 h-full w-full rounded-[14px]"
            viewBox="0 0 622 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M584 0C604.987 7.79555e-06 622 17.0132 622 38C622 58.9868 604.987 76 584 76H60.0146L3.72168 96.6152L11.7842 65.5088C4.52409 58.5879 0 48.8223 0 38C0 17.0132 17.0132 2.81864e-07 38 0H584Z"
              fill="#FFF2EC"
            />
          </svg>

          <p className="pl-8 text-[16px] leading-normal md:pl-12 md:text-2xl">
            {question}
          </p>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="mt-2 flex cursor-pointer items-center justify-center rounded-full bg-[#FFF2EC] p-4 md:mt-0 md:p-5"
        >
          {open ? (
            <Minus color="#EC4007" size={20} strokeWidth={4} />
          ) : (
            <Plus color="#EC4007" size={20} strokeWidth={4} />
          )}
        </button>
      </div>

      {/* ANSWER SECTION */}
      {open && (
        <div className="relative mt-2 w-full rounded-[14px] px-4 py-4 md:px-[34px] md:py-[22px]">
          <svg
            className="absolute inset-0 -z-10 h-full w-full rounded-[14px]"
            viewBox="0 0 622 347"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M30 0C13.4315 0 0 13.4315 0 30V300.313C0 316.882 13.4315 330.313 30 330.313H581.278L620.542 346.546L614.388 320.281C619.121 314.977 622 307.982 622 300.313V30C622 13.4315 608.569 3.54344e-07 592 0H30Z"
              fill="#FFF2EC"
            />
          </svg>

          <p className="pr-2 text-[16px] leading-relaxed md:pr-4 md:text-2xl">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqComponent;
