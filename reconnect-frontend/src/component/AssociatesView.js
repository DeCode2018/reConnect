import React, { Component, Fragment } from 'react';
import AssociateCard from './AssociateCard'

class AssociatesView extends Component{
  render(){
    let allUserInfo = this.props.userInfo

      let filteredAssociate = allUserInfo.contacts.filter(contact=>{
          return contact.category === 'Associates'
        })

    return(
      <Fragment>
      <div className="ui link cards">
        {filteredAssociate.map(associateMember => <AssociateCard associateMember={associateMember} key={associateMember.id}
        handleClick={this.props.handleClick}/>)}
        </div>
      </Fragment>
    )
  }
}

export default AssociatesView
