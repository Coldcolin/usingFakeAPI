import React from 'react'
import "./Header.css"
import ThemeLogo from "../../assets/MoonMoon-removebg-preview.png"
import LightLogo from "../../assets/SunImage-removebg-preview.png"
import Logo from "../../assets/LogoLogo-removebg-preview.png";
import {RiShoppingCartFill} from "react-icons/ri"
import {useNavigate} from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
  return (
    <div className="Header">
        <div className="Header-Logo">
            <img src={Logo} alt="Logo-icon" onClick={()=> navigate("/")}/>
        </div>
        <div className="Header-Links">
            <ul>
                <li className="hvr-bounce-to-right" onClick={()=> navigate("/")}>Home</li>
                <li className="hvr-bounce-to-right">Category</li>
                <li className="hvr-bounce-to-right"><RiShoppingCartFill/>{"  "}Cart</li>
            </ul>
        </div>
        <div className="Header-Toggle">
            <div className="toggle-button">
                <img src={ThemeLogo} alt="theme"/>
                <img src={LightLogo} alt="theme"/>
            </div>
        </div>
    </div>
  )
}

export default Header