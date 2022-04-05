import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' exact />
          <Route path='/products'/>
          <Route path='/services'/>
        </Routes>
    </div>
  );
}

export default App;
