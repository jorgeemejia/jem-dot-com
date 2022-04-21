import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Project from './components/Project';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//fonts
import "./fonts/BOMBFONT TRIAL.ttf";

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Project/>
        <Routes>
          <Route path='/' exact />
          <Route path='/products'/>
          <Route path='/services'/>
        </Routes>
    </div>
  );
}

export default App;
