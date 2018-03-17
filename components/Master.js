import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Login from './Login';
import Home from './Home';

const Master = props => (
  props.loginReducer.login ? 
    <Home />
    :
    <Login />
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
export default connect(({ loginReducer }) => ({
  loginReducer,
}), mapDispatchToProps)(Master);
