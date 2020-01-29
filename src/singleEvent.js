import React from 'react';
import { Button } from 'semantic-ui-react'

class SingleEvent extends React.Component {
  render () {

    const { event } = this.props

    return (
      <div className='singleEvent'>
        <div>
          <b>{event.Day}, {event.Date} </b><br></br> {event.Time}
        </div>
        <div className='singleEventBody'>
          <h2>{event.VenueName} - {event.VenueCity}, {event.VenueStateProvince}, {event.VenueCountry}</h2>
          <h3>{event.EventName}</h3>
        </div>
        <div>
          <Button>Get Tickets</Button>
        </div>
      </div>
    )

  }
}

export default SingleEvent
