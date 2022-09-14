import "./Navbar.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      navbarStyle: {
        maxHeight: "0px"
      },
    };
  }

  toggleMenu = () => {
    if (this.state.navbarStyle.maxHeight === "0px") {
      this.setState({
        navbarStyle:{
          transition: "0.5s",
          maxHeight: "300px"
        }
      })
    } else {
      this.setState({
        navbarStyle:{
          transition: "0.5s",
          maxHeight: "0px"
        }
      })
    }
  };

  render() {
    return (
      <div className="navbar">
          <Link id="homelink" to="/">
            News Monkey
          </Link>

          <ul
            id="navbarlist1"
            className="navbarlist1"
          >
            <li className="navbarli">
              <Link to="/" className="navbarlink">
                Home
              </Link>
            </li>
            <li className="navbarli">
              <Link to="/whatsnew" className="navbarlink">
                What's New
              </Link>
            </li>
            <li className="navbarli">
              <Link to="/about" className="navbarlink">
                About
              </Link>
            </li>
            <li className="navbarli">
              <Link to="/" className="navbarlink loginButton">
                Join Us
              </Link>
            </li>
          </ul>
        <button className="hamburger">
          <img
            className="hamburgerimg"
            src="https://cdn3.iconfinder.com/data/icons/2px-stroke-simple-line/24/misc-kabob-512.png"
            alt=""
            onClick={this.toggleMenu}
          />
        </button>
        <ul
          id="navbarlist2"
          className="navbarlist2"
          style={this.state.navbarStyle}
        >
          <li className="navbarli">
            <Link to="/" className="navbarlink">
              Home
            </Link>
          </li>
          <li className="navbarli">
            <Link to="/whatsnew" className="navbarlink">
              What's New
            </Link>
          </li>
          <li className="navbarli">
            <Link to="/about" className="navbarlink">
              About
            </Link>
          </li>
          <li className="navbarli">
            <Link to="/" className="navbarlink loginButton">
              Join Us
            </Link>
          </li>
        </ul>
        <button className="hamburger">
          <img
            className="hamburgerimg"
            src="https://cdn3.iconfinder.com/data/icons/2px-stroke-simple-line/24/misc-kabob-512.png"
            alt=""
            onClick={this.toggleMenu}
          />
        </button>
      </div>
    );
  }
}

export default Navbar;
