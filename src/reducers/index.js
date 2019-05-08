import { combineReducers } from 'redux';
import loginReducer from './login';
import viewReducer from './view'
import fetchReducer from './fetch'
import commentsReducer from './comments'
import myEventsReducer from './myevents'
import mapPositionReducer from './map'
import addEventReducer from "./addevent"
import newCordReducer from "./newcords"

const rootReducer  = combineReducers({
  user: loginReducer,
  view: viewReducer,
  fetch: fetchReducer,
  user_comments: commentsReducer,
  my_events: myEventsReducer,
  map_position: mapPositionReducer,
  new_event: addEventReducer,
  new_cords: newCordReducer
})

export default rootReducer
