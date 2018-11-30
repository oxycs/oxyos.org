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
		        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel pharetra sem, sit amet rutrum lorem. Vestibulum eu condimentum urna, eu aliquet tortor. Curabitur volutpat turpis nisi, sed porttitor turpis lobortis a. Mauris eu sapien turpis. Nam id orci blandit, venenatis orci vel, porta lacus. Sed sed blandit risus. Phasellus varius cursus eros, ut dictum ante ullamcorper at.
		        </p>
				<p>Morbi nec elit orci. Fusce consequat iaculis lacus ac pellentesque. Ut vel malesuada justo. Proin scelerisque lectus eget mauris tincidunt fringilla. Mauris non vulputate magna, vitae ullamcorper justo. Fusce sodales odio et metus suscipit, ut rutrum diam molestie. Integer porta, turpis eu molestie euismod, ex justo vehicula enim, et bibendum tellus mauris eget purus.
				</p>
			</div>
	    </div>
    )
  }
}

export default HomePage;
