import React, { Component } from 'react';

class AboutUsPage extends Component {
  render() {
    return (
      <div id="about-us-content">
        <section>
          <div id="mission">
            <h3>What We Do</h3>
            <p>Our mission is to create an inclusive and collaborative community
               and to provide resources and opportunities for every student
                interested in computer technology.</p>
          </div>
        </section>

        <section>
          <div id="whomst">
            <h3>Who We Are</h3>
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
        </section>
      </div>
    )
  }
}

export default AboutUsPage;
