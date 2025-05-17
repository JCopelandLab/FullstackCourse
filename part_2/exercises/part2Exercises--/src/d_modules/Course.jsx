const Course = ({ courses }) => {
  const contentBundle = courses.map((i) => {
    return (
      <div>
        <h1 key={i.id}>{i.name}</h1>
        {i.parts.map((i) => {
          return (
            <div>
              <ul key={i.id}>
                {i.name} has {i.exercises} exercises
              </ul>
            </div>
          );
        })}
        <div>
          <strong>
            <p>
              Total of{" "}
              {i.parts.reduce((sum, i) => {
                return sum + i.exercises;
              }, 0)}{" "}
              exercises
            </p>
          </strong>
        </div>
      </div>
    );
  });

  return contentBundle;
};

export default Course;
