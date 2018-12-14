import React, { Component, Fragment } from 'react';
import FamilyCard from './FamilyCard'

class FamilyView extends Component{

  render(){
    let allUserInfo = this.props.userInfo

      let filteredFamily = allUserInfo[0].contacts.filter(contact=>{
          return contact.category === 'family'
        })
        console.log(filteredFamily)
    return(
      <Fragment>
      <div className="ui link cards">
        {filteredFamily.map(familyMember => <FamilyCard familyMember={familyMember} key={familyMember.id}/>)}
        </div>
      </Fragment>
    )
  }
}

export default FamilyView
