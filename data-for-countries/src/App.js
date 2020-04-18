import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import Countries from './components/Countries';
import Country from './components/Country';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [countriesToShow, setcountriesToShow] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const result = countries.filter((country) =>
      country.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    setcountriesToShow(result);
  }, [searchTerm]);

  // const listCountries = countiresToShow.length < 10 ? countiresToShow : '';

  return (
    <div>
      <Search searchTerm={searchTerm} handleChange={handleChange} />
      {countriesToShow.length === 1 ? (
        <Country country={countriesToShow[0]} />
      ) : (
        <Countries
          listCountries={countriesToShow}
          setSearchTerm={setSearchTerm}
        />
      )}
    </div>
  );
};

export default App;
