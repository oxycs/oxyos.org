import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import EventsPage from './EventsPage';
import ResourcesPage from './ResourcesPage';
import AboutUsPage from './AboutUsPage';
import ContactPage from './ContactPage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';


// component will be changed depending on which navBar button is clicked?
// Or route to different page
class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="events" exact path="/events" component={EventsPage} />
          <Route name="resources" exact path="/resources" component={ResourcesPage} />
          <Route name="about-us" exact path="/about-us" component={AboutUsPage} />
          <Route name="contact" exact path="/contact" component={ContactPage} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
