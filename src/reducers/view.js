const viewReducer = (state = {}, action) => {

  switch(action.type){
    case 'MY_PROFILE':
      return action
    case "HOME":
      return action
    case "ADD":
      return action
    case "SELECTEDUSER":
      return action.payload
    default:
      return state
  }
}

export default viewReducer
