import React, { Component } from 'react';
import GCNotification from './GCNotification';
const list = [
  {
    message: 'This is an info message',
    level: 'info'
  }, {
    message: 'This is dangerous',
    level: 'danger'
  }
];
export default class GCNotificationSystem extends Component {
  render() {
    console.log(this);
    const NotificationList = list.map( i => {
      return (
        <GCNotification
          type={i.level}
          message={i.message}
        />
      );
    });

    return (
      <div className="GCNotificationContainer">
        {NotificationList}
      </div>
    )
  }
}
