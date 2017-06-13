import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>gc-notification</h2>
        <hr/>

        <section>
          <h4>Notification Banner</h4>

          <p>Banner that appears at the top of the page</p>

          <div>
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

          <div>
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
      </div>
    );
  }
}

export default App;
