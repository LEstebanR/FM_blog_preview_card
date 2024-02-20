import React from "react";

type props = {
  label: string;
};

const Button: React.FC<props> = ({ label }) => {
  return (
    <button className="rounded-md bg-primary px-2 py-1 font-bold">
      {label}
    </button>
  );
};

export default Button;
