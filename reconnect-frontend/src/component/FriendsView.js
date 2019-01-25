import React, { Component, Fragment } from 'react';
import FriendCard from './FriendCard'

class FriendsView extends Component{

  constructor(){
    super()
    this.state ={
      duration: 0
    }
  }

  setDuration = (event) =>{
    this.setState({
      duration: event.currentTarget.value
    })
  }

  render(){
    let allUserInfo = this.props.userInfo

      let filteredFriend = allUserInfo.contacts.filter(contact=>{
          return contact.category === 'Friends'
        })

    return(
      <Fragment>

      <div>
      <select className='ui dropdown center item' name="duration" value={`${this.state.duration}`}
      onChange={(event)=>this.setDuration(event)}>
      <option value={10000}>Choose Overdue Event Duration</option>
      <option value={7}>1 week</option>
      <option value={14}>2 weeks</option>
      <option value={30}>1 month</option>
      <option value={90}>3 months</option>
      <option value={180}>6 months</option>
      <option value={365}>1 year</option>
      </select>
      </div>
      <div className="ui link cards">
        {filteredFriend.map(friendMember => <FriendCard friendMember={friendMember} key={friendMember.id}
        duration={this.state.duration}
        handleClick={this.props.handleClick}
        onDelete={this.props.onDelete}/>)}
        </div>
      </Fragment>
    )
  }
}

export default FriendsView
