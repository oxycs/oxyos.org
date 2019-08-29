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

          <div class="whomst">
            <div class="photo-grid">
              <div class="about-info">
                <img class="headshot" src={placeholder}></img>
                <div>Teagan Mucher, <i>Co-President</i></div>
              </div>
              <div class="about-info">
                <img class="headshot" src={placeholder}></img>
                <div>Alexis Hale, <i>Co-President</i></div>
              </div>
              <div class="about-info">
                <img class="headshot" src={placeholder}></img>
                <div>Joey Rose, <i>CS Event Coordinator</i></div>
              </div>
              <div class="about-info">
                <img class="headshot" src={placeholder}></img>
                <div>Tammie Oh, <i>Non-CS Event Coordinator</i></div>
              </div>
              <div class="about-info">
                <img class="headshot" src={placeholder}></img>
                <div>Di Hu, <i>Head of Projects</i></div>
              </div>
              <div class="about-info">
                <img class="headshot" src={placeholder}></img>
                <div>Scott Morris, <i>Public Relations</i></div>
              </div>
              <div class="about-info">
                <img class="headshot" src={placeholder}></img>
                <div>Madeline Martell, <i>Network Outreach Coordinator</i></div>
              </div>
              <div class="about-info">
                <img class="headshot" src={placeholder}></img>
                <div>Sophia Yang, <i>Public Relations</i></div>
              </div>
              <div class="about-info">
                <img class="headshot" src={placeholder}></img>
                <div>Patrick Bender, <i>Treasurer</i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUsPage;
