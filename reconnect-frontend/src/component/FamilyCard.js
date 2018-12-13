import React, { Component } from 'react';

class FamilyCard extends Component{
  render(){
    return(

      <div className="ui link cards">
  <div className="card">
    <div className="image">
      <img src="https://cdn0.iconfinder.com/data/icons/flat-profession-icons/48/2-512.png" alt='user avatar'/>
    </div>
    <div className="content">
      <div className="header">Matt Giampietro</div>
      <div className="meta">
        <h6>Friends</h6>
      </div>
      <div className="description">
        Matthew is an interior designer living in New York.
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
        Joined in 2013
      </span>
      <span>
        <i className="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>

</div>
    )
  }
}

export default FamilyCard
