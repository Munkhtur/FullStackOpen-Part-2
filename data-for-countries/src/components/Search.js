import React from 'react';

const Search = ({ searchTerm, handleChange }) => {
  return (
    <>
      find countries <input value={searchTerm} onChange={handleChange} />
    </>
  );
};

export default Search;
