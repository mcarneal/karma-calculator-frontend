import React from 'react';
import { connect } from 'react-redux'

class myProfile extends React.Component{


  render(){
    return(
    <div>
      <h1>My Profile</h1>
    </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return state
}
export default connect(mapStateToProps)(myProfile)
