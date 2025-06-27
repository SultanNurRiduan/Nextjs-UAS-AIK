import React from "react";
import NextButton from "./NextButton";
import BackButton from "./BackButton";

const ButtonBottom = () => {
  return (
    <div className="flex justify-between mt-8">
      <BackButton />
      <NextButton />
    </div>
  );
};

export default ButtonBottom;
    