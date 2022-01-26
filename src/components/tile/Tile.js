import React from "react";

export const Tile = ({value}) => {
  const objArr = Object.values(value);

  return (
    <div className="tile-container">
      {objArr.map( (data, index) => {
        return index ? <p className="tile" key={index}>{data}</p> :
          <p className="tile-title" key={index}>{data}</p>
      })}
    </div>
  );
};
