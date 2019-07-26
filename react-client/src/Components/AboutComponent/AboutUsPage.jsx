import React, { Component } from 'react';
import placeholder from '../../Assets/placeholder.png';
import './AboutUsPage.css';

class AboutUsPage extends Component {
  render() {
    return (
      <div class="main-container">
        <section>
          <section id="about-us">

            <div>
                <p style={{ fontSize:34 }}>What We Do</p>
            </div>

            <div id="about-us-content">
              <div id="mission">
                <p>Our mission is to create an inclusive and collaborative community around Computer Science and provide
                resources and opportunities for all Oxy students
                </p>
              </div>
            </div>

            <div>
              <p style={{ fontSize:34 }}>Who We Are</p>
            </div>

            <div id="whomst">
              <div id="photo-grid">
                <div class="about-info">
                  <img src={placeholder}></img>
                  <div>Teagan Mucher, <i>Co-President</i></div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    )
  }
}

export default AboutUsPage;