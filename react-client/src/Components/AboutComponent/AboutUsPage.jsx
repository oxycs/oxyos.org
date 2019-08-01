import React, { Component } from 'react';
import placeholder from '../../Assets/placeholder.png';
import './AboutUsPage.css';

class AboutUsPage extends Component {
  render() {
    return (
      <div class="main-container">
        <div id="about-us">

          <div className="aboutTitle">
              <p>What We Do</p>
          </div>

          <div id="aboutUsContent">
            <div id="mission">
              <p>Our mission is to create an inclusive and collaborative community around Computer Science and provide
              resources and opportunities for all Oxy students
              </p>
            </div>
          </div>

          <div className="aboutTitle">
            <p>Who We Are</p>
          </div>

          <div id="whomst">
            <div id="photo-grid">
              <div class="about-info">
                <img src={placeholder}></img>
                <div>Teagan Mucher, <i>Co-President</i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUsPage;
