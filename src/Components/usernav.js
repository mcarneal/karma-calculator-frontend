import React from 'react';
import { Link, withRouter, Router } from 'react-router-dom';
import { connect } from 'react-redux'


class userNav extends React.Component{

  logOutHandler = (e) =>{

    localStorage.removeItem("token")
  }

    render(){
      return(
        <div className='usernavbar'>
            <Link to="/home">
              <button>
                My Profile
              </button>
            </Link>
            <Link >
              <button>
                Home
              </button>
            </Link>
              <Link>
                <button>
                  +
                </button>
              </Link>
          <Link to="/login">
            <button onClick={this.logOutHandler}>
              Logout
            </button>
          </Link>
        </div>
      )
    }
}

export default withRouter(userNav)
