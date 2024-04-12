import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginController from './Login/Login';
import CalculatorController from './Calculator/CalculatorController';
import { Link, BrowserRouter , Routes,Route } from 'react-router-dom';
function App() {

  return (
    <div>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginController />}/>
        <Route path="/calculator" element={<CalculatorController />} />
        
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
