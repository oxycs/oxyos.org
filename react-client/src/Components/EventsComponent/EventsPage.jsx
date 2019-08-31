import React, { Component } from 'react';
import './EventsPage.css';

class EventsPage extends Component {
  render() {
    return (
      <section>
        <section id="events">

          <div>
            <p style={{ fontSize:34 }}>Our Events</p>
          </div>

          <div id="container-events">

            <div id="upcoming-events">
              {/*Different way of declaring inline style with React*/}
              <p style={{ fontSize:28 }}>Upcoming Events</p>
              <p>hello there</p>
            </div>
            <div id="past-events">
              <p style={{ fontSize:28 }}>Past Events</p>
              <p>how are you doing</p>
            </div>

          </div>

        </section>
        </section>
    )
  }
}

export default EventsPage;
