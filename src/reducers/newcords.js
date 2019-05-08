const newCords = (state = [], action) => {

  switch(action.type){
    case 'NEWCORDS' :
      return action.payload
    default:
      return state
  }
}
export default newCords
