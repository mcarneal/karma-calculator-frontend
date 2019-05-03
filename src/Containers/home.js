import React from 'react';
import { withRouter} from 'react-router-dom'
import UserNav from '../Components/usernav'
import GlobalNav from '../Components/globalnav'
import Main from './main'

class Home extends React.Component{


  render(){
    return(
    <div className="window">
      <div className="usernav">
        <UserNav />
      </div>
      <div className='maincontainer'>
        <div className='globalnav'>
          <GlobalNav />
        </div>
        <div className='maincontent'>
          <Main />
      </div>
    </div>
  </div>
    )
  }
}

export default withRouter(Home)
