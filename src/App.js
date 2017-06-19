import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNotification } from './actions/notificationActions';
import GCNotification from './components/GCNotification';

import './App.css';


class App extends Component {
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
    return (
      <div className="App">
        <div className="GCNotificationContainer">
          {this.renderNotificationList()}
        </div>

        <section>
          <h4>Toast Notification</h4>
        <p>Small animation that appears in the top right corner of the screen.</p>

          <div className="btn-group">
            <button
              className="success-btn btn"
              onClick={() => this.props.onButtonPress('That was successful', 'success')}>Success</button>
            <button
              className="info-btn btn"
              onClick={() => this.props.onButtonPress('This is just some information', 'info')}>Information</button>
            <button
              className="warning-btn btn"
              onClick={() => this.props.onButtonPress('This is a warning message', 'warning')}>Warning</button>
            <button
              className="danger-btn btn"
              onClick={() => this.props.onButtonPress('This is a dangerous message', 'danger')}>Danger</button>
          </div>
        </section>
      </div>
    );
  }
}

// TODO put in own module
function mapStateToProps(state) {
  return {
    notifications: state.notifications
  };
}

const mapDispatchToProps = {
  onButtonPress: addNotification
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
