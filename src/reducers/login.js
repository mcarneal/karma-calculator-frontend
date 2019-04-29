const loginReducer = (state = {}, action) => {

  switch(action.type) {
    case 'LOGIN':
      return state = Object.assign({}, state ,action.payload)
    default:
      return state
  }
}

export default loginReducer
