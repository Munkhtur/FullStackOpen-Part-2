import React from 'react';
import Weather from './Weather';

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital : {country.capital}</p>
      <p>Population : {country.population}</p>
      <h3>Languages</h3>
      {country.languages.map((lang) => (
        <li key={lang.name}>{lang.name}</li>
      ))}
      <div>
        <img src={country.flag} width={'250px'} />
      </div>
      <div>
        <Weather city={country.capital} />
      </div>
    </div>
  );
};

export default Country;
