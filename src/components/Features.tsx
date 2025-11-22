export default function Features(){

     const features = [
    { id: 1, text: "Voice options", active: true },
    { id: 2, text: "Smart story filters" },
    { id: 3, text: "Read story along AI" },
    { id: 4, text: "Smart story filters" },
    { id: 5, text: "Favorite stories" },
    { id: 6, text: "Interactive mode" }
  ];

  return (
    <section className="md:max-w-[1280px] mt-40 mx-auto ">
      <div className="container mx-auto px-4">
        <h2 className="font-Qilka mb-15 text-center md:text-[56px] h-[65px] font-bold text-[#231F1E]">
          Check out our amazing features
        </h2>

        <div className="w-full mx-auto bg-[#FFF2EC] rounded-3xl p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
      
            <div className="space-y-[24px]">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`flex text-[24px] font-abezee items-center text-[#EC4007] gap-3 p-3 rounded-lg transition-all 
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full  flex items-center justify-center text-[#EC4007] font-bold ${
                    feature.active ? 'bg-[#EC4007] text-white'  : 'bg-[#EC400733]' 
                  }`}>
                    {feature.id}
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

 
            <div className="flex item-end justify-center border-red-300">
              <img src="voice-mob.png" className="-mb-12" alt="image" />
            </div>

           
            <div className="text-center lg:text-left">
              <h3 className="font-Qilka md:text-[48px] font-bold mb-4 text-[#231F1E]">
                Voice options
              </h3>
              <p className="font-abezee mb-6 leading-[40px] text-[24px]">
                Calming expressive voices tailored to their story
              </p>
              <button
              onClick={() =>
    window.open(
      "https://appetize.io/app/b_mut2mndbqlx7iw54fsz4sbh2by?device=pixel7&osVersion=13.0&toolbar=true",
      "_blank"
    )
  }
               className="bg-[#EC4007] font-abezee w-[280px]  hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                Download now
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}