import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  console.log(imgURL);
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        width={120}
        height={120}
        className="rounded-full object-cover"
      />
      <p className="info-text text-center max-w-sm mt-6 ">{feedback}</p>
      <div className="flex justify-start gap-2.5 mt-4">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="font-montserrat text-slate-gray text-xl">({rating})</p>
      </div>
      <h3 className="font-palanquin font-bold text-3xl mt-2">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
