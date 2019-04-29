import React from 'react';
import { withRouter} from 'react-router-dom'
import UserNav from '../Components/usernav'
import GlobalNav from '../Components/globalnav'
import Main from './main'

class Home extends React.Component{


  render(){
    return(
    <div>
      <UserNav />
      <GlobalNav />
      <h1>welcome home {this.props.user.username}</h1>
      <Main />
    </div>
    )
  }
}

export default withRouter(Home)
