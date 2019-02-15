import React, { Component } from 'react';
import banner from '../Assets/2018-0608_JacarandaTrees-07.jpg';

class HomePage extends Component {
  render() {
    return (
	    <div id="homeBody" className="row">
	    	<div id="homeTitle" className="column">
		        <h1>Oxy</h1>
		        <h1><span>Open</span></h1>
		        <h1>Source</h1>
	        </div>
	        <div id="homeText" className="column">
		        <p>Welcome to the homepage of Oxy Open Source! </p>
			</div>
	    </div>
    )
  }
}

export default HomePage;
