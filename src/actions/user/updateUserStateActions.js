import * as types from './actionTypes'

export default {
  updateUserState: (newState) => {
    return { type: types.UPDATE_USER_STATE, payload: {newState: newState} };
  }
}
