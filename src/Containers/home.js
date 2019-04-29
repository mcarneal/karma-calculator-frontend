import React from 'react';
import { withRouter} from 'react-router-dom'

class Home extends React.Component{


  render(){
    return(
    <div>
      <h1>welcome home {this.props.user.username}</h1>
    </div>
    )
  }
}

export default withRouter(Home)
