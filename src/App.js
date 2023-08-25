import React from 'react'; 
import VendingMachine from './components/VendingMachine';
import Snack1 from './components/Snack1';
import Snack2 from './components/Snack2';
import Snack3 from './components/Snack3';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <VendingMachine />
        <Routes>
          <Route path="/snack1" element={<Snack1 />} />
          <Route path="/snack2" element={<Snack2 />} />
          <Route path="/snack3" element={<Snack3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;