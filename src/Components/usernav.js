import React from 'react';
import { Link, withRouter, Router } from 'react-router-dom';
import { connect } from 'react-redux'
import { myProfile } from '../actions'
import { Menu, Segment } from 'semantic-ui-react'


class userNav extends React.Component{

  state = {
    activeItem : 'home'
  }


   handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  logOutHandler = (e, { name }) =>{
    this.setState({ activeItem: name })
    localStorage.removeItem("token")
    this.props.history.push('/')
  }

  myProfileButtonHandler = (e, { name }) => {
    this.props.dispatch({
      type: "MY_PROFILE"
    })
    this.setState({ activeItem: name })
    this.props.history.push('/myprofile')
  }

  homeButtonHandler = (e, { name }) => {
    console.log(this.props)
    this.props.dispatch({
      type: "HOME"
    })
    this.setState({ activeItem: name })
    this.props.history.push('/home')
  }

  addButtonHandler = (e) => {
    console.log(this.props)
    this.props.dispatch({
      type: "ADD"
    })
    this.props.history.push('/add')
  }

    render(){
      const { activeItem } = this.state

      return(
        <Segment inverted>
          <Menu inverted secondary>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.homeButtonHandler} />
            <Menu.Item
              name={this.props.user.username}
              active={activeItem === this.props.user.username}
              onClick={this.myProfileButtonHandler}
              />
            <Menu.Item
              name='LogOut'
              active={activeItem === 'LogOut'}
              onClick={this.logOutHandler}
              />
          </Menu>
        </Segment>

      )
    }
}

const mapStateToProps = (state) =>{
  return state
}

export default withRouter(connect(mapStateToProps)(userNav))
