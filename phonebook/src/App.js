import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import { getAll, create, update, remove } from './services/persons';
import Notification from './components/Notification';
import './App.css';

const App = () => {
  useEffect(() => {
    getAll()
      .then((data) => {
        setPersons(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const result = persons.some(
      (person) =>
        person.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
    );
    if (result) {
      const existing = persons.filter(
        (person) =>
          person.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
      );
      const answer = window.confirm(
        `${existing[0].name} already exist, replace the number? `
      );
      if (answer) {
        const id = existing[0].id;
        const updatePerson = { ...existing[0], number: newNumber };
        update(id, updatePerson)
          .then((data) => {
            setPersons(
              persons.map((person) => (person.id !== id ? person : data))
            );
            setSuccessMessage(`${updatePerson.name} is updated`);
            setNewName('');
            setNewNumber('');
          })
          .catch((error) => {
            setErrorMessage(`${error} occured`);
          });
      }
    } else {
      create(newPerson)
        .then((data) => {
          setPersons(persons.concat(data));
          setSuccessMessage(`${newPerson.name} is created`);
        })
        .catch((error) => {
          setErrorMessage(`${error} occured`);
        });
      setNewName('');
      setNewNumber('');
    }
  };
  const handleClick = (id) => {
    const personToDelete = persons.find((p) => p.id === id);
    const answer = window.confirm(`Delete ${personToDelete.name} ?`);
    if (answer) {
      remove(id)
        .then((data) => {
          setPersons(persons.filter((person) => person.id !== id));
          setErrorMessage(`${personToDelete.name} is deleted`);
          console.log(data);
        })
        .catch((error) => {
          setErrorMessage(`${personToDelete.name} could not be found`);
        });
    }
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
      {errorMessage !== '' || successMessage !== '' ? (
        <Notification
          errorMesage={errorMessage}
          successMessage={successMessage}
        />
      ) : (
        ''
      )}
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
      <Persons personToShow={personToShow} handleClick={handleClick} />
    </div>
  );
};

export default App;
