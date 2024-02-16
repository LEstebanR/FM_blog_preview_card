import React from "react";

type props = {
  label: string;
};

const Button: React.FC<props> = ({ label }) => {
  return (
    <button className="bg-primary p-2 rounded-md font-bold">{label}</button>
  );
};

export default Button;
