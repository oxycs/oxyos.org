import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/oxyosLogo.jpg';

class NavBar extends Component {
  render() {
    return (
      // TODO: Change other links to link to other pages
      <div className="header">
          <span id="logoLink">
          <Link to="/">
            <img id="logoImage" src={logo}></img>
          </Link>
          </span>
          <ul id="headerButtons">
            <li className="navButton">
              <Link to="/contact" className="buttonLinks">Contact</Link>
            </li>
            <li className="navButton">
              <Link to="/about-us" className="buttonLinks">About Us</Link>
            </li>
            <li className="navButton">
              <Link to="/resources" className="buttonLinks">Resources</Link>
            </li>
            <li className="navButton">
              <Link to="/events" className="buttonLinks">Events</Link>
            </li>
          </ul>
      </div>
    )
  }
}

export default NavBar;
