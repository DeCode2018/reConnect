import React, { Component, Fragment } from 'react';
import FriendCard from './FriendCard'
class FriendsView extends Component{

  render(){
    let allUserInfo = this.props.userInfo

      let filteredFriend = allUserInfo.contacts.filter(contact=>{
          return contact.category === 'friend'
        })
    
    return(
      <Fragment>
      <div className="ui link cards">
        {filteredFriend.map(friendMember => <FriendCard friendMember={friendMember} key={friendMember.id}
        handleClick={this.props.handleClick}/>)}
        </div>
      </Fragment>
    )
  }
}

export default FriendsView
