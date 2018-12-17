import React, { Component} from 'react';


class ContactView extends Component{
  // constructor(props){
  //   super(props)
  // }


  render(){

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
        <h2>Last Event: {this.props.currentCard.last_event_date}</h2>
        <p>Notes: {this.props.currentCard.notes}</p>
      </div>
      <button className="ui labeled icon inverted green button">
        <i className="add icon"></i>
        Add Event
      </button>
      <button className="ui labeled icon inverted blue button">
        <i className="edit icon"></i>
        Edit
      </button>
      <button className="ui right labeled icon inverted red button">
        <i className="delete icon"></i>
        Delete Contact
      </button>
    </div>
  </div>
  <h1>Events list with this contact will go here</h1>
</div>
    )
  }
}

export default ContactView
