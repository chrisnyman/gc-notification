import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GCNotification.css';

class GCNotification extends Component {

  render() {
    return (
      <div className="GCNotification">
        <p className="GCNotification--msg">
          {this.props.message}
        </p>

        <div className="GCNotification--close">
          X
        </div>

        <div className="GCNotification--timer"/>

      </div>
    );
  }
}

GCNotification.propTypes = {
  message: PropTypes.node.isRequired,
};

export default GCNotification;
