import { createFileRoute } from "@tanstack/react-router";
import FaqComponent from "../../components/FaqComponent";
export const Route = createFileRoute("/_layout/frequently-asked-questions")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-1 flex-col items-center p-3">
      <h1 className="font-Qilka text-center text-3xl leading-[68px] text-[#3F1102] md:text-[56px]">
        Frequently asked questions
      </h1>
      <input
        type="text"
        placeholder="Search"
        className="md-py-11 font-abezee mt-[29px] h-[47px] w-full max-w-[620px] rounded-[100px] border py-4 pl-4 text-[16px] leading-9 md:h-[61px] md:pl-32 md:text-[21px]"
      />
      <ul className="font-abezee scrollbar-hide mt-12 flex w-full max-w-[620px] gap-4 overflow-x-auto px-2 text-[15px] leading-9 whitespace-nowrap text-[#3F1102]">
        <li className="h-10 min-w-fit cursor-pointer rounded-[20px] bg-[#EC4007] px-[21px] py-1 text-white">
          For Parents
        </li>
        <li className="h-10 min-w-fit cursor-pointer rounded-[20px] bg-[#E8E4E4] px-[21px] py-1">
          Using the app
        </li>
        <li className="h-10 min-w-fit cursor-pointer rounded-[20px] bg-[#E8E4E4] px-[21px] py-1">
          Stories and audio
        </li>
        <li className="h-10 min-w-fit cursor-pointer rounded-[20px] bg-[#E8E4E4] px-[21px] py-1">
          Safety and privacy
        </li>
        <li className="h-10 min-w-fit cursor-pointer rounded-[20px] bg-[#E8E4E4] px-[21px] py-1">
          Subscription and billing
        </li>
      </ul>
      <div className="mt-[61px] flex w-full max-w-[620px] flex-col gap-8">
        <FaqComponent
          question="How do I upgrade my subscription?"
          answer="To upgrade your Storytime subscription, open the app or website, log into your account, go to subscription settings, choose the premium plan, and follow the prompts, or if you subscribed through the App Store or Google Play, upgrade through your device settings, or contact support@storytimeapp.me for help."
        />
        <FaqComponent
          question="Are the stories safe for my kids?"
          answer="To upgrade your Storytime subscription, open the app or website, log into your account, go to subscription settings, choose the premium plan, and follow the prompts, or if you subscribed through the App Store or Google Play, upgrade through your device settings, or contact support@storytimeapp.me for help."
        />
        <FaqComponent
          question="Do I need internet to listen?"
          answer="To upgrade your Storytime subscription, open the app or website, log into your account, go to subscription settings, choose the premium plan, and follow the prompts, or if you subscribed through the App Store or Google Play, upgrade through your device settings, or contact support@storytimeapp.me for help."
        />
        <FaqComponent
          question="Can parents track reading progress?"
          answer="To upgrade your Storytime subscription, open the app or website, log into your account, go to subscription settings, choose the premium plan, and follow the prompts, or if you subscribed through the App Store or Google Play, upgrade through your device settings, or contact support@storytimeapp.me for help."
        />
      </div>
    </div>
  );
}
