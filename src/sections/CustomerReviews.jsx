import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="w-full max-container">
        <h2 className="text-4xl font-bold text-center  font-palanquin">
          What Our
          <span className="text-coral-red mx-3">Customers</span>
          Say?
        </h2>
        <p className="info-text mt-4 m-auto max-w-lg">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="flex flex-1 max-lg:flex-col justify-evenly items-center gap-20 mt-24">
          {reviews.map((review) => (
            <div key={review.customerName}>
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
    </section>
  );
};

export default CustomerReviews;
