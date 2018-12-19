import React, { Component} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class EventContainer extends Component{

  constructor(){
    super()
    this.handleEventDateChange = this.handleEventDateChange.bind(this);
    this.state = {
      startDate: new Date(),
      selectedEventDate: ''
    };
  }

  handleEventDateChange(day) {
   let  date = new Date(day);
   let  month = date.getMonth()+1;
   let  dt = date.getDate();

       if (dt < 10) {
         dt = '0' + dt;
       }
       if (month < 10) {
         month = '0' + month;
       }
    this.setState({ selectedEventDate: day });

  }

  handleEventSubmit = (event)=>{
    const data = new FormData(event.target)
    fetch(`http://localhost:3000/api/v1/contacts/${this.props.currentCard.id}`, {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify({
        event_name: data.get('event_name'),
        event_description: data.get('event_description'),
        event_location: data.get('event_location'),
        eventday: this.state.selectedBirthDate,

      })
    })
    .then(response => response.json())
    .then(data => {alert(`Contact has been updated`)
    })
  }

  render(){
    const { selectedEventDate } = this.state;
    return(
      <div className="ui main container grid four wide column centered">
        <form onSubmit={this.handleEventSubmit} className="ui form six wide column centered" >
          <h4 className="ui dividing header">Event Information</h4>
            <div className="field">
                <div className="field">
                  <div className="field">
                    <input type="text" id="event_name" name="event_name" placeholder="Event Name here..."/>
                  </div>
                  <div className="field">
                    <input type="text" id="event_description" name="event_description" placeholder="Describe Event here..."/>
                  </div>
                  <div className="field">
                    <input type="text" id="event_location" name="event_location" placeholder="Event Location here..."/>
                  </div>

                  <div>
                  <div className="field" >
                  <label>Event Date</label>
                    {selectedEventDate && <p>Day: {selectedEventDate.toLocaleDateString()}</p>}
                    {!selectedEventDate}
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      timeCaption="time"
                  />



                  </div>
                  </div>
                </div>

          </div>
          <input className="ui button fluid" tabIndex="0" type="submit" value="Submit"/>
        </form>
    </div>

    )
  }
}


export default EventContainer
