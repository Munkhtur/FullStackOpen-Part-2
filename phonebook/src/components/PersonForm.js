import React from 'react';

const PersonForm = ({
  handleSubmit,
  handleChange,
  handleNumber,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumber} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default PersonForm;
