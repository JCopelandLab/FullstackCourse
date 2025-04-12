import { useState } from "react";

//good,neutral,bad: buttons
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

//statistics sections
const Stat = ({ good, neutral, bad, val1, val2, val3 }) => {
  const total = val1 + val2 + val3;
  const avg = (val1 + val2 + val3) / 3;
  const posPercent = (val1 / total) * 100;

  if (val1 === 0 && val2 === 0 && val3 === 0) {
    return <p>No data captured at this moment</p>;
  }

  return (
    <div>
      <h3>Statistics</h3>
      <table>
        <tbody>
          <tr>
            <td>Good: </td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral: </td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad: </td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>Total: </td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>Average: </td>
            <td>{avg}</td>
          </tr>
          <tr>
            <td>Positive: </td>
            <td>{posPercent}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [selected, setSelected] = useState(null);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const voteFX = (val) => {
    const votesCopy = { ...votes };
    console.log("clicked vote", votesCopy);
  };

  const anecdoteFX = () => {
    const genID = Math.floor(Math.random() * anecdotes.length);

    const match = anecdotes[genID];
    setSelected(match);
  };

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
        <Stat
          good={good}
          neutral={neutral}
          bad={bad}
          val1={good}
          val2={neutral}
          val3={bad}
        />
      </div>
      <div>
        <p>{selected}</p>
        <button onClick={anecdoteFX}>Select Anecdote</button>
        <button onClick={voteFX}>Vote</button>
      </div>
    </div>
  );
};

export default App;
