import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Patient from './Patient';
import Docto from './Docto';
import Home from './Home';
import Navigation from './Navigation';
import './App.css';



function App () {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/doctor' element={<Docto/>}/>
      <Route path='/patient' element={<Patient/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
