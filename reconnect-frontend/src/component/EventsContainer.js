import React, { Component, Fragment} from 'react';
import UpcomingEvent from './UpcomingEvent'
import OverdueEvent from './OverdueEvent'
import CompletedEvent from './CompletedEvent'


class EventsContainer extends Component{

  handleCheckEvent=(event)=>{
    console.log(event.currentTarget)
  }

  handleDeleteEvent=(currentEvent)=>{
    console.log("reached handleDeleteEvent")
    console.log(currentEvent)
    fetch(`http://localhost:3000/api/v1/events/${currentEvent.id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id: `${currentEvent.id}`})
  }).then(res=>res.json()).then(data=>this.props.onDeleteEvent(data.eventId))
  }

  render(){





      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var hh = today.getHours();
      var mn = today.getMinutes();
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }

      if (mn < 10){
        mn = '0' + mn;
      }
     today = mm + '-' + dd + '-' + yyyy + ' '+ hh +':'+ mn
     console.log(today)

     let contactEvents = this.props.eventInfo

     let filteredEvents = contactEvents.filter(event=>{
         return event.contact_id === this.props.currentCard.id
       })
       console.log(`filteredEvents:${filteredEvents}`)

     let completedEvents = filteredEvents.filter(event=>{
       return (event.status === true)

     })
     let overdueEvents = filteredEvents.filter(event=>{
       return (event.status === false) && (new Date(event.event_date) < new Date(today))

     })

     let upcomingEvents = filteredEvents.filter(event=>{
       return (event.status === false) && (new Date(event.event_date) > new Date(today))

     })



    return(
      <Fragment>

      <div className="ui segment green inverted "><label><h1>UPCOMING</h1></label></div>
      {upcomingEvents.map(event=> <UpcomingEvent eventInfo={event}
      currentCard={this.props.currentCard} onDeleteEvent={this.props.onDeleteEvent}
      onUpdateLastEventDay={this.props.onUpdateLastEventDay}
      key={event.id}
        />)}

      <div className="ui segment red inverted "><label><h1>OVERDUE</h1></label></div>
      {overdueEvents.map(event=> <OverdueEvent eventInfo={event}
      currentCard={this.props.currentCard} onDeleteEvent={this.props.onDeleteEvent}
      onUpdateLastEventDay={this.props.onUpdateLastEventDay}
      key={event.id}
        />)}

        <div className="ui segment blue inverted "><label><h1>COMPLETED</h1></label></div>
        {completedEvents.map(event=> <CompletedEvent eventInfo={event}
        currentCard={this.props.currentCard} onDeleteEvent={this.props.onDeleteEvent}
        onUpdateLastEventDay={this.props.onUpdateLastEventDay}
        key={event.id}
          />)}
      </Fragment>


    )
  }
}


export default EventsContainer

// {filteredEvents.reverse().map(event=>
//     (new Date(event.event_date) < new Date(today))?
//   <OverdueEventContainer eventInfo={event}
//   currentCard={this.props.currentCard} onDeleteEvent={this.props.onDeleteEvent}
//   eventStatus={this.state.eventStatus}
//   key={event.id}
//   />
//     :
//   <UpcomingEventContainer eventInfo={event}
//   currentCard={this.props.currentCard} onDeleteEvent={this.props.onDeleteEvent}
//   eventStatus={this.state.eventStatus}
//   key={event.id}
//   />
// )}
