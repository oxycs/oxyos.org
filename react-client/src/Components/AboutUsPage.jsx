import React, { Component } from 'react';

class AboutUsPage extends Component {
  render() {
    return (
      <section>
        <div id="about-us-content">
          <div id="mission">
            <p style={{ fontSize:34 }}>What We Do</p>
            <p>Our mission is to create an inclusive and collaborative community
               and to provide resources and opportunities for every student
                interested in computer technology.</p>
          </div>

          <div id="whomst">
            <p style={{ fontSize:34 }}>Who We Are</p>
            <ul>
              <li>Emily Tran, <i>President</i></li>
              <li>Stephanie Angulo, <i>Vice President</i></li>
              <li>Patrick Bender, <i>Treasurer</i></li>
              <li>Chloe Zeller, <i>Head of Projects</i></li>
              <li>Luis Figeroa, <i>CS Coordinator</i></li>
              <li>Allie Brenner, <i>Non-CS Coordinator</i></li>
              <li>Teagan Mucher, <i>Network Outreach Coordinator</i></li>
              <li>William Chen, <i>Content Creator</i></li>
              <li>deGrasse Schrader, <i>Social Media Coordinator</i></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default AboutUsPage;
