import { useState } from "react";
import "./App.css";

const contactList = [
  { name: "Arto Hellas", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
];

function App() {
  const [contacts, setContacts] = useState(contactList);
  const [filter, setFilter] = useState(false);
  const [input, setInput] = useState("");

  const handleInputField = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(!filter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newObj = {
      name: input,
      id: contacts.length + 1,
      important: true,
    };

    console.log("clicked submit");
  };

  return (
    <div>
      <h2>PhoneBook Application</h2>
      <form>
        <button onClick={handleFilter}>Filter {!filter ? "off" : "on"}</button>
        <label htmlFor="nameInput">Name</label>
        <input
          id="nameInput"
          type="text"
          value={input}
          onChange={handleInputField}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
