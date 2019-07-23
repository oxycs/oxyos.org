import React, { Component } from 'react';
import banner from '../Assets/2018-0608_JacarandaTrees-07.jpg';

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${banner})`
};

class HomePage extends Component {
  render() {
    return (
      <section id="backgroundImg" style={ sectionStyle}>
  	    <div id="homeBody" className="row">
  	    	<div id="homeTitle" className="column">
  		        <h1>Oxy</h1>
  		        <h1><span>Open</span></h1>
  		        <h1>Source</h1>
  	        </div>
  	        <div id="homeText" className="column">
  		        <p>Our mission is to create an inclusive and collaborative community around Computer Science and provide
              resources and opportunities for all Oxy students</p>
  			    </div>
	        </div>
      </section>
    )
  }
}

export default HomePage;
