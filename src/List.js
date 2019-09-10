import React from "react";
import Groli from "./Groli"

const List = ({things, name, itemClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { things.map( thing => <Groli key={thing.id} {...thing} itemClick={itemClick} />)}
    </ul>
  </div>
)

export default List;