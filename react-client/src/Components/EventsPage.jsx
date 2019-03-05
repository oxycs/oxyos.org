import React, { Component } from 'react';
//import Calendar from 'react_google_calendar'

class EventsPage extends Component {
  // Credit: https://github.com/crashspringfield/react-google-calendar
  /*
  const calendar_configuration = {
      api_key: AIzaSyBrKrD2zCwme215QR0lh7TiCSg9ekkR5Is,
      calendars: [
        {
          name: 'OxyOS Events', // whatever you want to name it
          url: 'https://calendar.google.com/calendar/b/1?cid=b3h5LmVkdV82NDlzNmRjbGViNXIxMGtodGphdnIzZXM0b0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t' // your calendar URL
        }
      ],
      dailyRecurrence: 700,
      weeklyRecurrence: 500,
      monthlyRecurrence: 20
  }

  export default class MyApp extends Component {
      constructor(props) {
        super(props)
          this.state = {
            events: []
          }
      }

      render = () =>
        <div>
          <Calendar
            events={this.state.events}
            config={calendar_configuration} />
        </div>
  }
  */
  render() {
    return (
      <div id="calendar">
        <p>This is the events page</p>
      </div>
    )
  }
}

export default EventsPage;
