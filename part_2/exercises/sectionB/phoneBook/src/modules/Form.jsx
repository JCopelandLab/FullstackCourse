const Form = ({
  newName,
  handleNameField,
  newNumber,
  handleNumberField,
  handleSubmit,
  handleFilter,
}) => {
  return (
    <form>
      <div>
        Name: <input type="text" value={newName} onChange={handleNameField} />
      </div>
      <div>
        Number:
        <input type="number" value={newNumber} onChange={handleNumberField} />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      Filter: <input type="text" onChange={handleFilter} />
    </form>
  );
};

export default Form;
