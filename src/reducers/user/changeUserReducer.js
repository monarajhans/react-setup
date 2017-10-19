import * as types from '../../actions/user/actionTypes'

export default function changeUserReducer(
  state='None', action) {
    switch(action.type) {
      case types.UPDATE_USER_STATE: {
        state = action.payload.newState;
        return state;
        break;
      }
    }
    return state;
}
