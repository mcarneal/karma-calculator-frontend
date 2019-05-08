
const mapPosition = (state = [], action) => {

  switch(action.type){
    case 'MAPPOSITION':
    return action.payload
    default:
      return state
  }
}
export default mapPosition
