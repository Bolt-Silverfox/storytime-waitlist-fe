import { createFileRoute } from "@tanstack/react-router";
import FaqComponent from "../../components/faqComponent";
export const Route = createFileRoute("/_layout/frequently-asked-questions")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex-1 flex flex-col items-center">
      <h1 className="mt-[72px] font-Qilka text-center text-3xl md:text-[56px] leading-[68px] text-[#3F1102]">Frequently asked questions</h1>
      <input type="text" placeholder="Search" className="border rounded-[100px] pl-32 py-11 mt-[29px] w-[620px] h-[61px] font-abezee text-[21px] leading-9" />
      <ul className="mt-12 flex gap-12 text-[15px]  leading-9 font-abezee text-[#3F1102]">
        <li className="min-w-[132px] h-10 bg-[#191919] text-white rounded-[20px] px-[21px] py-1">For Parents</li>
        <li className="min-w-[132px] h-10 bg-[#E8E4E4] rounded-[20px] px-[21px] py-1">Using the app</li>
        <li className="min-w-[132px] h-10 bg-[#E8E4E4] rounded-[20px] px-[21px] py-1">Stories and audio</li>
        <li className="min-w-[132px] h-10 bg-[#E8E4E4] rounded-[20px] px-[21px] py-1">Safety and privacy</li>
        <li className="min-w-[132px] h-10 bg-[#E8E4E4] rounded-[20px] px-[21px] py-1">Subscription and billing</li>
      </ul>
      <div className="grid grid-cols-2 mt-[51px] gap-x-5 gap-y-[30px]">
        <FaqComponent question={"How do I upgrade my subscription?"} />
        <FaqComponent question={"How do I upgrade my subscription?"} />
        <FaqComponent question={"Are the stories safe for kids?"} />
        <FaqComponent question={"Are the stories safe for kids?"} />
        <FaqComponent question={"Do I need internet to listen?"} />
        <FaqComponent question={"Do I need internet to listen?"} />
        <FaqComponent question={"Can parents track reading progress?"} />
        <FaqComponent question={"Can parents track reading progress?"} />
      </div>
    </div>
  );
}
