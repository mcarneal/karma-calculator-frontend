import React from 'react';
import { connect } from 'react-redux'
import { login } from '../actions'
import { withRouter } from "react-router-dom"
import Signup from '../Components/signup'
import API_URL from '../config.js'


import { Button, Menu, Modal, Header, Input } from 'semantic-ui-react'


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
    fetch(`${API_URL}/api/v1/login`,{
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
        <Menu>
          <Menu.Item>
              <Modal trigger={<Button primary>Sign up</Button>}>

                  <Modal.Header>
                    Welcome to Karma Calculator. Please register and account with us by providing the folowing information.
                  </Modal.Header>
                <Modal.Description>
                  <Header>
                    Please Create a Unique username and password
                  </Header>
                  <Signup />
                    <br></br>
                      <br></br>
                        <br></br>
                          <br></br>
                            <br></br>
                </Modal.Description>
              </Modal>
      </Menu.Item>

      <Menu.Item>
        <Modal trigger={<Button primary>Log-in</Button>}>
          <Modal.Header className='loginheader'>
            <h1>Please enter a valid Username and Password</h1>
          </Modal.Header>
          <br></br>
          <Input
            placeholder='username'
            name='username'
            onChange={this.loginChangeHandler}
            value={this.state.username}
            />
          <Input
              type='password'
              placeholder='password'
              name='password'
              onChange={this.loginChangeHandler}
              value={this.state.password}/>
            <button className='ui blue button' id='login' onClick={this.loginSubmitHandler}> Log in </button>
            <br></br>
              <br></br>
                <br></br>
                  <br></br>
                    <br></br>
        </Modal>
      </Menu.Item>
    </Menu>

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


// <h1>Login</h1>
// <form>
//   <Input
//      type='text'
//      placeholder='username'
//      name='username'
//      onChange={this.loginChangeHandler}
//      value={this.state.username}/>
//   <br></br>
//   <input
//     type='password'
//     placeholder='password'
//     name='password'
//     onChange={this.loginChangeHandler}
//     value={this.state.password}/>
//     <br></br>
//   <button onClick={this.loginSubmitHandler}> Log in </button>
// </form>
// <Signup />
