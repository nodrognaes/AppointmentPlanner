import React from "react";

export const Tile = ({val}) => {
  const objArr = Object.values(val);

  return (
    <div className="tile-container">
      {objArr.map((data, index) => {
        return index ? <p className="tile" key={index}>{data}</p> :
          <p className="tile-tile" key={index}>{data}</p>
      })}
    </div>
  );
};
