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
    clearTimeout(this.state.timer);
    this.resetClass();
    this.setState({ timer: this.startTimer() });
  }

  resetClass = () => {
    this._timerBar.classList.remove("gcn-decreaseTimer");
    setTimeout(() => {
      this._timerBar.classList.add("gcn-decreaseTimer");
    }, 100);
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
          onClick={this.resetTimer}>
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
