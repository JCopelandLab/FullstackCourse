import { useEffect, useState } from "react";
import Contact from "./modules/Contact";
import Form from "./modules/Form";
import "./App.css";

const contactList = [
  { name: "Arto Hellas", number: "040-123456", id: 1, important: true },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2, important: false },
  { name: "Dan Abramov", number: "12-43-234345", id: 3, important: true },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
    important: false,
  },
];

function App() {
  const [contacts, setContacts] = useState(contactList);

  const [newNumber, setNewNumber] = useState(undefined);
  const [newName, setNewName] = useState(undefined);
  const [filter, setFilter] = useState(undefined);

  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  //conditional array based on filter variable data
  const filteredContacts = contacts.filter((i) => {
    return filter ? i.name.toLowerCase().includes(filter) : contacts;
  });

  useEffect(() => {
    if (filter) {
      console.log(filter, filteredContacts);
    }
  }, [filter]);

  const handleNameField = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberField = (e) => {
    e.preventDefault();
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //conditional stack of requirements to add new data
    //name restrictions
    if (newName === "" || newName.length > 16) {
      return window.alert("Check Inputs and try again. Values required");
    }
    //name repeat restriction
    if (
      contacts.find((i) => {
        return i.name === newName;
      })
    ) {
      return window.alert(`The name ${newName}; already exists`);
    }
    //number restriction
    if (newNumber === "") {
      return window.alert("Number is required!");
    }
    //number copy restriction
    if (
      contacts.find((i) => {
        i.number === newNumber;
      })
    ) {
      return window.alert(`${newNumber}; already exists`);
    }

    const newObj = {
      name: newName,
      number: newNumber,
      id: contacts.length + 1,
      important: true,
    };

    setContacts(contacts.concat(newObj));
    window.alert(`new contact; ${newName} added!`);
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>PhoneBook Application</h2>
      <Form
        newName={newName}
        newNumber={newNumber}
        handleNameField={handleNameField}
        handleNumberField={handleNumberField}
        handleSubmit={handleSubmit}
        handleFilter={handleFilter}
      />
      <div>
        <Contact data={filteredContacts} />
      </div>
    </div>
  );
}

export default App;
