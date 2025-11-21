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
    <div className="w-[622px] font-abezee text-[20px] leading-9">
      {/* QUESTION ROW */}
      <div className="flex items-center justify-between gap-6">
        {/* Question bubble */}
        <div
          onClick={() => setOpen(!open)}
          className="relative w-full h-24 px-[34px] py-[18px] rounded-[14px] flex"
        >
          <svg
            className="absolute inset-0 w-full h-full rounded-[14px] -z-10"
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

          <p className="pl-12 pt-1">{question}</p>
        </div>

        {/* Icon button EXACTLY LIKE YOUR ORIGINAL */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#FFF2EC] p-5 rounded-[975px] -mt-4 cursor-pointer"
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
        <div className="relative mt-2 px-[34px] py-[22px] rounded-[14px]">
          <svg
            className="absolute inset-0 w-full h-full rounded-[14px] -z-10"
            viewBox="0 0 622 347"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 0C13.4315 0 0 13.4315 0 30V300.313C0 316.882 13.4315 330.313 30 330.313H581.278L620.542 346.546L614.388 320.281C619.121 314.977 622 307.982 622 300.313V30C622 13.4315 608.569 3.54344e-07 592 0H30Z"
              fill="#FFF2EC"
            />
          </svg>

          <p className="pl-12 pt-4 pr-8">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqComponent;
