import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/LogoMakr_54VoFq copy.png'
import './components.css'
import { Button, ButtonGroup } from 'reactstrap'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Tucker, Finn, and co. Web Developers"/>
      </div>
      <div className="links">
        <ButtonGroup vertical className="bg-primary">
          <Button color="info">
            <Link to="/" className="text-warning">Home</Link>
          </Button>
          <Button color="secondary">
            <Link to="/About" className="text-danger">About</Link>
          </Button>
          <Button color="warning">
            <Link to="/Contact" className="text-muted">Contact</Link>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default Header
