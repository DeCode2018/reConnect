import React, { Component } from 'react';

class FamilyCard extends Component{

  render(){

    return(
  <div className="card" onClick={()=>this.props.handleClick(this.props.familyMember)}>
    <div className="image">
      <img src={this.props.familyMember.contact_avatar} alt='user avatar'/>
    </div>
    <div className="content">
      <div className="header">{this.props.familyMember.name}</div>
      <div className="meta">
        <h2>{this.props.familyMember.relationship}</h2>
      </div>

    </div>
    <div className="extra content">
      <span className="right floated">
      Date of Last Event:  {new Date(this.props.familyMember.last_event_date).toDateString()}
      </span>

    </div>
</div>
  )
}
}



export default FamilyCard
