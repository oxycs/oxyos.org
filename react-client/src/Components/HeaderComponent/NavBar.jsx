import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/oxyosLogo.jpg';

class NavBar extends Component {
  render() {
    return (

      // TODO: Change other links to link to other pages
      <div className="header">

        <div>
          <img id="logoImage" src={logo}></img>
        </div>

        <div>
          <ul id="headerButtons">

            <li className="navButton">
              <Link to="">Events</Link>
            </li>

            <li className="navButton">
              <Link to="">Resources</Link>
            </li>

            <li className="navButton">
              <Link to="">About Us</Link>
            </li>

            <li className="navButton">
              <Link to="">Contact</Link>
            </li>

          </ul>
        </div>

      </div>
    )
  }
}

export default NavBar;
