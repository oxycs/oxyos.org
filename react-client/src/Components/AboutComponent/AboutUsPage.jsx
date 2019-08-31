import React, { Component } from 'react';
import placeholder from '../../Assets/placeholder.png';
import './AboutUsPage.css';

function What() {
  return(
    <React.Fragment>
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
    </React.Fragment>
  );
}

function Who() {
  return(
    <div className="aboutTitle">
      <p>Who We Are</p>
    </div>
  );
}

function AboutTile(props) {
  return(
    <div class="about-info">
      <img class="headshot" src={placeholder}></img>
      <div>{props.name}, <i>{props.position}</i></div>
    </div>
  );
}

function PhotoGrid() {
  return(
    <div class="whomst">
      <div class="photo-grid">
        <AboutTile name="Teagan Mucher" position="Co-President"/>
        <AboutTile name="Alexis Hale" position="Co-President"/>
        <AboutTile name="Joey Rose" position="CS Event Coordinator"/>
        <AboutTile name="Tammie Oh" position="Non-CS Event Coordinator"/>
        <AboutTile name="Di Hu" position="Head of Projects"/>
        <AboutTile name="Scott Morris" position="Public Relations"/>
        <AboutTile name="Madeline Martell" position="Network Outreach Coordinator"/>
        <AboutTile name="Sophia Yang" position="Public Relations"/>
        <AboutTile name="Patrick Bender" position="Treasurer"/>
      </div>
    </div>
  );
}

class AboutUsPage extends Component {
  render() {
    return (
      <div class="main-container">
        <div id="about-us">
          <What />
          <Who />
          <PhotoGrid />
        </div>
      </div>
    )
  }
}

export default AboutUsPage;
