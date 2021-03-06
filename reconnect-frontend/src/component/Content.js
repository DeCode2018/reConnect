import React, { Component } from 'react';
import Instructions from './Instructions';
import FamilyView from './FamilyView';
import FriendsView from './FriendsView';
import AssociatesView from './AssociatesView';
import ContactView from './ContactView';
import NewContactForm from './NewContactForm';
import EditContactForm from './EditContactForm';

class Content extends Component{
    constructor(){
      super()

      this.state = {
        currentCard: null

      }
    }

    handleClick = (contact)=>{

      this.setState({currentCard:contact})
      this.props.contactView(contact)
    }

  renderContent = () => {

    //refactered from too many if and elseif statements
    switch(this.props.relationshipView) {
      case 'Family':
        return <FamilyView userInfo={this.props.userInfo} handleClick={this.handleClick} onDelete={this.props.onDelete}
        onEdit={this.props.onEdit}/>;
        // eslint-disable-next-line
        break;
      case 'Friends':
        return <FriendsView userInfo={this.props.userInfo}
        handleClick={this.handleClick}
        onDelete={this.props.onDelete}
        onEdit={this.props.onEdit}/>;
        // eslint-disable-next-line
        break;

      case 'Associates':
        return <AssociatesView userInfo={this.props.userInfo}
        handleClick={this.handleClick}
        onDelete={this.props.onDelete}
        onEdit={this.props.onEdit}/>;
        // eslint-disable-next-line
        break;
      case 'Add Contact':
        return <NewContactForm userInfo={this.props.userInfo}
        onAdd={this.props.onAdd}/>;
        // eslint-disable-next-line
        break;
      case 'edit':
        return <EditContactForm
        currentCard={this.state.currentCard}
        onEdit={this.props.onEdit}/>;
        // eslint-disable-next-line
        break;
      case this.state.currentCard:
        return <ContactView currentCard={this.state.currentCard}
        relationshipView={this.state.currentContainerView}
        onDelete={this.props.onDelete}
        onEdit={this.props.onEdit}
        onAddEvent={this.props.onAddEvent}
        onDeleteEvent={this.props.onDeleteEvent}
        onUpdateLastEventDay={this.props.onUpdateLastEventDay}
        userInfo={this.props.userInfo}
        optimisticRemove={this.props.optimisticRemove}
        handleEditClick={this.props.handleEditClick}
      />
        // eslint-disable-next-line
        break;
        case 'delete':
        return <Instructions/>;
        // eslint-disable-next-line
        break;
      default:
        return <Instructions />;
    }
  }




  //   if (this.props.relationshipView !== this.state.currentCard){
  //     if (this.props.relationshipView === `Family`) {
  //       return <FamilyView userInfo={this.props.userInfo} handleClick={this.handleClick}/>;
  //     } else if (this.props.relationshipView === `Friends`) {
  //       return <FriendsView userInfo={this.props.userInfo}/>;
  //     } else if (this.props.relationshipView === `Associates`) {
  //       return <AssociatesView userInfo={this.props.userInfo}/>;
  //     }
  //     else {
  //       return <Instructions />;
  //     }
  //   }else{
  //     return <ContactView currentCard={this.state.currentCard}/>
  //   }
  // }



    render() {
      return (
        <div className='master-detail-element detail'>
          {this.renderContent()}
        </div>
      );
    }
}

export default Content;
