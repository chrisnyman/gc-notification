import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNotification } from './actions/notificationActions';
import GCNotification from './components/GCNotification';

import './App.css';


class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

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
        {this.renderNotificationList()}
        <h2>gc-notification</h2>

        <section>
          <h4>Notification Banner</h4>

          <p>Banner that appears at the top of the page</p>

          <div className="btn-group">
            <button
              className="success-btn btn">Success</button>
            <button
              className="info-btn btn">Information</button>
            <button
              className="warning-btn btn">Warning</button>
            <button
              className="danger-btn btn">Danger</button>
          </div>

        </section>

        <section>
          <h4>Toast Notification</h4>
        <p>Small animation that appears in the top right corner of the screen.</p>

          <div className="btn-group">
            <button
              className="success-btn btn">Success</button>
            <button
              className="info-btn btn">Information</button>
            <button
              className="warning-btn btn">Warning</button>
            <button
              className="danger-btn btn"
              onClick={() => this.props.onButtonPress('this is a message', 'danger')}>Danger</button>
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
