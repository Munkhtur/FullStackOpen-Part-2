import React from 'react';

const Filter = ({ searchTerm, handleSearch }) => {
  return (
    <div>
      <div>
        Filter shown
        <input value={searchTerm} onChange={handleSearch} />
      </div>
    </div>
  );
};

export default Filter;
