import React from 'react';

const Course = (props) => {
  const Header = (props) => <h1>{props.course.name}</h1>;
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    );
  };
  const Content = (props) => {
    return (
      <>
        <div>
          {props.course.map((part) => (
            <Part key={part.name} part={part} />
          ))}
        </div>
      </>
    );
  };

  const Total = (props) => {
    console.log(props.course);
    const total = props.course.reduce((s, p) => {
      return s + p.exercises;
    }, 0);
    return (
      <p>
        <strong>Number of exercises {total} </strong>
      </p>
    );
  };
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course.parts} />
      <Total course={props.course.parts} />
    </div>
  );
};

export default Course;
