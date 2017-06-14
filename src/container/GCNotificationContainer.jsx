import React, { Component } from 'react';
import GCNotification from '../components/GCNotification';

const meh = [
  {
    type: 'info',
    message: 'This is a message.'
  }, {
    type: 'success',
    message: 'This is another message.'
  }, {
    type: 'warning',
    message: 'This is a message.'
  }, {
    type: 'danger',
    message: 'This is another message.'
  },
];

class GCNotificationContainer extends Component {
  render() {
    const NotificationList = meh.map( n => {
      return (
        <GCNotification
          type={n.type}
          message={n.message}
        />
      );
    });

    return(
      <div className="GCNotificationContainer">
        { NotificationList }
      </div>
    );
  }
}

export default GCNotificationContainer;
