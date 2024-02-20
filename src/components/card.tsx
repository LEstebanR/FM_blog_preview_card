import React from "react";
import Button from "./button";

type props = {
  cardData: {
    image: string;
    published: string;
    title: string;
    description: string;
    author: {
      avatar: string;
      name: string;
    }
  };
};

const Card: React.FC<props> = ({ cardData }) => {
  return (
    <div className="flex flex-col border p-4 rounded-lg w-10/12 bg-white h-4/6 justify-around items-center max-w-96 shadow-card hover:shadow-hover">
      <img className="rounded-lg h-3/6" src={cardData.image} />
      <div className="flex flex-col items-start h-3/6 w-full justify-around">
        <Button label="Learning" />
        <p>Published {cardData.published}</p>
        <p>{cardData.title}</p>
        <p>{cardData.description}</p>
        <span className="flex gap-2">
          <img className="rounded-full h-8" src={cardData.author.avatar} />
          <p>{cardData.author.name}</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
