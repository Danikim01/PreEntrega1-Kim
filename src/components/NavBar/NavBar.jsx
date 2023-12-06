import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'





const NavBar = () => {
  return (
    <nav className='NavBar'>
        <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Gallery</li>
            <li><CartWidget/></li>
        </ul>
    </nav>
  )
}

export default NavBar