import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const NavBar = () => {

  return (
    <nav>
      <ul>
        <li><img scr={'../../../public/logo.png'} className="logo-img"></img></li>
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/characters">Characters</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar