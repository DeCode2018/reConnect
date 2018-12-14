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
        <h6>{this.props.associateMember.category}</h6>
      </div>
      <div className="description">
        Matthew is an interior designer living in New York.
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
      Date of Last Event:  {this.props.associateMember.last_event_date}
      </span>
      <span>
        <i className="user icon"></i>
        75 Associates
      </span>
    </div>


</div>
    )
  }
}

export default AssociateCard
