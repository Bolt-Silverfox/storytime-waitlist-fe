import { type MouseEvent } from "react";
import { Icon } from "@iconify/react";
import qrCode from "/squeeze/qr-code.svg";
import DownloadButtons from "./DownloadButtons";

interface DownloadModalProps {
  onClose: () => void;
}

const DownloadModal = ({ onClose }: DownloadModalProps) => {
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
        className="relative flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-center gap-6 rounded-[14px] bg-white px-4 pt-6 pb-6 shadow-[0px_14px_32px_0px_rgba(218,199,176,0.2)] md:max-w-[528px] md:gap-11 md:px-6 md:pt-8 md:pb-[42px]"
      >
        <div className="relative flex w-full flex-col items-start gap-1">
          <div className="relative flex w-full items-center justify-between">
            <h2 className="font-Qilka text-lg font-bold leading-tight text-[#212121] not-italic md:text-xl md:leading-[36.212px]">
              Download Storytime
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
            Scan the QR code or choose your app store to download Storytime App
          </p>
        </div>

        <div className="relative size-[120px] shrink-0 overflow-clip rounded-lg bg-white p-2 md:size-[140px]">
          <img src={qrCode} alt="QR Code" className="h-full w-full" />
        </div>

        <div className="relative h-px w-full shrink-0">
          <div className="absolute inset-0 border-t border-[rgba(250,244,242,1)]" />
        </div>

        <DownloadButtons color="dark" />
      </div>
    </section>
  );
};

export default DownloadModal;
