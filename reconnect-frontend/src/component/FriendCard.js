import React, { Component } from 'react';

class FriendCard extends Component{
  render(){
    return(


  <div className="card">
    <div className="image">
      <img src={this.props.friendMember.contact_avatar} alt='user avatar'/>
    </div>
    <div className="content">
      <div className="header">{this.props.friendMember.name}</div>
      <div className="meta">
        <h6>{this.props.friendMember.category}</h6>
      </div>
      <div className="description">
        Matthew is an interior designer living in New York.
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
      Date of Last Event:  {this.props.friendMember.last_event_date}
      </span>
      <span>
        <i className="user icon"></i>
        75 Friends
      </span>
    </div>


</div>
    )
  }
}

export default FriendCard
