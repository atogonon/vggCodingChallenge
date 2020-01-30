import React from 'react';
import { Button } from 'semantic-ui-react'

class SingleEvent extends React.Component {
  render() {

    const { event } = this.props

    return (
      <div className='singleEvent'>
        <div>
          {(event.IsSellingFast ? <p className='fastSelling'>Tickets Selling Fast!</p> : <p></p>)}
          <div>
            <b>{event.Day}, {event.Date} </b><br></br> {event.Time}
          </div>
          {(event.IsLastDateInCity ? <p className='lastDate'>Last Date In City</p> : <p></p>)}
        </div>
        <div className='singleEventBody'>
          <a href={`https://viagogo.com${event.EventUrl}`}>
            <h2>{event.VenueName} - {event.VenueCity}, {event.VenueStateProvince}, {event.VenueCountry}</h2>
            <h3>{event.EventName}</h3>
          </a>
          {(event.IsCheapestCity ? <p className='cheapestInCity'>{event.IsCheapestCityContent}</p> : <p></p>)}
        </div>
        <div>
          {(event.IsSoldOut ? <p className='soldOut'>SOLD OUT</p> :
            <div>
              <p>{event.AvailableTicketsNumber} Tickets Remaining</p>
              <a href={`https://viagogo.com${event.EventUrl}`}><Button>Get Tickets</Button></a>
            </div>)}
        </div>
      </div>
    )
  }
}

export default SingleEvent
