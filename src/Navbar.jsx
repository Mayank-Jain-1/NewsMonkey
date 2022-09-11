import './Navbar.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  
  render() {
    return (
      <div className="navbar">
        <Link id = "homelink" to="/">News Monkey</Link>
        <div>

        <ul className= "navbarlist">
          <li className= "navbarli">
            <Link to="/" className="navbarlink">Home</Link> 
          </li>
          <li className= "navbarli">
            <Link to="/whatsnew" className="navbarlink">What's New</Link> 
          </li>
          <li className= "navbarli">
<Link to="/about" className="navbarlink">About</Link>
          </li>
          <li className= "navbarli">
<Link to="/" className="navbarlink loginButton">Join Us</Link>
          </li>
          <li className='navbarli'>
            <button className='hamburger'><img className='hamburgerimg' src="https://cdn3.iconfinder.com/data/icons/2px-stroke-simple-line/24/misc-kabob-512.png" alt=""/></button>
          </li>
        </ul>
        </div>
      </div>
    )
  }
}

export default Navbar