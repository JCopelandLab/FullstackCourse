import { useState } from "react";

const App = () => {
  let [goodFeed, setGoodFeed] = useState(0);
  let [neutralFeed, setNeutralFeed] = useState(0);
  let [badFeed, setBadFeed] = useState(0);

  const handleClick = (func, val) => {
    const sum = (val += 1);
    func(sum);
  };

  return (
    <>
      <h2>Give FeedBack</h2>
      <button
        onClick={() => {
          handleClick(setGoodFeed, goodFeed);
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          handleClick(setNeutralFeed, neutralFeed);
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          handleClick(setBadFeed, badFeed);
        }}
      >
        Bad
      </button>
      <h3>Statistics</h3>
      <p>Good {goodFeed}</p>
      <p>Neutral {neutralFeed}</p>
      <p>Bad {badFeed}</p>
    </>
  );
};

export default App;
