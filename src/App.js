import Footer from './components/Footer';
import React, {useState} from 'react';
import Home from './components/Home';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Recommended from './components/Recommended';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Search from './components/Search';

function App() {


  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </Router>
    
  );
}

export default App;
