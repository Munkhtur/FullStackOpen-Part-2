import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data);
    });
  }, []);

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(true);
  console.log(persons);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    if (
      persons.some(
        (person) =>
          person.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
      )
    ) {
      window.alert(`${newName} already exist`);
      return;
    }
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (
      persons.some(
        (person) =>
          person.name.toLocaleLowerCase() === e.target.value.toLocaleLowerCase()
      )
    ) {
      setShowAll(false);
    }
    if (searchTerm.length <= 1) {
      setShowAll(true);
    }
  };

  const personToShow = showAll
    ? persons
    : persons.filter(
        (person) =>
          person.name.toLocaleLowerCase() === searchTerm.toLocaleLowerCase()
      );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleSearch={handleSearch} />
      <h3>Add new contact</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleNumber={handleNumber}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons personToShow={personToShow} />
    </div>
  );
};

export default App;
