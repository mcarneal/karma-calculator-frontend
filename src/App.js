import React from 'react';
import './App.css';
import Login from './Containers/login'
import Home from './Containers/home'
import UserShow from './Containers/user_show'
import { connect } from 'react-redux'
import { autoLogin } from './actions'
import { Route, Switch, withRouter } from "react-router-dom"
import Map from './Containers/map'
import MyProfile from './Containers/myprofile'
import Add from './Containers/add'
import DemoCarousel from './Containers/imageCarosel'
require('dotenv').config()


class App extends React.Component{

  //
    componentDidMount() {
         
    let token = localStorage.getItem("token")
    if (token) {
      this.props.autoLogin()
  } else {
      this.props.history.push('/')
  }
}

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path ="/home" render={()=> <Home user={this.props.user} / >}/>
          <Route exact path ="/" render={()=>
              <div>
              <Login />
            <DemoCarousel  />
            </div>
          }/>
          <Route exact path ="/user_show" render={()=> <UserShow />}/>
          <Route exact path ='/globalmap' render={()=> <Map />}/>
          <Route exact path="/myprofile" render={()=> <MyProfile />}/>
          <Route exact path="/add" render={()=> <Add />}/>
        </Switch>
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
