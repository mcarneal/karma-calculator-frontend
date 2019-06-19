import React from 'react';
import { Link } from 'react-router-dom';


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
