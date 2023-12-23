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
            <Link className="li" to="/category/electronics">
              <li>Electronics</li>
            </Link>
            <Link className="li" to="/category/women's clothing">
              <li>Women's clothing</li>
            </Link>
            <Link className="li" to="/category/men's clothing">
              <li>Men's clothing</li>
            </Link>
            <Link className="li" to="/category/jewelery">
              <li>Jewelery</li>
            </Link>
            <li className="li"><CartWidget/></li>
        </ul>
    </nav>
  )
}

export default NavBar