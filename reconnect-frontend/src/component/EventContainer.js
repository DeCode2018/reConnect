import React, { Component} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class EventContainer extends Component{

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      startDate: new Date(),
      userId: this.props.userInfo.id,
      contactId: this.props.currentCard.id

    };
    console.log(this.props.userInfo)
  }

  handleChange(day) {
   let  date = new Date(day);
   let  month = date.getMonth()+1;
   let  dt = date.getDate();

       if (dt < 10) {
         dt = '0' + dt;
       }
       if (month < 10) {
         month = '0' + month;
       }
    this.setState({ startDate: day });

  }



  handleEventSubmit = (event)=>{
    event.preventDefault()
    const data = new FormData(event.target)
    fetch(`http://localhost:3000/api/v1/events`, {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify({
        user_id: parseInt(this.state.userId),
        contact_id: parseInt(this.state.contactId),
        name: data.get('event_name'),
        description: data.get('event_description'),
        location: data.get('event_location'),
        event_date: this.state.startDate,

      })
    })
    .then(response => response.json())
    .then(data => this.props.onAddEvent(data))
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
