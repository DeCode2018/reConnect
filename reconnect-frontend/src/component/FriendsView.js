import React, { Component, Fragment } from 'react';
import FriendCard from './FriendCard'
class FriendsView extends Component{
  render(){
    let allUserInfo = this.props.userInfo

      let filteredFriend = allUserInfo[0].contacts.filter(contact=>{
          return contact.category === 'friend'
        })
        console.log(filteredFriend)
    return(
      <Fragment>
      <div className="ui link cards">
        {filteredFriend.map(friendMember => <FriendCard friendMember={friendMember} key={friendMember.id}/>)}
        </div>
      </Fragment>
    )
  }
}

export default FriendsView
