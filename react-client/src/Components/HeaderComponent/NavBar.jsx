import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      
      // TODO: Change other links to link to other pages
      <header>
        <ul id="headerButtons">
          <li className="navButton">
            <Link to="">Home</Link>
          </li>

          <li className="navButton">
            <Link to="">About</Link>
          </li>
          <li className="navButton">
            <Link to="">Contact</Link>
          </li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
