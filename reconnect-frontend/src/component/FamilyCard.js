import React, { Component } from 'react';

class FamilyCard extends Component{
  constructor(){
    super()

    var today = new Date(),
            date =
            (today.getFullYear())+ '-' + (today.getMonth() - 5) + '-' + (today.getDate()-4);



    this.state ={
      pastDueDate: date
    }
  }


  render(){
console.log(this.state.pastDueDate)
console.log(this.props.familyMember.last_event_date)
    return(
  <div className="card" onClick={()=>this.props.handleClick(this.props.familyMember)}>
    <div className="image">
      <img src={this.props.familyMember.contact_avatar} alt='user avatar'/>
    </div>
    <div className="content">
      <div className="header">{this.props.familyMember.first_name} {this.props.familyMember.last_name}</div>
      <div className="meta">
        <h2>{this.props.familyMember.relationship}</h2>
      </div>

    </div>
    {(this.props.familyMember.last_event_date <= this.state.pastDueDate)?
    <div className="extra content ">
      <span className="ui red message right floated">
      Date of Last Event:  {new Date(this.props.familyMember.last_event_date).toDateString()}
      </span>
    </div>:
    <div className="extra content ">
      <span className="ui right floated">
      Date of Last Event:  {new Date(this.props.familyMember.last_event_date).toDateString()}
      </span>
    </div>}

</div>
  )
}
}



export default FamilyCard
