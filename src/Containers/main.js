import React from 'react';
import { connect } from 'react-redux'
import MyProfile from './myprofile'
import Add from './add'
import Feed from './feed'

class main extends React.Component{


  renderHandler = () => {
    console.log('render handler', this.props.view)

    switch(this.props.view.type){
      case "MY_PROFILE":
        return <MyProfile />
      case "HOME":
        return <Feed />
      case "ADD":
        return <Add />
      default:
        return <Feed />
    }
  }

  render(){
    return(
    <div>
      {this.renderHandler()}
    </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return state
}
export default connect(mapStateToProps)(main)
