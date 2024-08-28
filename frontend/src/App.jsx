import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<h1>HomePage</h1>}/>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;