import { Icon } from "@iconify/react";

const SuccessDisplay = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="relative mx-auto mt-5 flex flex-col items-center justify-center gap-y-[15px] rounded-4xl bg-white p-[51px] text-center max-md:m-6 max-md:max-w-[382px] md:w-[488px]">
      <img
        src="/success-illustration.png"
        alt="happy little kid illustration"
        className="h-60 w-[229.11px] md:h-[291px] md:w-[278px]"
      />
      <button className="font-abezee absolute top-[23px] right-[13px] flex flex-row items-center gap-x-1.5 rounded-full border px-3 py-1.5 text-sm md:hidden">
        <Icon
          icon={"formkit:close"}
          className="hover:text-primary size-6 cursor-pointer text-black transition-all duration-200"
          onClick={onClose}
        />
        close
      </button>
      <h2 className="font-Qilka text-[20px] md:text-[26px]">
        You have successfully been added to the waitlist.
      </h2>
      <p className="font-abezee text-sm md:text-base">
        An email woould be sent to you confirming the next steps
      </p>
      <Icon
        icon={"formkit:close"}
        className="hover:text-primary absolute top-[27px] right-7 hidden size-6 cursor-pointer text-black transition-all duration-200 md:block"
        onClick={onClose}
      />
    </div>
  );
};

export default SuccessDisplay;
