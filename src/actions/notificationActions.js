import { ADD_NOTIFICATION } from '../constants/ActionTypes';

export function addNotification(message, level) {
  console.log('Notification added');
  return {
    type: ADD_NOTIFICATION,
    message,
    level
  };
}
