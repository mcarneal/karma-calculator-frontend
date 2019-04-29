import React, { Component } from 'react'
import {signmeUp} from '../actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class SignmeUp extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signmeUp(this.state, this.props.history)
    this.setState({
      user: '',
      password: ''
    })

  }

  render() {
    console.log("SIGN UP props", this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            label="username"
            name="username"
            placeholder="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            label="password"
            name="password"
            placeholder="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit">SUBMIT </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signmeUp: (user, history) => dispatch(signmeUp(user, history))
  }
}


export default withRouter(connect(null, mapDispatchToProps)(SignmeUp))
