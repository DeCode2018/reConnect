import React, { Component } from 'react';

class AssociateCard extends Component{
  render(){
    return(


  <div className="card">
    <div className="image">
      <img src={this.props.associateMember.contact_avatar} alt='user avatar'/>
    </div>
    <div className="content">
      <div className="header">{this.props.associateMember.name}</div>
      <div className="meta">
        <h2>{this.props.associateMember.relationship}</h2>
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
      Date of Last Event:  {new Date(this.props.associateMember.last_event_date).toDateString()}
      </span>
      
    </div>


</div>
    )
  }
}

export default AssociateCard
