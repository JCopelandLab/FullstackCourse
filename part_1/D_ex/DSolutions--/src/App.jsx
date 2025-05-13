import { useState } from "react";

//Buttons Component; good, neutral, bad
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

//statistics Component
const Stat = ({ good, neutral, bad, val1, val2, val3 }) => {
  //*averageScore (the feedback values are: good 1, neutral 0, bad -1) and the percentage of positive feedback.
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

const Anecdote = ({
  selected,
  votesObj,
  maxVoteFX,
  voteKeyFX,
  anecArr,
  currAnecVote,
}) => {
  //highestVote properties
  const maxVote = maxVoteFX({ votesObj });

  const popularAnecdote = anecArr[voteKeyFX({ votesObj, maxVote })];

  const anecVote = currAnecVote({ votesObj, selected });

  console.log(anecVote);
  return (
    <>
      <div>
        <h3>Most Popular Anecdote</h3>
        <p>
          {!popularAnecdote ? (
            "No votes made"
          ) : (
            <>
              <i>{popularAnecdote}</i> <strong>has {maxVote} votes</strong>
            </>
          )}
        </p>
      </div>
      <div>
        <h3>Current Generated Anecdote</h3>
        <p>
          <i>{selected}</i> <strong>has {anecVote} votes</strong>
        </p>
      </div>
    </>
  );
};

const App = () => {
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

  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState(null);
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [maxVote, setMaxVote] = useState(0);
  const selAnecIndex = anecdotes.indexOf(selected);

  const messageFx = () => {
    setMessage("Select an Anecdote");

    setTimeout(() => {
      setMessage(null);
    }, 1000);
  };

  //returns max vote
  const maxVoteFX = ({ votesObj }) => {
    const highestVote = Math.max(...Object.values(votesObj));

    return highestVote === 0 ? null : highestVote;
  };

  //returns current Anedote vote
  const anecVoteFX = ({ votesObj, selected }) => {
    const allVotes = Object.values(votesObj);

    return allVotes[selAnecIndex];
  };

  //returns the key of the highest vote
  const voteKeyFX = ({ votesObj, maxVote }) => {
    const values = Object.values(votesObj);

    return values.indexOf(maxVote);
  };

  const voteFX = () => {
    let votesObjCopy = { ...votes };

    if (!selected) {
      return messageFx();
    }

    votesObjCopy[selAnecIndex] += 1;
    setVotes(votesObjCopy);
    const values = Object.values(votesObjCopy);
    setMaxVote(Math.max(...values));

    console.log(maxVote);
  };

  const anecdoteFX = () => {
    const genID = Math.floor(Math.random() * anecdotes.length);

    setSelected(anecdotes[genID]);
  };

  const newValue = (callback, num) => {
    let newValue = num + 1;
    callback(newValue);
  };

  const elementStyles = {
    header: {
      background: "red",
      color: "yellow",
      padding: "5px",
    },
    mainContainer: {
      border: "1px solid black",
      padding: "12px",
    },
    statConfig: {
      border: "2px solid blue",
      padding: "5px",
      margin: "2px",
    },
    contentPanel: {
      border: "1px solid black",
      padding: "10px 5px 5px 10px",
      margin: "5px",
    },
  };

  return (
    <div style={elementStyles.mainContainer}>
      <h1 style={elementStyles.header}>Give Feedback</h1>
      <div style={elementStyles.statConfig}>
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

        <div>
          <Stat
            good={good}
            neutral={neutral}
            bad={bad}
            val1={good}
            val2={neutral}
            val3={bad}
          />
        </div>
      </div>
      <div>
        <div style={elementStyles.statConfig}>
          <button onClick={anecdoteFX}>
            {!selected ? "Select Anecdote" : "Next Anecdote"}
          </button>
          <button onClick={voteFX}>Vote</button>
          {<p>{message}</p>}
          {!selected ? null : (
            <Anecdote
              selected={selected}
              votesObj={votes}
              maxVoteFX={maxVoteFX}
              voteKeyFX={voteKeyFX}
              anecArr={anecdotes}
              currAnecVote={anecVoteFX}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
