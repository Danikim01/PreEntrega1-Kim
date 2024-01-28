/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='NavBar'>
        <ul>         
            <Link to="/">
              <div className='logo' style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
                <img src="/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575942028.3034008315266584216067.jpg" alt="" />
              </div>
            </Link>
            <Link className="li" to="/">
              <li>Home</li>
            </Link>
            <Link className="li" to="/category/short T-shirt">
              <li>Short T-shirt </li>
            </Link>
            <Link className="li" to="/category/long T-shirt">
              <li>Long T-shirt </li>
            </Link>
            <Link className="li" to="/category/long pants">
              <li>Long pants</li>
            </Link>
            <Link className="li" to="/category/short pants">
              <li>Short pants</li>
            </Link>
            <Link  className="li" to="/cart">
              <li><CartWidget/></li>
            </Link>
        </ul>
    </nav>
  )
}

export default NavBar