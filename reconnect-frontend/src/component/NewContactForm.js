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
       user_id: this.props.userInfo.id,


       first_name:'',
       last_name:'',
       bday:'',
       contact_avatar:'',
       category:'',
       last_event_date:'',
       relationship:'',
       home_address:'',
       home_city:'',
       home_state:'',
       home_zip:'',
       company_name:'',
       job_title:'',
       company_address:'',
       company_city:'',
       company_state:'',
       company_zip:'',
       cell_num:'',
       email_address:'',
       notes:'',

       formError:false,
       first_nameError:false,
       last_nameError:false,
       bdayError:false,
       contact_avatarError:false,
       categoryError:false,
       last_event_dateError:false,
       relationshipError:false,
       home_addressError:false,
       home_cityError:false,
       home_stateError:false,
       home_zipError:false,
       company_nameError:false,
       job_titleError:false,
       company_addressError:false,
       company_cityError:false,
       company_stateError:false,
       company_zipError:false,
       cell_numError:false,
       email_addressError:false,
       notesError:false
     };
   }

   onInputChange = (event) => {

     this.setState({
       [event.currentTarget.name]:event.currentTarget.value
     })
   }

   handleBirthDateChange(day) {
    let  bdate = new Date(day);
    let  byear = bdate.getFullYear();
    let  bmonth = bdate.getMonth()+1;
    let  bdt = bdate.getDate();

        if (bdt < 10) {
          bdt = '0' + bdt;
        }
        if (bmonth < 10) {
          bmonth = '0' + bmonth;
        }
        let configbday = bmonth+'-'+bdt+'-'+byear
        console.log(configbday)
       this.setState({ selectedBirthDate: configbday });

   }

   handleDayChange(day) {
     let  edate = new Date(day);
     let eyear = edate.getFullYear();
     let  emonth = edate.getMonth()+1;
     let  edt = edate.getDate();

         if (edt < 10) {
           edt = '0' + edt;
         }
         if (emonth < 10) {
           emonth = '0' + emonth;
         }
      let configday = emonth+'-'+edt+'-'+eyear
      console.log(configday)
     this.setState({ selectedEventDate: configday });
   }

   handleSubmit =(event)=>{
      event.preventDefault();
      let error = false;

      if (this.state.first_name === ''){
        this.setState({first_nameError:true});
        error=true;
      } else {
        this.setState({first_nameError:false});
      }

      if (this.state.last_name === ''){
        this.setState({last_nameError:true});
        error=true;
      } else {
        this.setState({last_nameError:false});
      }

      if (this.state.selectedBirthDate === undefined){
        this.setState({bdayError:true});
        error=true;
      } else {
        this.setState({bdayError:false});
      }

      if (this.state.contact_avatar === ''){
        this.setState({contact_avatarError:true});
        error=true;
      } else {
        this.setState({contact_avatarError:false});
      }

      if (this.state.category === ''){
        this.setState({categoryError:true});
        error=true;
      } else {
        this.setState({categoryError:false});
      }

      if (this.state.selectedEventDate === undefined){
        this.setState({last_event_dateError:true});
        error=true;
      } else {
        this.setState({last_event_dateError:false});
      }

      if (this.state.relationship === ''){
        this.setState({relationshipError:true});
        error=true;
      } else {
        this.setState({relationshipError:false});
      }

      if (this.state.home_address === ''){
        this.setState({home_addressError:true});
        error=true;
      } else {
        this.setState({home_addressError:false});
      }

      if (this.state.home_city === ''){
        this.setState({home_cityError:true});
        error=true;
      } else {
        this.setState({home_cityError:false});
      }

      if (this.state.home_state === ''){
        this.setState({home_stateError:true});
        error=true;
      } else {
        this.setState({home_stateError:false});
      }

      if (this.state.home_zip === ''){
        this.setState({home_zipError:true});
        error=true;
      } else {
        this.setState({home_zipError:false});
      }

      if (this.state.company_name === ''){
        this.setState({company_nameError:true});
        error=true;
      } else {
        this.setState({company_nameError:false});
      }

      if (this.state.job_title === ''){
        this.setState({job_titleError:true});
        error=true;
      } else {
        this.setState({job_titleError:false});
      }

      if (this.state.company_address === ''){
        this.setState({company_addressError:true});
        error=true;
      } else {
        this.setState({company_addressError:false});
      }

      if (this.state.company_city === ''){
        this.setState({company_cityError:true});
        error=true;
      } else {
        this.setState({company_cityError:false});
      }

      if (this.state.company_state === ''){
        this.setState({company_stateError:true});
        error=true;
      } else {
        this.setState({company_stateError:false});
      }

      if (this.state.company_zip === ''){
        this.setState({company_zipError:true});
        error=true;
      } else {
        this.setState({company_zipError:false});
      }

      if (this.state.cell_num === ''){
        this.setState({cell_numError:true});
        error=true;
      } else {
        this.setState({cell_numError:false});
      }

      if (this.state.email_address === ''){
        this.setState({email_addressError:true});
        error=true;
      } else {
        this.setState({email_addressError:false});
      }

      if (this.state.notes === ''){
        this.setState({notesError:true});
        error=true;
      } else {
        this.setState({notesError:false});
      }

      if (error){
        this.setState({formError:true});
        return
      }

      this.setState({formError:false})



      const data = new FormData(event.target)
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
      .then(response => response.json())
      .then(data => this.props.onAdd(data))
   }

  render(){
    const { selectedBirthDate } = this.state;
    const { selectedEventDate } = this.state;
    const cutOffDate = new Date()
    console.log(cutOffDate)
  return(
    <div className="ui main container grid four wide column centered">
    <form onSubmit={this.handleSubmit} className="ui form six wide column centered" >
      <h4 className="ui dividing header">Contact Information</h4>
      <div className="field">
      <label>Name</label>
      <div className="two fields">
      <div className="field">
        <input type="text" id="first_name" name="first_name" placeholder="First Name"
        value={this.state.first_name}
        onChange={this.onInputChange}
        error={this.state.first_nameError.toString()}/>
      </div>
      <div className="field">
        <input type="text" id="last_name" name="last_name" placeholder="Last Name"
        value={this.state.last_name}
        onChange={this.onInputChange}
        error={this.state.last_nameError.toString()}/>
      </div>
      </div>
      </div>



      <div className="field">
      <label>Category</label>
      <select className="ui fluid dropdown" id="category" name="category"
      value={this.state.category}
      onChange={this.onInputChange}
      error={this.state.categoryError.toString()}>
      <option value="">Category</option>
      <option value="Family">Family</option>
      <option value="Friends">Friends</option>
      <option value="Associates">Associates</option>
      </select>
      </div>

      <div className="field">
      <label>Relationship</label>
      <div className="field">
      <div className="field">
        <input type="text" id="relationship" name="relationship" placeholder="Relationship (e.g. Cousin, Code4Change Member, etc.)"
        value={this.state.relationship}
        onChange={this.onInputChange}
        error={this.state.relationshipError.toString()}/>
      </div>
      </div>
      </div>


      <div>
      <div className="field" >
      <label>Birth Date</label>
        {selectedBirthDate && <p>Day: {selectedBirthDate}</p>}
        {!selectedBirthDate}
        <DayPickerInput className="bday" onDayChange={this.handleBirthDateChange}
        value={this.state.bday}
        onChange={this.onInputChange}
        error={this.state.bdayError.toString()}/>
      </div>
      </div>


      <div>
      <div className="field">
      <div className="field">
      <label>Image</label>
        <input type="text" name="contact_avatar" placeholder="Insert Contact Image "
        value={this.state.contact_avatar}
        onChange={this.onInputChange}
        error={this.state.contact_avatarError.toString()}/>
      </div>
      </div>
      </div>



      <div className="field">
      <label>Home Address</label>
      <div className="field">
      <div className="field">
        <input type="text" name="home_address" placeholder="Street Address"
        value={this.state.home_address}
        onChange={this.onInputChange}
        error={this.state.home_addressError.toString()}/>
      </div>
      </div>
      </div>

      <div className="two field">
      <div className="two field">
      <label>City</label>
        <input type="text" name="home_city" placeholder="City"
        value={this.state.home_city}
        onChange={this.onInputChange}
        error={this.state.home_cityError.toString()}/>
      </div>
      <div className="field">

      <label>State</label>
      <select className="ui fluid dropdown" name="home_state"
      value={this.state.home_state}
      onChange={this.onInputChange}
      error={this.state.home_stateError.toString()}>
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
        <input type="text" name="home_zip" placeholder="zip code"
        value={this.state.home_zip}
        onChange={this.onInputChange}
        error={this.state.home_zipError.toString()}/>
      </div>
      </div>
      </div>

      <label>Company Name</label>
      <div className="field">
      <div className="field">
        <input type="text" name="company_name" placeholder="(e.g. Big Company Inc.)"
        value={this.state.company_name}
        onChange={this.onInputChange}
        error={this.state.company_nameError.toString()}/>
      </div>
      </div>

      <label>Job Title</label>
      <div className="field">
      <div className="field">
        <input type="text" name="job_title" placeholder="(e.g. Chief Executive Officer)"
        value={this.state.job_title}
        onChange={this.onInputChange}
        error={this.state.job_titleError.toString()}/>
      </div>
      </div>

<label>Work Address</label>
<div className="field">
<div className="field">
  <input type="text" name="company_address" placeholder="Street Address"
  value={this.state.company_address}
  onChange={this.onInputChange}
  error={this.state.company_addressError.toString()}/>
</div>

<div className="field">
<div className="field">
<label>Work City</label>
  <input type="text" name="company_city" placeholder="City"
  value={this.state.company_city}
  onChange={this.onInputChange}
  error={this.state.company_cityError.toString()}/>
</div>
</div>

</div>
</div>
<div className="field">
<div className="field">
<label>State</label>
<select className="ui fluid dropdown" name="company_state"
value={this.state.company_state}
onChange={this.onInputChange}
error={this.state.company_stateError.toString()}>
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
  <input type="text" name="company_zip" placeholder="zip code"
  value={this.state.company_zip}
  onChange={this.onInputChange}
  error={this.state.company_zipError.toString()}/>
</div>
</div>


<div className="field">
  <label>Cell # </label>
  <input type="tel" name="cell_num" placeholder="(e.g. 555-555-5555)"
  value={this.state.cell_num}
  onChange={this.onInputChange}
  error={this.state.cell_numError.toString()}/>
</div>

<div className="field">
  <label>Email </label>
  <input type="email" name="email_address" placeholder="(e.g. first.last@email.com)"
  value={this.state.email_address}
  onChange={this.onInputChange}
  error={this.state.email_addressError.toString()}/>
</div>




      </div>
      <h4 className="ui dividing header">Last Event Info</h4>


      <div>
      <div className="field">
      <label>Date of Last Event:</label>
        {selectedEventDate && <p>Day: {selectedEventDate}</p>}
        {!selectedEventDate}
        {/*try setting max date to be current date since last event should not be able to exist in the future, hard codingfor now*/}
        <DayPickerInput type="date"  className="last_event_date" onDayChange={this.handleDayChange}
        value={this.state.last_event_date}
        onChange={this.onInputChange}
        error={this.state.last_event_dateError.toString()}/>
      </div>
      </div>

      <div className="field">
        <label><strong>Notes: </strong></label>
        <textarea type="text field" name="notes"
        value={this.state.notes}
        onChange={this.onInputChange}
        error={this.state.notesError.toString()}></textarea>
      </div>


      <input className="ui button fluid" tabIndex="0" type="submit" value="Submit"
      disabled={!this.state.first_name||
                !this.state.last_name||
                !this.state.selectedBirthDate||
                !this.state.contact_avatar||
                !this.state.category||
                !this.state.selectedEventDate||
                !this.state.relationship||
                !this.state.home_address||
                !this.state.home_city||
                !this.state.home_state||
                !this.state.home_zip||
                !this.state.company_name||
                !this.state.job_title||
                !this.state.company_address||
                !this.state.company_city||
                !this.state.company_state||
                !this.state.company_zip||
                !this.state.cell_num||
                !this.state.email_address||
                !this.state.notes


      }/>

      </form>
      </div>
    )
  }
}

export default NewContactForm
