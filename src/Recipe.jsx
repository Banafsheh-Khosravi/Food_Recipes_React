import React from "react";

const Recipe = ({ title, colories, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{colories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
