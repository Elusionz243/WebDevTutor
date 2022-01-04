import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './layout/Home';
import Navbar from './layout/common/Navbar'

import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={ <Home /> } />
      </Routes>
    </>
  );
}

