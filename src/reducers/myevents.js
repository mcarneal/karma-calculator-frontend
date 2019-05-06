const myEvents = (state = [], action) => {

  switch(action.type){
    case 'MYEVENTS':
    return action.payload
    default:
      return state
  }
}
export default myEvents
