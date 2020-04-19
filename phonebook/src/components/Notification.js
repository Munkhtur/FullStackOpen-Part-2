import React from 'react';

const Notification = ({ errorMesage, successMessage }) => {
  if (errorMesage === null || successMessage === null) {
    return null;
  }
  if (errorMesage) {
    return <div className='error'>{errorMesage}</div>;
  } else {
    return <div className='success'>{successMessage}</div>;
  }
};

export default Notification;
