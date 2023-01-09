import { useEffect, useState } from 'react'
import './App.css'
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header"
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Detail from "./Components/Details/Details"
import Category from './Components/Category/Category';
import Cart from './Components/Cart/Cart';


function App() {
  const [theme, setTheme] = useState(false);
  const theSetter={
    backgroundColor: theme? "white": "#070214",
    color: theme ? "black": "white"
  }
  
  const changeTheme =()=>{
    setTheme(!theme)
    // console.log("clicked")
  }

  
  return (
    <div className="App" style={{backgroundColor: theme? "white": "#070214"}}>
      <Router>
      <Header changeTheme={changeTheme} theSetter={theSetter} theme={theme}/>
        <Routes>
          <Route path="/" element={<Body theSetter={theSetter}/>} />
          <Route path="/detail/:id" element={<Detail theSetter={theSetter}/>} />
          <Route path="/category/:cat" element={<Category theSetter={theSetter}/>} />
          <Route path="/cart" element={<Cart theSetter={theSetter}/>} />
        </Routes>
      </Router>
    </div>
  )
}


export default App
