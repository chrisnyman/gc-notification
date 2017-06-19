import React, { Component } from 'react';
import GCNotification from '../components/GCNotification';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNotification } from '../actions/notificationActions';

const list = [
  {
    message: 'This is an info message',
    level: 'info'
  }, {
    message: 'This is dangerous',
    level: 'danger'
  }
];

class GCNotificationContainer extends Component {
  constructor(props) {
   super(props);
  }

  componentWillReceiveProps(newProps) {
    const { message, level } = newProps.notification;
  }

  createNotificationList() {
    return list.map( i => {
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
      <div className="GCNotificationContainer">
        {this.createNotificationList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notification: state.notification
  };
}

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators({
      addNotification
    }, dispatch)
  );
}

// export default GCNotificationContainer;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GCNotificationContainer);
