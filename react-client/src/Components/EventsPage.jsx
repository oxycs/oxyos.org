import React, { Component } from 'react';
//import Calendar from 'react_google_calendar'
import ApiCalendar from 'react-google-calendar-api';

class EventsPage extends Component {
  /**
     * List all events in the calendar
     * @param {number} maxResults to see
     * @param {string} calendarId to see by default use the calendar attribute
     * @returns {any} Promise with the result.
     */
  //public listUpcomingEvents(maxResults: number, calendarId: string = this.calendar): any

  if (ApiCalendar.sign)
    ApiCalendar.listUpcomingEvents(10)
      .then(({result}: any) => {
        console.log(result.items);
      });

  render() {
    return (
      <div id="calendar">
        <p>This is the events page</p>
      </div>
    )
  }


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
  } */
  /*
  render() {
    return (
      <div id="calendar">
        <p>This is the events page</p>
      </div>
    )
  }
  */
}

export default EventsPage;
