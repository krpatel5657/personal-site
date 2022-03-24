import React from 'react';
import Navbar from './NavBar';
import Home from './pages/Home';
import './App.css';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Routes>
        <Route path='/' component={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
