import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import About from './components/About';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import can from './images/can_2.png';

//fonts
import "./fonts/BOMBFONT TRIAL.ttf";

function App() {
  const [animationEnded, setAnimationHasEnded] = useState(false);

  function animationHandler(){
      console.log('Animation Ended');
      setAnimationHasEnded(true);
  }
  return (
            // <div className='container'>
        //     {animationEnded ? <h1 className='h1'>Jorge Mejia</h1> :
        //     <img className='can' src={can} alt="can" onAnimationEnd={animationHandler}/>}
        // </div>
    <div className='page'>
      {!animationEnded ? <img className='can' src={can} alt ='can' onAnimationEnd={animationHandler}/> :
                        <div className='site'>
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
    }
    </div>
  );
}

export default App;
