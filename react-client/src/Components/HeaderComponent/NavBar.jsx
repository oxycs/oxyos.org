import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/oxyosLogo.jpg';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="header">

          <div className="logo">
            <span id="logoLink">
            <Link to="/">
              <img id="logoImage" src={logo}></img>
            </Link>
            </span>
          </div>

          <div className="buttons">
            <div className="headerButtons">
              <div className="navButton">
                <Link to="/contact" className="buttonLinks">Contact</Link>
              </div>
              <div className="navButton">
                <Link to="/about-us" className="buttonLinks">About Us</Link>
              </div>
              <div className="navButton">
                <Link to="/resources" className="buttonLinks">Resources</Link>
              </div>
              <div className="navButton">
                <Link to="/events" className="buttonLinks">Events</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;
