import React from 'react';
import { withRouter} from 'react-router-dom'
import UserNav from '../Components/usernav'
import GlobalNav from '../Components/globalnav'

class Home extends React.Component{


  render(){
    return(
    <div>
      <UserNav />
      <GlobalNav />
      <h1>welcome home {this.props.user.username}</h1>
    </div>
    )
  }
}

export default withRouter(Home)
