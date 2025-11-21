export default function Details(){
  return(
    <div className="md:max-w-[1231px] mt-40 mx-auto px-4">  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">


       
        <div className="flex justify-center items-center overflow-hidden bg-[#D6E0FC] rounded-[60px] h-[466px] w-full">
          <div className="flex items-center gap-4">
            <div className="relative -mb-25">
               <img src="mobile-2.png" className="h-[507px]  object-contain" alt="mobile" />
            </div>

            <div className="relative mb-47">
               <img src="mobile-1.png" className="h-[386px] object-contain" alt="mobile" />
            </div>
          </div>
        </div>

      
        <div className="flex flex-col justify-between gap-6 md:gap-8">
          
          <h2 className="text-3xl md:text-[48px] font-Qilka font-bold text-[#231F1E]">
            Built with kids in mind + AI integration
          </h2>

          <p className="text-[#4F4C4B] max-w-[486px] font-abezee text-lg md:text-[24px] leading-relaxed md:leading-[32px]">
            A combination of intentionality, AI integration and simplicity, we have
            created an amazing digital storybook to aid your kids all the way through in their
            day to day lives.
          </p>

          {/* btn */}
          <button className="bg-[#EC4007] font-abezee w-full max-w-[280px] h-[64px] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
            Download now
          </button>
        </div>
      </div>
    </div>
  )
}