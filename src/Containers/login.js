import React from 'react';
import { connect } from 'react-redux'
import { login } from '../actions'
import { Route, Switch, withRouter } from "react-router-dom"


class Login extends React.Component{


  state = {
    username: '',
    password: ''
  }

  loginChangeHandler =(e)=> {
    this.setState({
      [e.target.name] : e.target.value
      })
  }

  loginSubmitHandler = (e) => {
    e.preventDefault()
    this.props.login(this.state)
    this.setState({
      username: '',
      password: ''
      })
      this.props.history.push('/home')
  }

  componentDidMount(){
    console.log('login mounted')
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <h1>Login</h1>
        <form>
          <input
             type='text'
             placeholder='username'
             name='username'
             onChange={this.loginChangeHandler}
             value={this.state.username}/>
          <br></br>
          <input
            type='password'
            placeholder='password'
            name='password'
            onChange={this.loginChangeHandler}
            value={this.state.password}/>
            <br></br>
          <button onClick={this.loginSubmitHandler}> Log in </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps, {login})(Login))
