import React from 'react';
import { Link, withRouter, Router } from 'react-router-dom';
import { connect } from 'react-redux'
import { myProfile } from '../actions'


class userNav extends React.Component{

  logOutHandler = (e) =>{

    localStorage.removeItem("token")
  }

  myProfileButtonHandler = (e) => {
    this.props.dispatch({
      type: "MY_PROFILE"
    })
  }

  homeButtonHandler = (e) => {
    console.log(this.props)
    this.props.dispatch({
      type: "HOME"
    })
  }

  addButtonHandler = (e) => {
    console.log(this.props)
    this.props.dispatch({
      type: "ADD"
    })
  }

    render(){
      return(
        <div className='usernavbar'>

              <button onClick={this.myProfileButtonHandler}>
                My Profile
              </button>

              <button onClick={this.homeButtonHandler}>
                Home
              </button>

                <button onClick={this.addButtonHandler}>
                  +
                </button>

          <Link to="/login">
            <button onClick={this.logOutHandler}>
              Logout
            </button>
          </Link>
        </div>
      )
    }
}

const mapStateToProps = (state) =>{
  return state
}

export default withRouter(connect(mapStateToProps)(userNav))
