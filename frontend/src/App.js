import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.js';
import SignIn from './SignIn/SignIn.js';
import SignUp from './SignUp/SignUp.js';
import Home from './Home/Home.js'
import Bali from './components/Destination/Bali/Bali.js'

function App(){
  return(  
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Home/Bali' element={<Bali/>}/>
      </Routes>
    </Router>
  );
}

export default App;
