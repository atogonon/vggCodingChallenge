import React from 'react';
import './App.css';
import eventList from './eventList';
import SingleEvent from './singleEvent'
import { Dropdown } from 'semantic-ui-react'
import getCityArray from './utils'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    let events = eventList.Items

    let cityArray = getCityArray(events)

    if (this.state.filter !== null) {
      events = events.filter(event => {
        return event.VenueCity === this.state.filter
      })
    }

    return (
      <div className="App">
        <nav>
          <h1>Search Results for {events[0].EventName} Tickets</h1>
          <div id='citySelect'>
            View Events by City: <Dropdown placeholder='Select A City' options={cityArray} onChange={this.handleChange} />
          </div>
        </nav>
        <main>
          <div>
            {events.map(event => {
              return (
                <SingleEvent key={event.EventId} event={event} />
              )
            })}
          </div>
        </main>
      </div>
    );
  }

  handleChange(event, data) {
    this.setState({
      filter: data.value
    })
  }

}

export default App;
