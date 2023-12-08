import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const history = useNavigate();

  return (
    <div>
      <h2>You are Successfully Logged out</h2>
    </div>
  );
};

export default Logout;
