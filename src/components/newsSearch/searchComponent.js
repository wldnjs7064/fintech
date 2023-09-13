import React from "react";

const searchComponent = ({ handleChange, handleClick }) => {
  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>검색</button>
    </div>
  );
};

export default searchComponent;
