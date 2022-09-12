import './Navbar.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  
  constructor(){
    this.navbarStyle = {
      maxHeight: "0px"
    }
  }
  
  toggleMenu =  () =>{
    if (this.navbarStyle.maxHeight == "0px"){
      this.navbarStyle.maxHeight == "130px"
    }else{
      this.navbarStyle.maxHeight =="0px";
    }
  }

  render() {
    return (
      <div className="navbar">
        <Link id = "homelink" to="/">News Monkey</Link>

        <ul id = "navbarlist"className= "navbarlist" style = {navbarStyle}>
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
        </ul>
            <button className='hamburger'><img className='hamburgerimg' src="https://cdn3.iconfinder.com/data/icons/2px-stroke-simple-line/24/misc-kabob-512.png" alt="" onClick={toggleMenu}/></button>
      </div>
    )
  }
}

export default Navbar