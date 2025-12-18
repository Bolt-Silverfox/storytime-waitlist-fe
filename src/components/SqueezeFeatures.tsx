import { useState, type Dispatch, type SetStateAction } from "react";
import { featuresData, featureTitles, type Features } from "../data";

const SqueezeFeaturesSection = () => {
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState(1);
  const currentlySelectedFeature = featuresData[currentlyDisplayed];
  return (
    <section className="mt-30 flex flex-col gap-y-15">
      <h3 className="font-Qilka text-text-dark text-center text-[32px] leading-[100%] md:text-5xl lg:text-[56px]">
        Check out our amazing features
      </h3>

      <BigScreenFeatures
        currentFeature={currentlySelectedFeature}
        setCurrentlyDisplayed={setCurrentlyDisplayed}
        currentlySelected={currentlyDisplayed}
      />
      <SmallScreenFeatures
        currentFeature={currentlySelectedFeature}
        setCurrentlyDisplayed={setCurrentlyDisplayed}
        currentlySelected={currentlyDisplayed}
      />
    </section>
  );
};

export default SqueezeFeaturesSection;

type Props = {
  currentFeature: Features;
  setCurrentlyDisplayed: Dispatch<SetStateAction<number>>;
  currentlySelected: number;
};

const BigScreenFeatures = ({
  currentFeature,
  setCurrentlyDisplayed,
  currentlySelected,
}: Props) => {
  return (
    <div
      aria-labelledby="big screens features"
      className="bg-light-pink hidden grid-cols-3 gap-6 rounded-3xl px-10 pt-25 lg:grid"
    >
      <ul className="flex flex-col gap-y-6 self-center">
        {featureTitles.map((title, index) => (
          <li
            className="flex flex-row items-center gap-x-2 transition-all duration-200 hover:scale-105"
            key={index}
            onClick={() => setCurrentlyDisplayed(index)}
          >
            <p
              className={`flex size-10 items-center justify-center rounded-full transition-all duration-200 hover:scale-105 hover:cursor-pointer ${index === currentlySelected ? "bg-primary text-white" : "text-primary bg-primary/20 hover:bg-primary hover:text-white"}`}
            >
              {index + 1}
            </p>
            <p
              className={`text-text-dark font-abezee hover:text-text-dark/50 text-2xl transition-all duration-200 hover:cursor-pointer ${index !== currentlySelected && "text-text-dark/70"}`}
            >
              {title}
            </p>
          </li>
        ))}
      </ul>
      <img
        src={currentFeature.imageUrl}
        alt={`${currentFeature.title} image`}
      />
      <div className="flex flex-col gap-y-4 self-center">
        <h3 className="font-Qilka text-text-dark text-[48px] leading-[100%]">
          {currentFeature.title}
        </h3>
        <p className="text-text-light font-abezee text-2xl">
          {currentFeature.description}{" "}
        </p>
        <button
          type="submit"
          className="bg-primary hover:bg-primary/70 h-[50px] w-full max-w-[397px] rounded-full text-white transition-all duration-200 hover:cursor-pointer"
        >
          Give me access now
        </button>
      </div>
    </div>
  );
};

const SmallScreenFeatures = ({
  currentFeature,
  currentlySelected,
  setCurrentlyDisplayed,
}: Props) => {
  return (
    <div
      aria-labelledby="small screens features"
      className="flex flex-col items-center gap-y-8 lg:hidden"
    >
      <div className="bg-light-pink rounded-3xl px-15 pt-30">
        <img src={currentFeature.imageUrl} alt="" />
      </div>
      <ul className="flex flex-col gap-y-6 self-center">
        {featureTitles.map((title, index) => (
          <li
            className="flex flex-row items-center gap-x-2"
            key={index}
            onClick={() => setCurrentlyDisplayed(index)}
          >
            <p
              className={`flex size-10 items-center justify-center rounded-full transition-all duration-200 hover:scale-105 hover:cursor-pointer ${index === currentlySelected ? "bg-primary text-white" : "text-primary bg-primary/20 hover:bg-primary hover:text-white"}`}
            >
              {index + 1}
            </p>
            <p
              className={`text-text-dark font-abezee hover:text-text-dark/50 text-xl transition-all duration-200 hover:cursor-pointer ${index !== currentlySelected && "text-text-dark/70"}`}
            >
              {title}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-col items-center gap-y-4 self-center">
        <h3 className="font-Qilka text-text-dark text-center text-3xl leading-[100%]">
          {currentFeature.title}
        </h3>
        <p className="text-text-light font-abezee text-center text-xl">
          {currentFeature.description}{" "}
        </p>
        <button
          type="submit"
          className="bg-primary hover:bg-primary/70 h-[50px] w-full max-w-[397px] rounded-full text-white transition-all duration-200 hover:cursor-pointer"
        >
          Give me access now
        </button>
      </div>
    </div>
  );
};
