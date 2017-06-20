import { connect } from 'react-redux';

import App from './App';
import { addNotification } from './actions/notificationActions';

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
