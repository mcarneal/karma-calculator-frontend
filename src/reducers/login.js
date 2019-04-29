const loginReducer = (state = {}, action) => {
  // console.log('what is state', state);x
  switch(action.type) {
    case 'LOGIN':
      return Object.assign({}, state ,action.payload)

    case 'SIGNME_UP':
      return Object.assign({}, state ,action.payload)

    default:
      return state
  }
}

export default loginReducer
