import React, { Component, Fragment} from 'react';
import EventContainer from './EventContainer'
import ExistingEventContainer from './ExistingEventContainer'


class ContactView extends Component{
  // eslint-disable-next-line
constructor(props){
  super(props)

    this.state = {
      eventClicked: false
    }
}

  handleEventClick = () =>{
    this.setState({
      eventClicked: !this.state.eventClicked
    })
  }

  renderEvent = () =>{
    switch(this.state.eventClicked){
    case true:
      return <EventContainer userInfo={this.props.userInfo}
      currentCard={this.props.currentCard}
      onAddEvent={this.props.onAddEvent}/>
      // eslint-disable-next-line
      break;
    case false:
      return null
      // eslint-disable-next-line
        break;
    default:
      return null
      }
  }


  handleDeleteClick=(currentCard)=>{
    fetch(`http://localhost:3000/api/v1/contacts/${currentCard.id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id: `${currentCard.id}`})
  }).then(res=>res.json()).then(data=>this.props.onDelete(data))



  }


  render(){
    let contactEvents = this.props.userInfo.events

    let filteredEvents = contactEvents.filter(event=>{
        return event.contact_id === this.props.currentCard.id
      })

    return(
      <div className="ui items">
  <div className="item">
    <div className="ui large image">
    <img src={this.props.currentCard.contact_avatar} alt="contact avatar"/>
    </div>
    <div className="content">
      <div className="header">{this.props.currentCard.first_name} {this.props.currentCard.last_name}</div>
      <div className="meta">
        <div className="relationship">Relationship: {this.props.currentCard.relationship}</div>
        <div className="bday">Birthday: {this.props.currentCard.bday}</div>
        <div className="email">Email Address: {this.props.currentCard.email_address}</div>
        <div className="cell">Cell#: {this.props.currentCard.cell_num}</div>
        <div className="home_address">Street Address: {this.props.currentCard.home_address}</div>
        <div className="home_city">City: {this.props.currentCard.home_city}</div>
        <div className="home_state">State: {this.props.currentCard.home_state}</div>
        <div className="home_zip">Zip Code: {this.props.currentCard.home_zip}</div>
      </div>
      <div className="description">
        <h2>Last Event: {(this.props.currentCard.last_event_date)}</h2>
        <p>Notes: {this.props.currentCard.notes}</p>
      </div>
      <button className="ui labeled icon inverted green button" onClick={this.handleEventClick}>
        <i className="add icon"></i>
        Add Event
      </button>
      <button className="ui labeled icon inverted blue button" onClick={this.props.handleEditClick}
      >
        <i className="edit icon"></i>
        Edit
      </button>
      <button className="ui right labeled icon inverted red button" onClick={()=>this.handleDeleteClick(this.props.currentCard)}>
        <i className="delete icon" ></i>
        Delete Contact
      </button>
    <div>{this.renderEvent()}</div>
    </div>

  </div>
  <Fragment>
  {filteredEvents.reverse().map(event=>
      <ExistingEventContainer eventInfo={event}
      currentCard={this.props.currentCard} onDeleteEvent={this.props.onDeleteEvent}  key={event.id}
      />

  )}
  </Fragment>
  </div>

    )
  }
}

export default ContactView
