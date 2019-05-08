const addEvent = (state = false, action) => {

  switch(action.type){
    case 'ADDMAP':
      return state = !state
    default:
      return state
  }

}

export default addEvent
