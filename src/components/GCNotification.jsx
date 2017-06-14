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
    setTimeout(() => {
      this._gcn.classList.remove("gcn-enter");
      const timer = this.startTimer();
      this.setState({
        timer: timer
      });
    }, 1000);

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
    if(this.state.isOpen) {
      clearTimeout(this.state.timer);
      this._gcn.classList.add("gcn-exit");
      setTimeout(() => {
        this.setState({isOpen: false});
      }, 1000);
    }
  }

  render() {

    var skinClass = classNames({
      'GCNotification__success': this.props.type === 'success',
      'GCNotification__info': this.props.type === 'info',
      'GCNotification__warning': this.props.type === 'warning',
      'GCNotification__danger': this.props.type === 'danger',
    });

    if (this.state.isOpen) {
      return (
        <div
          className={`GCNotification GCNotification__toast gcn-enter ${skinClass}`}
          ref={(e) => this._gcn = e}
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
            className='GCNotification--timer gcn-decreaseTimer'
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
  type: PropTypes.string.isRequired
};

export default GCNotification;
