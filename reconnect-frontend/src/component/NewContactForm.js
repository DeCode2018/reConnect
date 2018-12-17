import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class NewContactForm extends Component{

  constructor(props) {
     super(props);
     this.handleBirthDateChange = this.handleBirthDateChange.bind(this);
     this.handleDayChange = this.handleDayChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this)
     this.state = {
       selectedBirthDate: undefined,
       selectedEventDate: undefined,
       user_id: this.props.userInfo.id
     };
   }
   handleBirthDateChange(day) {
     this.setState({ selectedBirthDate: day });

   }

   handleDayChange(day) {
     this.setState({ selectedEventDate: day });
   }

   handleSubmit(event){
      event.preventDefault();
      alert("submitted")
      const data = new FormData(event.target)
      console.log(data)
      console.log(data.get('first_name'))
      fetch('http://localhost:3000/api/v1/contacts', {
      method: 'POST',
      headers: {
            'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        user_id: this.state.user_id,
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
   }

  render(){
    const { selectedBirthDate } = this.state;
    const { selectedEventDate } = this.state;
  return(
    <div className="ui main container grid four wide column centered">
    <form onSubmit={this.handleSubmit} className="ui form six wide column centered" >
      <h4 className="ui dividing header">Contact Information</h4>
      <div className="field">
      <label>Name</label>
      <div className="two fields">
      <div className="field">
        <input type="text" id="first_name" name="first_name" placeholder="First Name"/>
      </div>
      <div className="field">
        <input type="text" id="last_name" name="last_name" placeholder="Last Name"/>
      </div>
      </div>
      </div>



      <div className="field">
      <label>Category</label>
      <select className="ui fluid dropdown" id="category" name="category">
      <option value="">Category</option>
      <option value="family">Family</option>
      <option value="friend">Friend</option>
      <option value="associate">Associate</option>
      </select>
      </div>

      <div className="field">
      <label>Relationship</label>
      <div className="field">
      <div className="field">
        <input type="text" id="relationship" name="relationship" placeholder="Relationship (e.g. Cousin, Code4Change Member, etc.)"/>
      </div>
      </div>
      </div>


      <div>
      <div className="field" >
      <label>Birth Date</label>
        {selectedBirthDate && <p>Day: {selectedBirthDate.toLocaleDateString()}</p>}
        {!selectedBirthDate}
        <DayPickerInput className="bday" onDayChange={this.handleBirthDateChange} />
      </div>
      </div>


      <div>
      <div className="field">
      <div className="field">
      <label>Image</label>
        <input type="text" name="contact_avatar" placeholder="Insert Contact Image "/>
      </div>
      </div>
      </div>



      <div className="field">
      <label>Home Address</label>
      <div className="field">
      <div className="field">
        <input type="text" name="home_address" placeholder="Street Address"/>
      </div>
      </div>
      </div>

      <div className="two field">
      <div className="two field">
      <label>City</label>
        <input type="text" name="home_city" placeholder="City"/>
      </div>
      <div className="field">

      <label>State</label>
      <select className="ui fluid dropdown" name="home_state">
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
        <input type="text" name="home_zip" placeholder="zip code"/>
      </div>
      </div>
      </div>

      <label>Company Name</label>
      <div className="field">
      <div className="field">
        <input type="text" name="company_name" placeholder="(e.g. Big Company Inc.)"/>
      </div>
      </div>

      <label>Job Title</label>
      <div className="field">
      <div className="field">
        <input type="text" name="job_title" placeholder="(e.g. Chief Executive Officer)"/>
      </div>
      </div>

<label>Work Address</label>
<div className="field">
<div className="field">
  <input type="text" name="company_address" placeholder="Street Address"/>
</div>

<div className="field">
<div className="field">
<label>Work City</label>
  <input type="text" name="company_city" placeholder="City"/>
</div>
</div>

</div>
</div>
<div className="field">
<div className="field">
<label>State</label>
<select className="ui fluid dropdown" name="company_state">
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
  <input type="text" name="company_zip" placeholder="zip code"/>
</div>
</div>


<div className="field">
  <label>Cell # </label>
  <input type="text" name="cell_num" placeholder="(e.g. 555-555-5555)"/>
</div>

<div className="field">
  <label>Email </label>
  <input type="text" name="email_address" placeholder="(e.g. first.last@email.com)"/>
</div>




      </div>
      <h4 className="ui dividing header">Last Event Info</h4>


      <div>
      <div className="field">
      <label>Date of Last Event:</label>
        {selectedEventDate && <p>Day: {selectedEventDate.toLocaleDateString()}</p>}
        {!selectedEventDate}
        <DayPickerInput className="last_event_date" onDayChange={this.handleDayChange} />
      </div>
      </div>

      <div className="field">
        <label>Notes: </label>
        <textarea type="text field" name="notes"></textarea>
      </div>


      <input className="ui button fluid" tabIndex="0" type="submit" value="Submit"/>

      </form>
      </div>
    )
  }
}

export default NewContactForm
