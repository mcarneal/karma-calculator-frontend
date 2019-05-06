import React from 'react';
import { connect } from 'react-redux'
import MyProfile from './myprofile'
import Add from './add'
import Feed from './feed'
import { Route, Switch, withRouter } from "react-router-dom"

class main extends React.Component{


  renderHandler = () => {
    switch(this.props.view.type){
      case "MY_PROFILE":
        return <MyProfile />
      case "HOME":
        return (
        <div>
          <Feed />
        </div>)
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
export default withRouter(connect(mapStateToProps)(main))
