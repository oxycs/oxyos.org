import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <ul id="footerButtons">

            <li className="navButton">
              <Link to="">Instagram</Link>
            </li>

            <li className="navButton">
              <Link to="">Slack</Link>
            </li>

            <li className="navButton">
              <a href="https://www.facebook.com/oxyopensourceclub">Facebook</a>
            </li>

          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer;
