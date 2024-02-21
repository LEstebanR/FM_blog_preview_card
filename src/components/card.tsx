import React, { useState } from "react";
import Button from "./button";
import clsx from "clsx";

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
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className="flex h-4/6 max-h-100 w-11/12 max-w-96 flex-col items-center justify-around rounded-3xl border bg-white p-4 shadow-card hover:shadow-hover"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        className="rounded-xl"
        src={cardData.image}
        alt="card image"
        height={200}
      />
      <div className="flex h-3/6 w-full flex-col items-start justify-around">
        <Button label="Learning" />
        <p className="text-sm">Published {cardData.published}</p>
        <p
          className={clsx(
            "text-xl font-extrabold uppercase hover:cursor-pointer",
            hover && "text-primary"
          )}
        >
          {cardData.title}
        </p>
        <p className="text-base text-gray">{cardData.description}</p>
        <div className="flex items-center gap-2">
          <img
            className="h-8 rounded-full"
            src={cardData.author.avatar}
            alt="author avatar  "
          />
          <p className="text-sm font-bold">{cardData.author.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
