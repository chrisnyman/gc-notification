import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from './CloseIcon';
import './GCNotification.css';

class GCNotification extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: true,
    }
  }

  close() {
    this.setState({isOpen: false});
  }

  render() {
    if (this.state.isOpen) {
      return (
        <div className="GCNotification GCNotification__toast GCNotification__success">
          <p className="GCNotification--msg">
            {this.props.message}
          </p>

          <div className="GCNotification--close"
            onClick={() => this.close()}>
            <CloseIcon
              color="#000000"
              size="12px"
            />
          </div>

          <div className="GCNotification--timer"/>

        </div>
      );
    } else {
      return null;
    }

  }
}

GCNotification.propTypes = {
  message: PropTypes.node.isRequired,
};

export default GCNotification;
