import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as recipesReducer from './reducers';

export default combineReducers(Object.assign(recipesReducer, routerReducer));
