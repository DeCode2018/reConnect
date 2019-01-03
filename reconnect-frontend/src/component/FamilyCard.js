import React, { Component } from 'react';

class FamilyCard extends Component{
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


  return configPastDue
}
  render(){

    console.log(this.props.familyMember.last_event_date)
    console.log(this.pastDueDate())
    return(

  <div className="card" onClick={()=>this.props.handleClick(this.props.familyMember)}>
    <div className="image">
      <img src={this.props.familyMember.contact_avatar} alt='family Member avatar'/>
    </div>
    <div className="content">
      <div className="header">{this.props.familyMember.first_name} {this.props.familyMember.last_name}</div>
      <div className="meta">
        <h2>{this.props.familyMember.relationship}</h2>
      </div>

    </div>
    {(this.props.familyMember.last_event_date <= this.pastDueDate())?
    <div className="extra content ">
      <span className="ui red message right floated">
      Date of Last Event:  {new Date(this.props.familyMember.last_event_date.replace(/-/g, '/')).toDateString()}
      </span>
    </div>:
    <div className="extra content ">
      <span className="ui center floated">
      Date of Last Event:  {new Date(this.props.familyMember.last_event_date.replace(/-/g, '/')).toDateString()==="Invalid Date"?<h4><strong>No Events...set one up today!</strong></h4>: new Date(this.props.familyMember.last_event_date.replace(/-/g, '/')).toDateString()}
      </span>
    </div>
  }

</div>

  )
}
}



export default FamilyCard
