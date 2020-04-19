import React from 'react';

const Persons = ({ personToShow, handleClick }) => {
  return (
    <div>
      {personToShow.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
          <button onClick={() => handleClick(person.id)}>delete</button>
        </li>
      ))}
    </div>
  );
};

export default Persons;
