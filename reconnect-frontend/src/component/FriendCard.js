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
       let configPastDue = month+'-'+dt+'-'+year
       let date1 = this.props.friendMember.last_event_date.slice(0,10)

       console.log(date1)
       console.log(configPastDue)
       console.log(date1<configPastDue)
    return configPastDue
  }


  render(){
    return(

  <div className="card" onClick={()=>this.props.handleClick(this.props.friendMember)}>
    <div className="ui middle aligned medium circular image centered bordered">
      <img src={this.props.friendMember.contact_avatar} alt='user avatar'/>
    </div>
    <div className="content">
      <div className="header">{this.props.friendMember.first_name} {this.props.friendMember.last_name}</div>
      <div className="meta">
        <h2>{this.props.friendMember.relationship}</h2>
      </div>

      </div>
      {(this.props.friendMember.last_event_date.slice(0,10) <= this.pastDueDate())?
      <div className="extra content ">
        <span className="ui red message right floated">
        Date of Last Event:  {new Date(this.props.friendMember.last_event_date.replace(/-/g, '/')).toDateString()}
        </span>
      </div>:
      <div className="extra content ">
      <span className="ui center floated">
      Date of Last Event:  {new Date(this.props.friendMember.last_event_date.replace(/-/g, '/')).toDateString()==="Invalid Date"?<h4><strong>No Events...set one up today!</strong></h4>: new Date(this.props.friendMember.last_event_date.replace(/-/g, '/')).toDateString()}
      </span>
      </div>
    }

    </div>
    )
  }
}

export default FriendCard
