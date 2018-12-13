import React, { Component, Fragment } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Content from './Content';

class BodyContainer extends Component {
  constructor() {
      super();

      this.state = {
        usersData: null,
        currentRelationship:''
      };
    }

    componentDidMount() {
      fetch('http://localhost:3000/api/v1/users')
        .then(response => response.json())
        .then(usersData => this.setState({ usersData }));
    }

    relationshipView = (event) =>{
      this.setState({
        currentRelationship: event.value
      })
    }

  render(){
    const options = ['Family', 'Friends', 'Associates']
    return(
      <Fragment>
      <Dropdown options={options} onChange={this.relationshipView}  placeholder="Select a Relationship Type" value={this.state.currentRelationship}/>
      <Content relationshipView={this.state.currentRelationship} userInfo={this.state.usersData}/>
      </Fragment>
    )
  }
}


export default BodyContainer;
