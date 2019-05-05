import React from 'react';
import { Link, withRouter, Router } from 'react-router-dom';
import { connect } from 'react-redux'


class globalNav extends React.Component{


  render(){
    return(
      <div className='GlobalNavBar'>
        <button>
          feed
        </button>
        <Link to="/globalmap">
        <button>
          map
        </button>
      </Link>
        <button>
          sponsers
        </button>
      </div>

    )
  }
}

export default globalNav
