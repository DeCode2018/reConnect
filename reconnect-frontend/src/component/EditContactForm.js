import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class EditContactForm extends Component{
  constructor(props){
    super(props)
    this.state={
      selectedBirthDate: undefined,
      selectedEventDate: undefined,
      first_name: this.props.currentCard.first_name,
      last_name: this.props.currentCard.last_name,
      bday: this.props.currentCard.bday,
      contact_avatar: this.props.currentCard.contact_avatar,
      category: this.props.currentCard.category,
      last_event_date: this.props.currentCard.last_event_date,
      relationship: this.props.currentCard.relationship,
      home_address: this.props.currentCard.home_address,
      home_city: this.props.currentCard.home_city,
      home_state: this.props.currentCard.home_state,
      home_zip: this.props.currentCard.home_zip,
      company_name: this.props.currentCard.company_name,
      job_title: this.props.currentCard.job_title,
      company_address: this.props.currentCard.company_address,
      company_city: this.props.currentCard.company_city,
      company_state: this.props.currentCard.company_state,
      company_zip: this.props.currentCard.company_zip,
      cell_num: this.props.currentCard.cell_num,
      email_address: this.props.currentCard.email_address,
      notes: this.props.currentCard.notes


    }

  }

  handleDayChange =(day)=> {
    let  edate = new Date(day);
    let  emonth = edate.getMonth()+1;
    let  edt = edate.getDate();

        if (edt < 10) {
          edt = '0' + edt;
        }
        if (emonth < 10) {
          emonth = '0' + emonth;
        }
    this.setState({ selectedEventDate: day });
  }

  handleBirthDateChange = (day)=> {
   let  bdate = new Date(day);
   let  bmonth = bdate.getMonth()+1;
   let  bdt = bdate.getDate();

       if (bdt < 10) {
         bdt = '0' + bdt;
       }
       if (bmonth < 10) {
         bmonth = '0' + bmonth;
       }
    this.setState({ selectedBirthDate: day });

  }

  updateField =(event)=>{
    this.setState({
      [event.target.name]: event.target.value
      //[Refactored]
      // last_name: event.currentTarget.value,
      // bday: event.target.value,
      // contact_avatar: event.target.value,
      // category: event.target.value,
      // last_event_date: event.target.value,
      // relationship: event.target.value,
      // home_address: event.target.value,
      // home_city: event.target.value,
      // home_state: event.target.value,
      // home_zip: event.target.value,
      // company_name: event.target.value,
      // job_title: event.target.value,
      // company_address: event.target.value,
      // company_city: event.target.value,
      // company_state: event.target.value,
      // company_zip: event.target.value,
      // cell_num: event.target.value,
      // email_address: event.target.value,
      // notes: event.target.value
    })
  }

  persistForm = (event)=>{
    event.preventDefault()
    const data = new FormData(event.target)
    fetch(`http://localhost:3000/api/v1/contacts/${this.props.currentCard.id}`, {
      method: "PATCH",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify({
        first_name: data.get('first_name'),
        last_name: data.get('last_name'),
        bday: this.state.selectedBirthDate,
        contact_avatar: data.get('contact_avatar'),
        category: data.get('category'),
        last_event_date: this.state.selectedEventDate,
        relationship: data.get('relationship'),
        home_address: data.get('home_address'),
        home_city: data.get('home_city'),
        home_state: data.get('home_state'),
        home_zip: data.get('home_zip'),
        company_name: data.get('company_name'),
        job_title: data.get('job_title'),
        company_address: data.get('company_address'),
        company_city: data.get('company_city'),
        company_state: data.get('company_state'),
        company_zip: data.get('company_zip'),
        cell_num: data.get('cell_num'),
        email_address: data.get('email_address'),
        notes: data.get('notes')


      })
    })
    .then(response => response.json())
    .then(data => this.props.onEdit(data))

  }

  render(){
    const { selectedBirthDate } = this.state;
    const { selectedEventDate } = this.state;
  return(
    <div className="ui main container grid four wide column centered">
    <form onSubmit={this.persistForm} className="ui form six wide column centered" >
      <h4 className="ui dividing header">Contact Information</h4>
      <div className="field">
      <label>Name</label>
      <div className="two fields">
      <div className="field">
        <input type="text" id="first_name" name="first_name" value={`${this.state.first_name}`} onChange={(event)=>this.updateField(event)}/>
      </div>
      <div className="field">
        <input type="text" id="last_name" name="last_name" placeholder="Last Name" value={`${this.state.last_name}`} onChange={(event)=>this.updateField(event)}/>
      </div>
      </div>
      </div>



      <div className="field">
      <label>Category</label>
      <select className="ui fluid dropdown" id="category" name="category" value={`${this.state.category}`} onChange={(event)=>this.updateField(event)}>
      <option value="">Category</option>
      <option value="Family">Family</option>
      <option value="Friends">Friend</option>
      <option value="Associates">Associate</option>
      </select>
      </div>

      <div className="field">
      <label>Relationship</label>
      <div className="field">
      <div className="field">
        <input type="text" id="relationship" name="relationship" placeholder="Relationship (e.g. Cousin, Code4Change Member, etc.)" value={`${this.state.relationship}`} onChange={(event)=>this.updateField(event)}/>
      </div>
      </div>
      </div>


      <div>
      <div className="field" >
      <label>Birth Date</label>
        {selectedBirthDate && <p>Day: {selectedBirthDate.toLocaleDateString()}</p>}
        {!selectedBirthDate}
        <DayPickerInput className="bday" onDayChange={this.handleBirthDateChange} value={`${this.state.bday}`} onChange={(event)=>this.updateField(event)}/>
      </div>
      </div>


      <div>
      <div className="field">
      <div className="field">
      <label>Image</label>
        <input type="text" name="contact_avatar" placeholder="Insert Contact Image " value={`${this.state.contact_avatar}`} onChange={(event)=>this.updateField(event)}/>
      </div>
      </div>
      </div>



      <div className="field">
      <label>Home Address</label>
      <div className="field">
      <div className="field">
        <input type="text" name="home_address" placeholder="Street Address" value={`${this.state.home_address}`} onChange={(event)=>this.updateField(event)}/>
      </div>
      </div>
      </div>

      <div className="two field">
      <div className="two field">
      <label>City</label>
        <input type="text" name="home_city" placeholder="City" value={`${this.state.home_city}`} onChange={(event)=>this.updateField(event)}/>
      </div>
      <div className="field">

      <label>State</label>
      <select className="ui fluid dropdown" name="home_state" value={`${this.state.home_state}`} onChange={(event)=>this.updateField(event)}>
        <option value="">State</option>
      <option value="AL">Alabama</option>
      <option value="AK">Alaska</option>
      <option value="AZ">Arizona</option>
      <option value="AR">Arkansas</option>
      <option value="CA">California</option>
      <option value="CO">Colorado</option>
      <option value="CT">Connecticut</option>
      <option value="DE">Delaware</option>
      <option value="DC">District Of Columbia</option>
      <option value="FL">Florida</option>
      <option value="GA">Georgia</option>
      <option value="HI">Hawaii</option>
      <option value="ID">Idaho</option>
      <option value="IL">Illinois</option>
      <option value="IN">Indiana</option>
      <option value="IA">Iowa</option>
      <option value="KS">Kansas</option>
      <option value="KY">Kentucky</option>
      <option value="LA">Louisiana</option>
      <option value="ME">Maine</option>
      <option value="MD">Maryland</option>
      <option value="MA">Massachusetts</option>
      <option value="MI">Michigan</option>
      <option value="MN">Minnesota</option>
      <option value="MS">Mississippi</option>
      <option value="MO">Missouri</option>
      <option value="MT">Montana</option>
      <option value="NE">Nebraska</option>
      <option value="NV">Nevada</option>
      <option value="NH">New Hampshire</option>
      <option value="NJ">New Jersey</option>
      <option value="NM">New Mexico</option>
      <option value="NY">New York</option>
      <option value="NC">North Carolina</option>
      <option value="ND">North Dakota</option>
      <option value="OH">Ohio</option>
      <option value="OK">Oklahoma</option>
      <option value="OR">Oregon</option>
      <option value="PA">Pennsylvania</option>
      <option value="RI">Rhode Island</option>
      <option value="SC">South Carolina</option>
      <option value="SD">South Dakota</option>
      <option value="TN">Tennessee</option>
      <option value="TX">Texas</option>
      <option value="UT">Utah</option>
      <option value="VT">Vermont</option>
      <option value="VA">Virginia</option>
      <option value="WA">Washington</option>
      <option value="WV">West Virginia</option>
      <option value="WI">Wisconsin</option>
      <option value="WY">Wyoming</option>
      </select>
      <div className= "field">
      <div className="four wide field">
      <label>Zip Code</label>
        <input type="text" name="home_zip" placeholder="zip code" value={`${this.state.home_zip}`} onChange={(event)=>this.updateField(event)}/>
      </div>
      </div>
      </div>

      <label>Company Name</label>
      <div className="field">
      <div className="field">
        <input type="text" name="company_name" placeholder="(e.g. Big Company Inc.)" value={`${this.state.company_name}`} onChange={(event)=>this.updateField(event)}/>
      </div>
      </div>

      <label>Job Title</label>
      <div className="field">
      <div className="field">
        <input type="text" name="job_title" placeholder="(e.g. Chief Executive Officer)" value={`${this.state.job_title}`} onChange={(event)=>this.updateField(event)}/>
      </div>
      </div>

<label>Work Address</label>
<div className="field">
<div className="field">
  <input type="text" name="company_address" placeholder="Street Address" value={`${this.state.company_address}`} onChange={(event)=>this.updateField(event)}/>
</div>

<div className="field">
<div className="field">
<label>Work City</label>
  <input type="text" name="company_city" placeholder="City" value={`${this.state.company_city}`} onChange={(event)=>this.updateField(event)}/>
</div>
</div>

</div>
</div>
<div className="field">
<div className="field">
<label>State</label>
<select className="ui fluid dropdown" name="company_state" value={`${this.state.company_state}`} onChange={(event)=>this.updateField(event)}>
  <option value="">State</option>
<option value="AL">Alabama</option>
<option value="AK">Alaska</option>
<option value="AZ">Arizona</option>
<option value="AR">Arkansas</option>
<option value="CA">California</option>
<option value="CO">Colorado</option>
<option value="CT">Connecticut</option>
<option value="DE">Delaware</option>
<option value="DC">District Of Columbia</option>
<option value="FL">Florida</option>
<option value="GA">Georgia</option>
<option value="HI">Hawaii</option>
<option value="ID">Idaho</option>
<option value="IL">Illinois</option>
<option value="IN">Indiana</option>
<option value="IA">Iowa</option>
<option value="KS">Kansas</option>
<option value="KY">Kentucky</option>
<option value="LA">Louisiana</option>
<option value="ME">Maine</option>
<option value="MD">Maryland</option>
<option value="MA">Massachusetts</option>
<option value="MI">Michigan</option>
<option value="MN">Minnesota</option>
<option value="MS">Mississippi</option>
<option value="MO">Missouri</option>
<option value="MT">Montana</option>
<option value="NE">Nebraska</option>
<option value="NV">Nevada</option>
<option value="NH">New Hampshire</option>
<option value="NJ">New Jersey</option>
<option value="NM">New Mexico</option>
<option value="NY">New York</option>
<option value="NC">North Carolina</option>
<option value="ND">North Dakota</option>
<option value="OH">Ohio</option>
<option value="OK">Oklahoma</option>
<option value="OR">Oregon</option>
<option value="PA">Pennsylvania</option>
<option value="RI">Rhode Island</option>
<option value="SC">South Carolina</option>
<option value="SD">South Dakota</option>
<option value="TN">Tennessee</option>
<option value="TX">Texas</option>
<option value="UT">Utah</option>
<option value="VT">Vermont</option>
<option value="VA">Virginia</option>
<option value="WA">Washington</option>
<option value="WV">West Virginia</option>
<option value="WI">Wisconsin</option>
<option value="WY">Wyoming</option>
</select>
<div className="four wide field">
  <label>Zip Code </label>
  <input type="text" name="company_zip" placeholder="zip code" value={`${this.state.company_zip}`} onChange={(event)=>this.updateField(event)}/>
</div>
</div>


<div className="field">
  <label>Cell # </label>
  <input type="text" name="cell_num" placeholder="(e.g. 555-555-5555)" value={`${this.state.cell_num}`} onChange={(event)=>this.updateField(event)}/>
</div>

<div className="field">
  <label>Email </label>
  <input type="text" name="email_address" placeholder="(e.g. first.last@email.com)" value={`${this.state.email_address}`} onChange={(event)=>this.updateField(event)}/>
</div>




      </div>
      <h4 className="ui dividing header">Last Event Info</h4>


      <div>
      <div className="field">
      <label>Date of Last Event:</label>
        {selectedEventDate && <p>Day: {selectedEventDate.toLocaleDateString()}</p>}
        {!selectedEventDate}
        <DayPickerInput className="last_event_date" onDayChange={this.handleDayChange} value={`${this.state.last_event_date}`}/>
      </div>
      </div>


      <div className="field">
        <label>Notes: </label>
        <textarea type="text field" name="notes" value={`${this.state.notes}`} onChange={(event)=>this.updateField(event)}></textarea>
      </div>


      <input className="ui button fluid" tabIndex="0" type="submit" value="Submit"/>

      </form>
      </div>
    )
  }
}


export default EditContactForm
