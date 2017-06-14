import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CloseIcon from './CloseIcon';
import './GCNotification.css';

class GCNotification extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: true,
      timer: null,
    }
  }

  componentDidMount() {
    const timer = this.startTimer();
    this.setState({
      timer: timer
    });
  }

  startTimer() {
    return setTimeout(this.close, 5000);
  }

  resetTimer = () => {
    this._timerBar.classList.add("gcn-decreaseTimer");
    this.setState({ timer: this.startTimer() });
  }

  pauseTimer = () => {
    clearTimeout(this.state.timer);
    this._timerBar.classList.remove("gcn-decreaseTimer");
  }

  close = () => {
    this.setState({isOpen: false});
  }

  render() {

    var timerClass = classNames({
      'GCNotification--timer': true,
      'gcn-decreaseTimer': this.state.timer
    });

    if (this.state.isOpen) {
      return (
        <div
          className="GCNotification GCNotification__toast GCNotification__success"
          onMouseEnter={this.pauseTimer}
          onMouseLeave={this.resetTimer}>
          <p className="GCNotification--msg">
            {this.props.message}
          </p>

          <div className="GCNotification--close"
            onClick={this.close}>
            <CloseIcon
              size="12px"
            />
          </div>

          <div
            className={timerClass}
            ref={(e) => this._timerBar = e}
            />

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
