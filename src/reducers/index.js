import { combineReducers } from 'redux';
import loginReducer from './login';
import viewReducer from './view'
import fetchReducer from './fetch'
import commentsReducer from './comments'
import myEventsReducer from './myevents'

const rootReducer  = combineReducers({
  user: loginReducer,
  view: viewReducer,
  fetch: fetchReducer,
  user_comments: commentsReducer,
  my_events: myEventsReducer
})

export default rootReducer
