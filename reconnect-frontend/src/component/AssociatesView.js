import React, { Component, Fragment } from 'react';
import AssociateCard from './AssociateCard'

class AssociatesView extends Component{

  constructor(){
    super()
    this.state ={
      duration: 365
    }
  }

  setDuration = (event) =>{
    this.setState({
      duration: event.currentTarget.value
    })
  }
  render(){
    let allUserInfo = this.props.userInfo

      let filteredAssociate = allUserInfo.contacts.filter(contact=>{
          return contact.category === 'Associates'
        })

    return(
      <Fragment>

      <select className='ui fluid dropdown center' name="duration" value={`${this.state.duration}`}
      onChange={(event)=>this.setDuration(event)}>
      <option value="">Overdue Event Duration</option>
      <option value={7}>1 week</option>
      <option value={14}>2 weeks</option>
      <option value={30}>1 month</option>
      <option value={90}>3 months</option>
      <option value={180}>6 months</option>
      <option value={365}>1 year</option>
      </select>

      <div className="ui link cards">
        {filteredAssociate.map(associateMember => <AssociateCard associateMember={associateMember} key={associateMember.id}
        duration={this.state.duration}
        onDelete={this.props.onDelete}
        handleClick={this.props.handleClick}/>)}
        </div>
      </Fragment>
    )
  }
}

export default AssociatesView
