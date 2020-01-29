import React from 'react';
import './App.css';
import eventList from './eventList';
import SingleEvent from './singleEvent'
import { Select } from 'semantic-ui-react'

function App() {

  let events = eventList.Items

  let cityList={}

  events.forEach(event => {
    let city=event.VenueCity
    if (event.VenueCity in cityList) {
      cityList[city]+=1
    }
    else {
      cityList[city]=1
    }
  })

  let cityArray=[]

  for (let city in cityList) {
    cityArray.push({
      key: city,
      value: city,
      text: `${city} (${cityList[city]})`
    })
  }

  return (
    <div className="App">
      <nav>
        <h1>Search Results for {events[0].EventName} Tickets</h1>
        <div id='citySelect'>
          View Events by City: <Select placeholder='Select A City' options={cityArray}/>
        </div>
      </nav>
      <main>
        <div>
          {events.map(event => {
            return (
              <SingleEvent event={event}/>
            )
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
