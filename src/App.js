import React, { Component } from 'react';
import { connect } from 'react-redux';

import GCNotificationSystem from './components/GCNotificationSystem';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GCNotificationSystem notifications={this.props.notifications}/>

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

export default App;
