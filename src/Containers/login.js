import React from 'react';
import { connect } from 'react-redux'
import { login } from '../actions'
import { Route, Switch, withRouter } from "react-router-dom"
import Signup from '../Components/signup'


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
    fetch('http://localhost:3000/api/v1/login',{
       method: 'POST',
       headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({
          user:{
            username: this.state.username,
            password: this.state.password
          }
          })
      })
      .then(res => res.json())
      .then(data => {
       if (data.error) {
          alert("Incorrect Username or Password")
        } else {
          localStorage.setItem('token', data.token)
          this.props.login(data)
          this.props.history.push('/home')
        }
      })
  }
  render(){
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
        <Signup />
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
