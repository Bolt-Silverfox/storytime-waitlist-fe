export default function ParentalControls(){
  return(
    <div className="md:max-w-[1231px] mt-40 mx-auto px-4">  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Text Content - let it take natural grid width */}
        <div className="flex flex-col justify-between gap-6 md:gap-8">
          
          <h2 className="text-3xl md:text-[48px] font-Qilka font-bold text-[#231F1E]">
            Complete Parental Control
          </h2>

          <p className="text-[#4F4C4B] max-w-[486px] font-abezee text-lg md:text-[24px] leading-relaxed md:leading-[32px]">
            Enjoy full parental control with age filters, category choices, story blocking, screen-time limits, and activity tracking to keep your child’s story experience safe.
          </p>

          {/* btn */}
          <button className="bg-[#EC4007] font-abezee w-full max-w-[280px] h-[64px] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
            Download now
          </button>
        </div>

      
        <div className="flex justify-center items-center overflow-hidden bg-[#D6FCE1] rounded-[60px] h-[466px] w-full">
          <div className="flex items-end gap-4">
            <div className="relative -mb-7">
               <img src="jacob-mob.png" className="h-[507px] object-contain" alt="mobile" />
            </div>

            <div className="relative mb-48">
               <img src="jacob-mob-ii.png" className="h-[386px] object-contain" alt="mobile" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}