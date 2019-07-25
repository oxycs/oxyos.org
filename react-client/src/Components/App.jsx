import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomeComponent/HomePage';
import EventsPage from './EventsComponent/EventsPage';
import ResourcesPage from './ResourcesComponent/ResourcesPage';
import AboutUsPage from './AboutComponent/AboutUsPage';
import ContactPage from './ContactComponent/ContactPage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import '../../dist/styles.css';


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
