import React, { Component } from 'react';

class FriendCard extends Component{
  constructor(){
    super()
    this.state ={
      pastDueDate: '',
      duration: 0
    }
}
  pastDueDate=()=>{
    var pastDue = new Date();

    let duration2 = parseInt(this.props.duration)

     pastDue.setDate(pastDue.getDate()- duration2)


      let year = pastDue.getFullYear();
      let  month = pastDue.getMonth()+1;
      let  dt = pastDue.getDate();

          if (dt < 10) {
            dt = '0' + dt;
          }
          if (month < 10) {
            month = '0' + month;
          }
       let configPastDue = year+'-'+month+'-'+dt

    return configPastDue
  }


  render(){
    return(

  <div className="card" onClick={()=>this.props.handleClick(this.props.friendMember)}>
    <div className="image">
      <img src={this.props.friendMember.contact_avatar} alt='user avatar'/>
    </div>
    <div className="content">
      <div className="header">{this.props.friendMember.first_name} {this.props.friendMember.last_name}</div>
      <div className="meta">
        <h2>{this.props.friendMember.relationship}</h2>
      </div>

      </div>
      {(this.props.friendMember.last_event_date <= this.pastDueDate())?
      <div className="extra content ">
        <span className="ui red message right floated">
        Date of Last Event:  {new Date(this.props.friendMember.last_event_date).toDateString()}
        </span>
      </div>:
      <div className="extra content ">
        <span className="ui right floated">
        Date of Last Event:  {new Date(this.props.friendMember.last_event_date).toDateString()}
        </span>
      </div>
    }

    </div>
    )
  }
}

export default FriendCard
