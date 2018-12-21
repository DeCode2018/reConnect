import React, { Component} from 'react';

class ExistingEventContainer extends Component{


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
        <div className = "ui segment item">
          <div className = "three horizontal list fields">
      <div className="field"><h1>{this.props.eventInfo.name}</h1></div><div className="field"> {this.props.eventInfo.location} </div> <div className="field"> {this.props.eventInfo.descriptioin} </div></div>
      <button className="ui icon button basic right floated" onClick={()=>this.handleDeleteEvent(this.props.eventInfo)}>
        <i className="trash alternate outline icon"></i>
    </button></div></div>



    )
  }
}


export default ExistingEventContainer
