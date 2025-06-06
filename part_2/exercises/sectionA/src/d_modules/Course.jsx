const Course = ({ data }) => {
  return data.map((i) => {
    return (
      <>
        <h1 key={i.name}>{i.name}</h1>
        <div key={i.id}>
          {i.parts.map((i) => {
            return (
              <div key={i.id + i.name}>
                <ul key={i.name}>
                  {i.name} has {i.exercises} exercises
                </ul>
              </div>
            );
          })}
        </div>
        <p>
          <strong>
            Total of{" "}
            {i.parts.reduce((sum, i) => {
              return sum + i.exercises;
            }, 0)}{" "}
            exercises
          </strong>
        </p>
      </>
    );
  });
};

export default Course;
