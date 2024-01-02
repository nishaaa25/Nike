import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import {arrowRight} from "../assets/icons"

const SpecialOffer = () => {
  return (
    <div className="w-full  max-lg:flex-col-reverse  max-container flex justify-between items-center gap-9">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold font-palanquin">
          <span className="text-coral-red">
            Special
          </span>
           Offer
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="info-text  mt-6 lg:max-w-lg mb-12">
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Button label="View Details"  />
          <Button label="Learn More" backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'/>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
