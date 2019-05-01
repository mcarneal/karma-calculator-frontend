const fetchReducer = (state = [], action) => {

  switch(action.type){
    case 'FETCH_ALL':
      return action
    case "EVENTS":
      return state = action.payload
    default:
      return state
  }

}

export default fetchReducer
