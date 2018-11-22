import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/oxyosLogo.jpg';

class NavBar extends Component {
  render() {
    return (

      // TODO: Change other links to link to other pages
      <div className="header">

        <div>

          <Link to="/">
            <img id="logoImage" src={logo}></img>
          </Link>
        </div>

        <div>
          <ul id="headerButtons">

            <li className="navButton">
              <Link to="/events">Events</Link>
            </li>

            <li className="navButton">
              <Link to="/resources">Resources</Link>
            </li>

            <li className="navButton">
              <Link to="/about-us">About Us</Link>
            </li>

            <li className="navButton">
              <Link to="/contact">Contact</Link>
            </li>

          </ul>
        </div>

      </div>
    )
  }
}

export default NavBar;
