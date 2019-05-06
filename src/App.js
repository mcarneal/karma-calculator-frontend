import React from 'react';
import './App.css';
import Login from './Containers/login'
import Home from './Containers/home'
import UserShow from './Containers/user_show'
import { connect } from 'react-redux'
import { autoLogin } from './actions'
import { Route, Switch, withRouter } from "react-router-dom"
import Map from './Containers/map'


class App extends React.Component{

  //
  componentDidMount() {
    let token = localStorage.getItem("token")
    if (token) {
      this.props.autoLogin()
  } else {
      this.props.history.push('/login')
  }
}

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path ="/home" render={()=> <Home user={this.props.user} / >}/>
          <Route exact path ="/login" render={()=> <Login / >}/>
          <Route exact path ="/user_show" render={()=> <UserShow />}/>
          <Route exact path ='/globalmap' render={()=> <Map />}/>
        </Switch>
        <Map />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return (
    state, {
    user: state.user
  })
}


export default withRouter(connect(mapStateToProps,  {autoLogin})(App))
