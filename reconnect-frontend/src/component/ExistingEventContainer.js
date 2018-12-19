import React, { Component} from 'react';

class ExistingEventContainer extends Component{
  render(){


    return(
      <div><li><strong><u>{this.props.eventInfo.name}</u></strong>|| {this.props.eventInfo.location} || {this.props.eventInfo.descriptioin} </li></div>



    )
  }
}


export default ExistingEventContainer
