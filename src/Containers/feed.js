import React from 'react';
import { connect } from 'react-redux'

class feed extends React.Component{


  render(){
    return(
    <div>
      <h1>Home</h1>
    </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return state
}
export default connect(mapStateToProps)(feed)
