import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [leftItems, setLeftItems] = useState(["item1", "item2", "item3"]);
  const [rightItems, setRightItems] = useState(["item4", "item5", "item6"]);
  const [leftCheck, setLeftCheck] = useState([]);
  const [rightCheck, setRightCheck] = useState([]);

  function leftButtonHandler() {
    let newRightItems = rightItems;
    for (let i = 0; i < rightCheck.length; i++) {
      setLeftItems((prev) => [...prev, rightCheck[i]]);
      const findData = newRightItems.filter((item) => item !== rightCheck[i]);
      newRightItems = findData;
    }
    setRightCheck([]);
    setRightItems(newRightItems);
  }

  function rightButtonHandler() {
    let newLeftItems = leftItems;
    for (let i = 0; i < leftCheck.length; i++) {
      setRightItems((prev) => [...prev, leftCheck[i]]);
      const findData = newLeftItems.filter((item) => item !== leftCheck[i]);
      newLeftItems = findData;
    }
    setLeftCheck([]);
    setLeftItems(newLeftItems);
  }
  function leftCheckHandler(e) {
    if (e.target.checked) {
      setLeftCheck([...leftCheck, e.target.value]);
    }
  }

  function rightCheckHandler(e) {
    if (e.target.checked) {
      setRightCheck([...rightCheck, e.target.value]);
    }
  }

  return (
    <div className="App">
      <div className="App__container">
        <Card leftItems={leftItems} leftCheckHandler={leftCheckHandler} />
        <div className="buttonContainer">
          <button onClick={leftButtonHandler}>Left</button>
          <button onClick={rightButtonHandler}>Right</button>
        </div>
        <Card leftItems={rightItems} leftCheckHandler={rightCheckHandler} />
      </div>
    </div>
  );
}

export default App;
