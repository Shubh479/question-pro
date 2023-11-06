import React, { useState } from "react";
import "./App.css";

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
    // setLeftItems(findData);
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
        <div className="App__left_div">
          {leftItems.map((item, id) => {
            return (
              <div key={item.id}>
                <input
                  type="checkbox"
                  onChange={leftCheckHandler}
                  value={item}
                />
                {item}
              </div>
            );
          })}
        </div>
        <div className="buttonContainer">
          <button onClick={leftButtonHandler}>Left</button>
          <button onClick={rightButtonHandler}>Right</button>
        </div>
        <div className="App__left_div">
          {rightItems.map((item, id) => {
            return (
              <div key={item.id}>
                <input
                  type="checkbox"
                  onChange={rightCheckHandler}
                  value={item}
                />
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
