import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./DropDown.css"

const DropDown = ({cats, set}) => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className="Drop-down">
        <ul>
            <NavLink to="/" className="Nav" onClick={()=> set(false)}><li>Home</li></NavLink>
            <li onClick={()=> setToggle(!toggle)} className="Nav">Category</li>
            {
                toggle && cats?.map((i, index)=>(
                    <Link key={index} className="Link" to={`/category/${i}`} onClick={()=> set(false)}>
                    <li>{i}</li>
                    </Link>
                ))
            }
            <NavLink to="cart" className="Nav" onClick={()=> set(false)}><li>Cart</li></NavLink>
        </ul>
    </div>
  )
}

export default DropDown