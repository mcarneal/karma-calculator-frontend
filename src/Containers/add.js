import React from 'react';
import { connect } from 'react-redux'

class add extends React.Component{


  render(){
    return(
    <div>
      <h1>Add</h1>
    </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return state
}
export default connect(mapStateToProps)(add)
