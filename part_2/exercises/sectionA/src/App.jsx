import Course from "./d_modules/Course";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const hook = () => {
    console.log("Effect");
    axios.get("http://localhost:3001/courses").then((response) => {
      console.log("promise fulfilled");
      setData(response.data);
    });
  };

  useEffect(hook, []);

  return (
    <div>
      <h1>OSINT Bot Raid </h1>
      <Course data={data} />
    </div>
  );
}

export default App;
