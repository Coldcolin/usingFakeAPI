import { AllItems } from './Components/AllItems';
import Detail from "./Components/Detail";
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./Components/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<AllItems />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
    </div>
  )
}


export default App
