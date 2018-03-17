import createReducer from '../lib/createReducer';
import * as types from '../actions/strings';

export const loginReducer = createReducer({ userInfo: {}, login: false }, {
  [types.LOGIN](state, action) {
    return {
      userInfo: { ...action.userInfo },
      login: action.login,
    };
  },
  [types.LOGOUT](state, action) {
    return {
      login: action.login,
    };
  },
});

export const localStorage = createReducer({ saved: false }, {
  [types.SAVED](state, action) {
    return {
      saved: action.saved,
    };
  },
});

export default { loginReducer, localStorage };
