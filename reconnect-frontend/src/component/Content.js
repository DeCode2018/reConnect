import React, { Component } from 'react';
import Instructions from './Instructions';
import FamilyView from './FamilyView';
import FriendsView from './FriendsView';
import AssociatesView from './AssociatesView';

class Content extends Component{

  renderContent = () => {

      if (this.props.relationshipView === `Family`) {
        return <FamilyView userInfo={this.props.userInfo}/>;
      } else if (this.props.relationshipView === `Friends`) {
        return <FriendsView userInfo={this.props.userInfo}/>;
      } else if (this.props.relationshipView === `Associates`) {
        return <AssociatesView userInfo={this.props.userInfo}/>;
      } else {
        return <Instructions />;
      }
    }

    render() {
      return (
        <div className='master-detail-element detail'>
          {this.renderContent()}
        </div>
      );
    }
}

export default Content;
