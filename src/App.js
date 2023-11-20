import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Maininfo from './components/maininfo';
import Subinfo from './components/subinfo';

function App() {
  return (
    <div>
      <Navbar />
      <Maininfo />
      <Subinfo /> 
    </div>
  );
}

export default App;
