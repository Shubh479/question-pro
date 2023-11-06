import React from "react";
import "./Card.css";

function Card({ leftItems, leftCheckHandler }) {
  return (
    <div className="App__left_div">
      {leftItems.map((item, id) => {
        return (
          <div key={item.id}>
            <input type="checkbox" onChange={leftCheckHandler} value={item} />
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Card;
