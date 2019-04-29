const viewReducer = (state = {}, action) => {

  switch(action.type){
    case 'MY_PROFILE':
      return action
    case "HOME":
      return action
    case "ADD":
      return action
    default:
      return state
  }
}

export default viewReducer
