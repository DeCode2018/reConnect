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
    //GET Fetch call for all of users 1's Data...may need to adjust this on AUTH setup
    componentDidMount() {
      fetch('http://localhost:3000/api/v1/users/1')
        .then(response => response.json())
        .then(usersData => this.setState({ usersData }));
    }
    //based on users input on relationship drop down screen this function set's state to update to the appropriate view.
    relationshipView = (event) =>{
      this.setState({
        currentContainerView: event.value
      })
    }
    //function to call render of EditContactForm
    handleEditClick =() =>{
      this.setState({
        currentContainerView: "edit"
      })
    }
    //callback function to setState of usersData to reflect the usersData minus the deleted object
    onDelete = (deletedCard) =>{
      var filtContacts = this.state.usersData.contacts.filter(contact=>{
        return contact.id !== deletedCard.id
      })
      console.log(filtContacts)
      this.setState({
         usersData: {...this.state.usersData, contacts:filtContacts},
         currentContainerView:deletedCard.category
      })

      }

      onAdd = (addedContact) =>{

      var addContacts = this.state.usersData.contacts
          addContacts.push(addedContact)
        console.log(addedContact)
        console.log(addContacts)
        this.setState({
           usersData: {...this.state.usersData, contacts:addContacts},
           currentContainerView:`${addedContact.category}`
        })

        }

        onEdit = (editedContact) =>{

        var editContacts = this.state.usersData.contacts
            editContacts.forEach(editcontact=>{
              console.log(editedContact)
              console.log(editcontact)
              if (editcontact.id === editedContact.id){
                var a = editContacts.indexOf(editcontact)
                console.log(editedContact)
                console.log(editcontact)
                return editContacts[a] = editedContact
              }
            })

          this.setState({
             usersData: {...this.state.usersData, contacts:editContacts},
             currentContainerView:`${editedContact.category}`
          })

          }

    contactView = (contactObject) =>{

      this.setState({
        currentContainerView: contactObject
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
      <Content relationshipView={this.state.currentContainerView} userInfo={this.state.usersData}
      contactView={this.contactView}
      onDelete={this.onDelete}
      onAdd={this.onAdd}
      onEdit={this.onEdit}
      handleEditClick={this.handleEditClick}
      optimisticRemove={this.optimisticRemove}/>
      <button className="ui black button" onClick={this.handleAddButton}

      >Add A Connection</button>
      </Fragment>



    )
  }
}


export default BodyContainer;
