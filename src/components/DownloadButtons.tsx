import googlePlayIcon from "/squeeze/google.svg";
import iosIcon from "/squeeze/ios.svg";

export default function DownloadButtons({ color }: { color: "light" | "dark" }) {
    return (
        <div className="relative flex self-center shrink-0 flex-col items-stretch gap-8 md:flex-row md:items-start md:gap-6">
            <a
                href="https://play.google.com/store/apps/details?id=net.emerj.storytime"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative flex shrink-0 items-center justify-center gap-3 overflow-clip rounded-[100px] px-5 py-3 transition-colors hover:bg-[#d13706] md:gap-4 md:px-[25px] md:py-[15px] ${color === "light"
                    ? "bg-white text-[#ec4007]"
                    : "bg-[#ec4007] text-white hover:bg-[#d13706]"
                    }`}
            >
                <div className="relative size-7 shrink-0 md:size-8">
                    <img
                        src={color == "light" ? "/icons/playstore_primary.png" : googlePlayIcon}
                        alt="Google Play"
                        className="h-full w-full"
                    />
                </div>
                <div className="relative flex shrink-0 flex-col items-start gap-px">
                    <p className="font-abezee relative shrink-0 text-xs not-italic">
                        Download on
                    </p>
                    <p className="font-abezee relative shrink-0 text-base not-italic md:text-xl">
                        Google Play
                    </p>
                </div>
            </a>
            <a
                href="https://testflight.apple.com/join/NEfq19wH"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative flex shrink-0 items-center justify-center gap-3 overflow-clip rounded-[100px] px-5 py-3 transition-colors hover:bg-[#d13706] md:gap-4 md:px-[25px] md:py-[15px] ${color === "light"
                    ? "bg-white text-[#ec4007]"
                    : "bg-[#ec4007] text-white hover:bg-[#d13706]"
                    }`}
            >
                <div className="relative size-7 shrink-0 md:size-8">
                    <img src={color == "light" ? "/icons/appstore_primary.png" : iosIcon} alt="App Store" className="h-full w-full" />
                </div>
                <div className="relative flex shrink-0 flex-col items-start gap-px">
                    <p className="font-abezee relative shrink-0 text-xs not-italic">
                        Download on
                    </p>
                    <p className="font-abezee relative shrink-0 text-base not-italic md:text-xl">
                        App Store
                    </p>
                </div>
            </a>
        </div>
    );
}