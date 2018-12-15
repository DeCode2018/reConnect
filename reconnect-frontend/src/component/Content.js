import React, { Component } from 'react';
import Instructions from './Instructions';
import FamilyView from './FamilyView';
import FriendsView from './FriendsView';
import AssociatesView from './AssociatesView';
import ContactView from './ContactView';
import NewContactForm from './NewContactForm';

class Content extends Component{
    constructor(){
      super()

      this.state = {
        currentCard: null

      }
    }

    handleClick = (familyMember)=>{
      this.setState({currentCard:familyMember})
      this.props.contactView(familyMember)
    }

  renderContent = () => {

    //refactered from too many if and elseif statements
    switch(this.props.relationshipView) {
      case 'Family':
        return <FamilyView userInfo={this.props.userInfo} handleClick={this.handleClick}/>;
        break;
      case 'Friends':
        return <FriendsView userInfo={this.props.userInfo}/>;
        break;
      case 'Associates':
        return <AssociatesView userInfo={this.props.userInfo}/>;
        break;
      case 'add contact':
        return <NewContactForm />;
        break;
      case this.state.currentCard:
        return <ContactView currentCard={this.state.currentCard} />
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
