import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import About from './components/About';
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
        <About/>
        <Routes>
          <Route path='/' exact />
          <Route path='/products'/>
          <Route path='/services'/>
        </Routes>
    </div>
  );
}

export default App;
