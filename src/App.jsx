import { useEffect, useState } from 'react'
import './App.css'
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header"
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Detail from "./Components/Details/Details"


function App() {

  
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
      </Router>
    </div>
  )
}


export default App
