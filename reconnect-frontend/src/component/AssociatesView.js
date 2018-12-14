import React, { Component, Fragment } from 'react';
import AssociateCard from './AssociateCard'

class AssociatesView extends Component{
  render(){
    let allUserInfo = this.props.userInfo

      let filteredAssociate = allUserInfo[0].contacts.filter(contact=>{
          return contact.category === 'associate'
        })
        console.log(filteredAssociate)
    return(
      <Fragment>
      <div className="ui link cards">
        {filteredAssociate.map(associateMember => <AssociateCard associateMember={associateMember} key={associateMember.id}/>)}
        </div>
      </Fragment>
    )
  }
}

export default AssociatesView
