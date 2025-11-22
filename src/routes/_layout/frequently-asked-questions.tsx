import { createFileRoute } from "@tanstack/react-router";
import FaqComponent from "../../components/FaqComponent";
export const Route = createFileRoute("/_layout/frequently-asked-questions")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex-1 flex flex-col items-center p-3">
      <h1 className="mt-[72px] font-Qilka text-center text-3xl md:text-[56px] leading-[68px] text-[#3F1102]">Frequently asked questions</h1>
      <input
  type="text"
  placeholder="Search"
  className="border rounded-[100px] pl-4 md:pl-32 py-4 md-py-11 mt-[29px] w-full max-w-[620px] h-[47px] md:h-[61px] font-abezee text-[16px] md:text-[21px] leading-9"
/>
      <ul className="mt-12 flex gap-4 w-full max-w-[620px] overflow-x-auto whitespace-nowrap text-[15px] leading-9 font-abezee text-[#3F1102] px-2 scrollbar-hide">
        <li className="min-w-fit h-10 bg-[#EC4007] text-white rounded-[20px] px-[21px] py-1 cursor-pointer">
          For Parents
        </li>
        <li className="min-w-fit h-10 bg-[#E8E4E4] rounded-[20px] px-[21px] py-1 cursor-pointer">
          Using the app
        </li>
        <li className="min-w-fit h-10 bg-[#E8E4E4] rounded-[20px] px-[21px] py-1 cursor-pointer">
          Stories and audio
        </li>
        <li className="min-w-fit h-10 bg-[#E8E4E4] rounded-[20px] px-[21px] py-1 cursor-pointer">
          Safety and privacy
        </li>
        <li className="min-w-fit h-10 bg-[#E8E4E4] rounded-[20px] px-[21px] py-1 cursor-pointer">
          Subscription and billing
        </li>
      </ul>
      <div className="mt-[61px] flex flex-col gap-8 w-full max-w-[620px]">
        <FaqComponent question="How do I upgrade my subscription?" answer="To upgrade your Storytime subscription, open the app or website, log into your account, go to subscription settings, choose the premium plan, and follow the prompts, or if you subscribed through the App Store or Google Play, upgrade through your device settings, or contact support@storytimeapp.me for help." />
        <FaqComponent question="Are the stories safe for my kids?" answer="To upgrade your Storytime subscription, open the app or website, log into your account, go to subscription settings, choose the premium plan, and follow the prompts, or if you subscribed through the App Store or Google Play, upgrade through your device settings, or contact support@storytimeapp.me for help." />
        <FaqComponent question="Do I need internet to listen?" answer="To upgrade your Storytime subscription, open the app or website, log into your account, go to subscription settings, choose the premium plan, and follow the prompts, or if you subscribed through the App Store or Google Play, upgrade through your device settings, or contact support@storytimeapp.me for help." />
        <FaqComponent question="Can parents track reading progress?" answer="To upgrade your Storytime subscription, open the app or website, log into your account, go to subscription settings, choose the premium plan, and follow the prompts, or if you subscribed through the App Store or Google Play, upgrade through your device settings, or contact support@storytimeapp.me for help." />
        
      </div>
    </div>
  );
}
