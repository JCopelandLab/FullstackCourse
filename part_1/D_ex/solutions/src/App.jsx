import { useState } from "react";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Stats = ({ text, arith }) => (
  <li key={text}>
    {text}: {arith}
  </li>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const newValue = (callback, num) => {
    let newValue = num + 1;
    callback(newValue);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button
          text="Good"
          onClick={() => {
            newValue(setGood, good);
          }}
        />
        <Button
          text="Neutral"
          onClick={() => {
            newValue(setNeutral, neutral);
          }}
        />
        <Button
          text="Bad"
          onClick={() => {
            newValue(setBad, bad);
          }}
        />
      </div>
      <div>
        <h2>Statistics</h2>
        <ul>
          <Stats text="Good" arith={good} />
          <Stats text="Neutral" arith={neutral} />
          <Stats text="Bad" arith={bad} />
        </ul>
      </div>
    </div>
  );
};

export default App;
