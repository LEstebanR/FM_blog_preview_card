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
    };
  };
};

const Card: React.FC<props> = ({ cardData }) => {
  return (
    <div className="flex h-4/6 max-h-100 w-11/12 max-w-96 flex-col items-center justify-around rounded-3xl border bg-white p-4 shadow-card hover:shadow-hover">
      <img
        className="rounded-xl"
        src={cardData.image}
        alt="card image"
        height={200}
      />
      <div className="flex h-3/6 w-full flex-col items-start justify-around">
        <Button label="Learning" />
        <p>Published {cardData.published}</p>
        <p>{cardData.title}</p>
        <p>{cardData.description}</p>
        <span className="flex gap-2">
          <img className="h-8 rounded-full" src={cardData.author.avatar} />
          <p>{cardData.author.name}</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
