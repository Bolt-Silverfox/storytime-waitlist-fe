export default function Categories() {
  const categories = [
    { name: "Adventure",  image: "/categ-1.png" },
    { name: "Mystery", image: "/categ-2.png" },
    { name: "Fantasy", image: "/categ-3.png" },
    { name: "Sci-fi", image: "/categ-4.png" },
  ];

  return (
  
      <section className=" md:max-w-[1239px] mx-auto  h-[482px] mt-40">
        <div className="container mx-auto px-4">
          <h2 className="font-Qilka mb-15 text-center md:text-[56px] h-[65px] font-bold text-[#231F1E] ">
            Browse through our categories
          </h2>

          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex cursor-pointer font-abezee flex-col items-center justify-center shadow-xl transition-all hover:scale-105 hover:shadow-2xl`}
              >
                 <div
                className="w-[287px] h-[394px] rounded-[20px] flex px-[30px] items-end  py-5 "
                style={{
                  backgroundImage: `url('${category.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >

              <h3 className="  text-white text-[32px] ">
                  {category.name}
                </h3>

              </div>
              
              </div>
            ))}
          </div>
        </div>
      </section>
   
  );
}

// const CategoriesSection = () => {

//   return (

//   );
// };
