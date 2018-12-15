import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class NewContactForm extends Component{

  constructor(props) {
     super(props);
     this.handleDayChange = this.handleDayChange.bind(this);
     this.state = {
       selectedDay: undefined,
     };
   }
   handleDayChange(day) {
     this.setState({ selectedDay: day });
   }

  render(){
    const { selectedDay } = this.state;
  return(
    <div class="ui main container grid four wide column centered">
    <form class="ui form six wide column centered">
      <h4 class="ui dividing header">Contact Information</h4>
      <div class="field">
      <label>Name</label>
      <div class="two fields">
      <div class="field">
        <input type="text" name="shipping[first-name]" placeholder="First Name"/>
      </div>
      <div class="field">
        <input type="text" name="shipping[last-name]" placeholder="Last Name"/>
      </div>
      </div>
      </div>



      <div class="field">
      <label>Category</label>
      <select class="ui fluid dropdown">
      <option value="">Category</option>
      <option value="Family">Family</option>
      <option value="Friend">Friend</option>
      <option value="Associate">Associate</option>
      </select>
      </div>

      <div class="field">
      <label>Relationship</label>
      <div class="field">
      <div class="field">
        <input type="text" name="Relationship" placeholder="Relationship (e.g. Cousin, Code4Change Member, etc.)"/>
      </div>
      </div>
      </div>


      <div>
      <div class="field">
      <label>Birth Date</label>
        {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay}
        <DayPickerInput onDayChange={this.handleDayChange} />
      </div>
      </div>


      <div>
      <div class="field">
      <div class="field">
      <label>Image</label>
        <input type="text" name="contact_avatar" placeholder="Insert Contact Image "/>
      </div>
      </div>
      </div>



      <div class="field">
      <label>Home Address</label>
      <div class="field">
      <div class="field">
        <input type="text" name="shipping[address]" placeholder="Street Address"/>
      </div>
      </div>
      </div>

      <div class="two field">
      <div class="two field">
      <label>City</label>
        <input type="text" name="home[city]" placeholder="City"/>
      </div>
      <div class="field">

      <label>State</label>
      <select class="ui fluid dropdown">
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
      <div class= "ui form six wide column centered">
      <div class="four wide field">
      <label>Zip Code</label>
        <input type="text" name="shipping[address-2]" placeholder="zip code"/>
      </div>
      </div>
      </div>

      <label>Company Name</label>
      <div class="field">
      <div class="field">
        <input type="text" name="company_name" placeholder="(e.g. Big Company Inc.)"/>
      </div>
      </div>

      <label>Job Title</label>
      <div class="field">
      <div class="field">
        <input type="text" name="job_title" placeholder="(e.g. Chief Executive Officer)"/>
      </div>
      </div>

<label>Work Address</label>
<div class="field">
<div class="field">
  <input type="text" name="shipping[address]" placeholder="Street Address"/>
</div>

</div>
</div>
<div class="field">
<div class="field">
<label>State</label>
<select class="ui fluid dropdown">
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
<div class="four wide field">
  <label>Zip Code </label>
  <input type="text" name="shipping[address-2]" placeholder="zip code"/>
</div>
</div>


<div class="field">
  <label>Cell # </label>
  <input type="text" name="cell_num" placeholder="(e.g. 555-555-5555)"/>
</div>

<div class="field">
  <label>Email </label>
  <input type="text" name="email_address" placeholder="(e.g. first.last@email.com)"/>
</div>




      </div>
      <h4 class="ui dividing header">Last Event Info</h4>


      <div>
      <div class="field">
      <label>Date of Last Event:</label>
        {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay}
        <DayPickerInput onDayChange={this.handleDayChange} />
      </div>
      </div>

      <div class="field">
        <label>Notes: </label>
        <textarea type="text field" name="notes"></textarea>
      </div>


      <div class="ui button fluid" tabindex="0">Submit</div>

      </form>
      </div>
    )
  }
}

export default NewContactForm
