/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createHistory from 'history/createMemoryHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './reducers/index.js';
import Routes from './routes/Routes.js';
type Props = {};
/* REDUX STARTS */
let history = createHistory();
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      routerMiddleware(history),
    ),
  );
  return createStore(reducer, initialState, enhancer);
}
const store = configureStore({});
/* REDUX  ENDS */
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Routes  {...store}  history={history}/>
      </Provider>
    );
  }
}
