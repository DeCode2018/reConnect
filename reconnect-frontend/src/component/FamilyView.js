import React, { Component, Fragment } from 'react';
import FamilyCard from './FamilyCard'

class FamilyView extends Component{

  render(){
    let allUserInfo = this.props.userInfo

      allUserInfo.forEach(user=>{
        user.contacts.filter(contact=>{
          console.log(contact)
        })
      })
    return(
      <Fragment>
        <FamilyCard />
      </Fragment>
    )
  }
}

export default FamilyView
