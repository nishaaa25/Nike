import React from "react";
import { arrowRight } from "../assets/icons";
import { useState } from "react";
import Button from "../components/Button";
import { statistics } from "../constants";
import { shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="relative w-full flex xl:flex-row flex-col max-container min-h-screen justify-center gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer collections
        </p>
        <h1 className="text-8xl mt-10 max-sm:text-[72px] max-sm:leading-[82px] font-palanquin font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
            The New Arrival{" "}
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="text-lg mt-6 leading-8 text-slate-gray font-montserrat sm:max-w-sm mb-12">
          Discover stylish Nike arrivals, quality <br />
          comfort, and innovation for your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight}/>
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-20">
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="font-palanquin font-extrabold text-4xl">
                {item.value}
              </p>
              <p className="font-montserrat text-slate-gray text-base mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-lg:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImage}
          width={610}
          height={500}
          className="relative object-contain z-10"
        />
        <div className="absolute flex justify-center items-center sm:gap-6 gap-4 bottom-[-5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imageUrl={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default hero;
