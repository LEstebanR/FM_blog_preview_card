import React from "react";
import Button from "./button";

type props = {
  cardData: {
    image: string;
  };
};

const Card: React.FC<props> = ({ cardData }) => {
  return (
    <div className="flex flex-col border-black border-r-4 border-b-4 border p-4 rounded-md w-10/12 bg-white h-4/6 justify-around items-center max-w-96">
      <img className="rounded-lg h-3/6" src={cardData.image} />
      <div className="flex flex-col items-start h-3/6 w-full justify-around">
        <Button label="Learning" />
        <p>Button</p>
        <p>Published</p>
        <p>Title</p>
        <p>Description</p>
        <p>Sign</p>
      </div>
    </div>
  );
};

export default Card;
