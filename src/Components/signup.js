import React, { Component } from 'react'
import {signmeUp} from '../actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Input } from 'semantic-ui-react'

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
        this.setState({
            user: '',
            password: ''
        })
        this.props.signmeUp(this.state, this.props.history)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Input

                        name="username"
                        placeholder="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                            <Input
                                type='password'
                                name="password"
                                placeholder="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                                    <button className='ui blue button' id='signup'>SUBMIT </button>
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
