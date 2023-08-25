import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div>
      <h1>Welcome to the Vending Machine!</h1>
      <Link to="/snack1">Snack 1</Link>
      <Link to="/snack2">Snack 2</Link>
      <Link to="/snack3">Snack 3</Link>
    </div>
  );
}

export default VendingMachine;