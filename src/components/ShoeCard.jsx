import React from "react";

const ShoeCard = ({ imageUrl, changeBigShoeImage, bigShoeImage }) => {
    // console.log(imageUrl, bigShoeImage)
  const handleClick = () => {
    if(bigShoeImage !==imageUrl.bigShoe){
        console.log(bigShoeImage, imageUrl.bigShoe)
        changeBigShoeImage(imageUrl.bigShoe)
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imageUrl.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:px-4">
        <img src={imageUrl.thumbnail}/>
      </div>
    </div>
  );
};

export default ShoeCard;
   