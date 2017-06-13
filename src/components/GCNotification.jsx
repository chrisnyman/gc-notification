import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from './CloseIcon';
import './GCNotification.css';

class GCNotification extends Component {

  render() {
    return (
      <div className="GCNotification GCNotification__toast GCNotification__success">
        <p className="GCNotification--msg">
          {this.props.message}
        </p>

        <div className="GCNotification--close">
          <CloseIcon
            color="#000000"
            size="12px"
          />
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
