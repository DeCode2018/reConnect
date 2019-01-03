import React, { Component, Fragment } from 'react';
import FamilyCard from './FamilyCard'

class FamilyView extends Component{

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

      let filteredFamily = allUserInfo.contacts.filter(contact=>{
          return contact.category === 'Family'
        })

    return(
      <Fragment>
      {/*<Dropdown options={options}
      onChange={this.setDuration}
      placeholder='Select period of time to keep in contact with this relationship group'
      value={this.state.duration} />*/}

      <select className='ui fluid dropdown center item' name="duration" value={`${this.state.duration}`}
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
        {filteredFamily.map(familyMember => <FamilyCard familyMember={familyMember} key={familyMember.id} handleClick={this.props.handleClick}
          duration={this.state.duration}
          onDelete={this.props.onDelete}/>)}

        </div>
      </Fragment>
    )
  }
}

export default FamilyView
