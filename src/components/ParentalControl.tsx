export default function ParentalControls(){
  return(
    <div className="md:max-w-[1231px] mt-20 md:mt-40 mx-auto px-4">  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">

        <div className="flex flex-col justify-between gap-4 md:gap-8 order-2 md:order-1">
          
          <h2 className="text-2xl md:text-[48px] font-Qilka font-bold text-[#231F1E] leading-tight">
            Complete Parental Control
          </h2>

          <p className="text-[#4F4C4B] font-abezee text-base md:text-[24px] leading-relaxed md:leading-[32px]">
            Enjoy full parental control with age filters, category choices, story blocking, screen-time limits, and activity tracking to keep your child's story experience safe.
          </p>

          <button
          onClick={() =>
    window.open(
      "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
      "_blank"
    )
  }
           className="bg-[#EC4007] font-abezee w-full md:w-[280px] h-14 md:h-[64px] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
            Download now
          </button>
        </div>

        <div className="flex justify-center items-center overflow-hidden bg-[#D6FCE1] rounded-[40px] md:rounded-[60px] h-64 md:h-[466px] w-full order-1 md:order-2">
          <div className="flex items-end gap-2 md:gap-4">
            <div className="relative -mb-6 md:-mb-7">
               <img src="jacob-mob.png" className="h-48 md:h-[507px] object-contain" alt="mobile" />
            </div>

            <div className="relative mb-30 md:mb-48">
               <img src="jacob-mob-ii.png" className="h-36 md:h-[386px] object-contain" alt="mobile" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}