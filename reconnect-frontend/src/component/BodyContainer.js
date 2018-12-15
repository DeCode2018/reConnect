import React, { Component, Fragment } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Content from './Content';

class BodyContainer extends Component {
  constructor() {
      super();

      this.state = {
        usersData: null,
        currentContainerView:''
      };
    }

    componentDidMount() {
      fetch('http://localhost:3000/api/v1/users')
        .then(response => response.json())
        .then(usersData => this.setState({ usersData }));
    }

    relationshipView = (event) =>{
      this.setState({
        currentContainerView: event.value
      })
    }

    contactView = (familyMember) =>{
      this.setState({
        currentContainerView: familyMember
      })
    }

    handleAddButton = () =>{
      this.setState({
        currentContainerView: "add contact"
      })
    }

  render(){
    const options = ['Select a Relationship Type','Family', 'Friends', 'Associates']
    return(
      <Fragment>
      <Dropdown options={options} onChange={this.relationshipView}  placeholder="Select a Relationship Type" value={this.state.currentContainerView}/>
      <Content relationshipView={this.state.currentContainerView} userInfo={this.state.usersData} contactView={this.contactView}/>
      <button className="ui black button" onClick={this.handleAddButton}>Add A Connection</button>
      </Fragment>



    )
  }
}


export default BodyContainer;
