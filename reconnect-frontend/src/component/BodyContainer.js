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

      this.setState({
         usersData: {...this.state.usersData, contacts:filtContacts},
         currentContainerView:deletedCard.category
      })

      }

      onDeleteEvent = (deletedEvent) =>{
        console.log(deletedEvent)
        var filtEvents = this.state.usersData.events.filter(event=>{
          return event.id !== deletedEvent
        })
        console.log(filtEvents)
        this.setState({
           usersData: {...this.state.usersData, events:filtEvents}
        })

        }

      onAdd = (addedContact) =>{

      var addContacts = this.state.usersData.contacts
          addContacts.push(addedContact)

        this.setState({
           usersData: {...this.state.usersData, contacts:addContacts},
           currentContainerView:`${addedContact.category}`
        })

        }

        onAddEvent = (addedEvent) =>{

          console.log(addedEvent)

        var addEvents = this.state.usersData.events
            addEvents.push(addedEvent)
            console.log(addEvents)
          this.setState({
             usersData: {...this.state.usersData, events:addEvents}
          })
          console.log(this.state.usersData)
          }

        onEdit = (editedContact) =>{

        var editContacts = this.state.usersData.contacts
            editContacts.forEach(editcontact=>{

              if (editcontact.id === editedContact.id){
                var a = editContacts.indexOf(editcontact)

                return editContacts[a] = editedContact
              }
            })

          this.setState({
             usersData: {...this.state.usersData, contacts:editContacts},
             currentContainerView:`${editedContact.category}`
          })

          }

    onUpdateLastEventDay = (updatedEvent,currentCard) =>{
           console.log(updatedEvent)
           console.log(currentCard)

          var updateContactsLastEvent = this.state.usersData.events
              updateContactsLastEvent.forEach(contactToUpdate=>{

                if (contactToUpdate.id === updatedEvent.id){

                  return currentCard.last_event_date = updatedEvent.event_date

                }
              })

            this.setState({
               usersData: {...this.state.usersData, events:updateContactsLastEvent},
               // currentContainerView:`${currentCard.category}`
            })


            fetch(`http://localhost:3000/api/v1/contacts/${currentCard.id}`, {
              method: "PATCH",
              headers: {
                "Content-type" : "application/json"
              },
              body: JSON.stringify({
                last_event_date: currentCard.last_event_date,
                status: updatedEvent.status

              })
            })

            fetch(`http://localhost:3000/api/v1/events/${updatedEvent.id}`, {
              method: "PATCH",
              headers: {
                "Content-type" : "application/json"
              },
              body: JSON.stringify({
                status: updatedEvent.status

              })
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
      onAddEvent={this.onAddEvent}
      onDeleteEvent={this.onDeleteEvent}
      onEdit={this.onEdit}
      handleEditClick={this.handleEditClick}
      onUpdateLastEventDay={this.onUpdateLastEventDay}
      optimisticRemove={this.optimisticRemove}/>
      <button className="ui black button" onClick={this.handleAddButton}

      >Add A Connection</button>
      </Fragment>



    )
  }
}


export default BodyContainer;
