import React, { Component, Fragment } from 'react';
import FamilyCard from './FamilyCard'

class FamilyView extends Component{

  render(){
    let allUserInfo = this.props.userInfo

      let filteredFamily = allUserInfo.contacts.filter(contact=>{
          return contact.category === 'Family'
        })

    return(
      <Fragment>
      <div className="ui link cards">
        {filteredFamily.map(familyMember => <FamilyCard familyMember={familyMember} key={familyMember.id} handleClick={this.props.handleClick}
          onDelete={this.props.onDelete}/>)}
        </div>
      </Fragment>
    )
  }
}

export default FamilyView
