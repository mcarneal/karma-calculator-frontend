import { combineReducers } from 'redux';
import loginReducer from './login';
import viewReducer from './view'

const rootReducer  = combineReducers({
  user: loginReducer,
  view: viewReducer
})

export default rootReducer
