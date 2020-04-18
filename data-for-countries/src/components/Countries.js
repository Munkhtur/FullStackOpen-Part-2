import React from 'react';

const Countries = ({ listCountries, setSearchTerm }) => {
  const handleClick = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      {listCountries.length <= 10 ? (
        listCountries.map((country) => (
          <li key={country.name}>
            {country.name}{' '}
            <button value={country.name} onClick={handleClick}>
              show
            </button>
          </li>
        ))
      ) : (
        <p>The result is too long, specify search</p>
      )}
    </div>
  );
};

export default Countries;
