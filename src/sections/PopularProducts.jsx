import React from "react";
import { products } from "../constants";
import Product from "../components/Product";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-bold font-palanquin">
          Our <span className="text-coral-red ">Popular</span> Products
        </h1>
        <p className="font-montserrat lg:max-w-lg mt-2 text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 mt-16">
          {products.map((item) => (
            <Product imgUrl={item.imgURL} name={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
