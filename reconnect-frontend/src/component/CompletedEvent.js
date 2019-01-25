import React, { Component} from 'react';

class CompletedEvent extends Component{

  handleCheckEvent=(eventInfo,currentCard)=>{
    console.log(eventInfo.status)
    console.log(currentCard)

    eventInfo.status = !eventInfo.status
    this.props.onUpdateLastEventDay(eventInfo,currentCard)


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

    return(
      <div className = "ui celled animated list segment">
        <div className = "ui segment blue inverted item">
          <div className = "three horizontal list fields">
            <div className="field">
              <h1><s>{this.props.eventInfo.name}</s></h1>
            </div>
            <div className="field"> <s>{this.props.eventInfo.location}</s> </div>
            <div className="field"> <s>{this.props.eventInfo.description}</s> </div>
            <div className="field"> <s>{this.props.eventInfo.event_date}</s> </div>
          </div>
          <button className="ui green button center floated" onClick={()=>this.handleCheckEvent(this.props.eventInfo, this.props.currentCard)} >


            <label>Completed</label>

          </button>
            <button className="ui red button center floated" onClick={()=>this.handleDeleteEvent(this.props.eventInfo)}>
              <i className="trash alternate outline icon"></i>
              <label>Remove</label>
            </button>
          </div>
          </div>

    )
  }
}


export default CompletedEvent
