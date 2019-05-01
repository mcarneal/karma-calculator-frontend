import { combineReducers } from 'redux';
import loginReducer from './login';
import viewReducer from './view'
import fetchReducer from './fetch'

const rootReducer  = combineReducers({
  user: loginReducer,
  view: viewReducer,
  fetch: fetchReducer
})

export default rootReducer
