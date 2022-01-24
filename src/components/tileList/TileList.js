import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = ({props}) => { 

  return (
    <div>
      {props.map((value, index) => <Tile value={value} key={index} />)}
    </div>
  );
};
