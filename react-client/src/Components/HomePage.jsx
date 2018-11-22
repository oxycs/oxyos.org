import React, { Component } from 'react';
import banner from '../Assets/2018-0608_JacarandaTrees-07.jpg';

class HomePage extends Component {
  render() {
    return (
      <div>
        <img id="bannerImage" src={banner}></img>
      </div>
    )
  }
}

export default HomePage;
