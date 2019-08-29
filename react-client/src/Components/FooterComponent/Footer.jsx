import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="footer">
          <div id="social">
            <h1>Open<span>Source</span></h1>
            <h3>Occidental College</h3>
            <div id="socialLinks">
              <a href="https://www.facebook.com/oxyopensourceclub"><img src={require('../../Assets/facebook.jpg')}></img></a>
              <a href="https://www.instagram.com/oxyopensource/"><img src={require('../../Assets/instagram.jpg')}></img></a>
              <a href="https://bit.ly/oxyos-slack-spring2019"><img src={require('../../Assets/slack.jpg')}></img></a>
              <a href="https://github.com/oxy-os/oxyos.org"><img src={require('../../Assets/github.jpg')}></img></a>
            </div>
          </div>
          <div id="contact">
            <div className="contactText">
              <p>1600 Campus Road</p>
            </div>
            <div className="contactText">
              <p>Los Angeles, CA</p>
            </div>
            <div className="contactText">
              <p>90041</p>
            </div>
            <div className="contactText">
              <p><a href="mailto:opensource@oxy.edu">opensource@oxy.edu</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
