import React, { Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddEventContainer extends Component{

  constructor(props){
    super(props)

    this.state = {
      userId: this.props.userInfo.id,
      contactId: this.props.currentCard.id,
      startDate: new Date(),
      event_name:'',
      event_description:'',
      event_location:'',


      nameError: false,
      descriptionError: false,
      locationError: false,
      formError: false

    };

  }

  handleChange = (date) => {
    console.log(date)
      this.setState({ startDate: date });
  }

  onInputChange = (event) => {

    this.setState({
      [event.currentTarget.name]:event.currentTarget.value
    })
  }



  handleEventSubmit = (event)=>{
    event.preventDefault();
    let error = false;

    if (this.state.event_name === ''){
      this.setState({nameError:true});
      error=true;
    } else {
      this.setState({nameError:false});
    }

    if (this.state.event_description === ''){
      this.setState({descriptionError:true});
      error=true;
    } else {
      this.setState({descriptionError:false});
    }

    if (this.state.event_location === ''){
      this.setState({locationError:true});
      error=true;
    } else {
      this.setState({locationError:false});
    }



    if (error){
      this.setState({formError:true});
      return
    }

    this.setState({formError:false})

    let  date = new Date(this.state.startDate);
    let  year = date.getFullYear();
    let  month = date.getMonth()+1;
    let  dt = date.getDate();
    let hours = date.getHours();
    let mins = date.getMinutes()

        if (dt < 10) {
          dt = '0' + dt;
        }
        if (month < 10) {
          month = '0' + month;
        }
        // 00 Mins were return as int 0, applied this logic to put into the 00 format I wanted
        if (mins === 0){
          mins = '00'
        }
     let configday = month+'-'+dt+'-'+year+' '+hours+':'+mins

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
        event_date: configday,

      })
    })
    .then(response => response.json())
    .then(data => this.props.onAddEvent(data))
    //clears out the event form data after submittal
    event.target.reset()
    //call on handleEventClick to toggle back to hidden form
    this.props.handleEventClick()
    }



  render(){


    return(
      <div className="ui main container grid four wide column centered">
        <form onSubmit={this.handleEventSubmit} className="ui form six wide column centered" >
          <h4 className="ui dividing header">Event Information </h4>
            <div className="field">
                <div className="field">
                  <div className="field">
                    <input type="text" id="event_name" name="event_name" placeholder="Event Name here..."
                    value={this.state.event_name}
                    onChange={this.onInputChange}
                    error={this.state.nameError.toString()}/>
                  </div>
                  <div className="field">
                    <input type="text" id="event_description" name="event_description" placeholder="Describe Event here..."
                    value={this.state.event_description}
                    onChange={this.onInputChange}
                    error={this.state.descriptionError.toString()}/>
                  </div>
                  <div className="field">
                    <input type="text" id="event_location" name="event_location" placeholder="Event Location here..."
                    value={this.state.event_location}
                    onChange={this.onInputChange}
                    error={this.state.locationError.toString()}/>
                  </div>

                  <div>
                  <div className="field" >
                  <label>Event Date</label>

                  <DatePicker
                   selected={this.state.startDate}
                   onChange={this.handleChange}
                   showTimeSelect

                 />






                  </div>
                  </div>
                </div>

          </div>
          <input className="ui button fluid" tabIndex="0" type="submit" value="Submit" disabled={!this.state.event_name ||
                    !this.state.event_description ||
                    !this.state.event_location}/>
        </form>
    </div>

    )
  }
}


export default AddEventContainer
