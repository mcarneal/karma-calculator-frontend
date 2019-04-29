import React from 'react';
import './App.css';
import Login from './Containers/login'
import Home from './Containers/home'
import { connect } from 'react-redux'
import { login } from './actions'
import { Route, Switch, withRouter } from "react-router-dom"


class App extends React.Component{


  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path ="/home" render={()=> <Home user={this.props.user} / >}/>
          <Route exact path ="/" render={()=> <Login / >}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default withRouter(connect(mapStateToProps)(App))
