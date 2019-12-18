import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/LogoMakr_54VoFq copy.png'
import './components.css'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Tucker, Finn, and co. Web Developers"/>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header
