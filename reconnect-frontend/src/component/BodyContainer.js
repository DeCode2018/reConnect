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
      fetch('http://localhost:3000/api/v1/users/1')
        .then(response => response.json())
        .then(usersData => this.setState({ usersData }));
    }

    relationshipView = (event) =>{
      this.setState({
        currentContainerView: event.value
      })
    }

    handleEditClick =() =>{
      this.setState({
        currentContainerView: "edit"
      })
    }

    onDelete = (currentCard) =>{
      //try updating usersData where you remove (splice off) the contact with the appropriate id. That change of state should cause the optimistic re-render you are looking for per Melanie.
      // window.location.reload()

      this.setState({
        currentContainerView: [],

      })
    }

    optimisticRemove = (contacts, idToDelete)=>{
     return contacts.filter(contact=>{
       return contact !== idToDelete

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
    const options = ['Select a Relationship Type','family', 'friends', 'associates']
    return(
      <Fragment>
      <Dropdown options={options} onChange={this.relationshipView}  placeholder="Select a Relationship Type" value={this.state.currentContainerView}/>
      <Content relationshipView={this.state.currentContainerView} userInfo={this.state.usersData}
      contactView={this.contactView}
      onDelete={this.onDelete}
      handleEditClick={this.handleEditClick}
      optimisticRemove={this.optimisticRemove}/>
      <button className="ui black button" onClick={this.handleAddButton}>Add A Connection</button>
      </Fragment>



    )
  }
}


export default BodyContainer;
