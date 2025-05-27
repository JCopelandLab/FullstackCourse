const Contact = ({ data }) => {
  return (
    <div>
      <h2>Contacts</h2>
      {data.map((i) => {
        return (
          <p key={i.id}>
            {i.name} - {i.number}
          </p>
        );
      })}
    </div>
  );
};

export default Contact;
