import {
  ADD_NOTIFICATION
} from '../constants/ActionTypes';

export default function notifications(state = [], action) {
  console.log(action);
  switch (action.type) {
    case ADD_NOTIFICATION:
      return state.concat({
        message: action.message,
        level: action.level
      });

    default:
      console.debug('notification reducer :: hit default', action.type);
      return state;
  }
}
