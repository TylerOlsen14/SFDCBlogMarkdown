import React from 'react'
// import {Link} from 'react-router-dom'
import logo from '../assets/LogoMakr_54VoFq copy.png'
import './components.css'
import Navbar from './navbar'
// import { Button, ButtonGroup } from 'reactstrap'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Tucker, Finn, and co. Web Developers" />
      <Navbar />
      {/* <ButtonGroup className="ButtonGroup">
        <Button color="secondary" size="sm">
          <Link className="Link" to="/">Home</Link>
        </Button>
        <br/>
        <Button color="secondary" size="sm">
          <Link className="Link" to="/About">About</Link>
        </Button>
        <br/>
        <Button color="secondary" size="sm">
          <Link className="Link" to="/Contact">Contact</Link>
        </Button>
      </ButtonGroup> */}
    </div>
  )
}

export default Header
