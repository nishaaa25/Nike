import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold font-palanquin lg:max-w-lg">
          We Provide You
          <span className="text-coral-red mx-3">
            Super <br />
            Quality
          </span>
          Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text  mt-6 lg:max-w-lg mb-12">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div>
          <Button label="View Details" iconUrl={arrowRight}/>
        </div>
      </div>
      <div className="flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570}  height={522} className="object-contain"/>
      </div>
    </section>
  );
};

export default SuperQuality;
