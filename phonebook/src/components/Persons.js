import React from 'react';

const Persons = ({ personToShow }) => {
  return (
    <div>
      {personToShow.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </div>
  );
};

export default Persons;
