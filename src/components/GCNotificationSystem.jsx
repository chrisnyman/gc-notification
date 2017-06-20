import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GCNotification from './GCNotification';

import CloseIcon from './CloseIcon';
import './GCNotification.css';

export default class GCNotificationSystem extends Component {

  renderNotificationList = () => {
    return this.props.notifications.map( i => {
      return (
        <GCNotification
          level={i.level}
          message={i.message}
        />
      );
    });
  }

  render() {
    return(
      <div className="GCNotificationContainer">
        {this.renderNotificationList()}
      </div>
    );
  }
}
