import React from 'react';
import { connect } from 'react-redux'
import Event from '../Components/event'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { events } from '../actions'
import { comments } from '../actions'
import UserNav from '../Components/usernav'
import Gauge from 'react-radial-gauge';
import { Route, withRouter } from "react-router-dom"

class myProfile extends React.Component{

  state = {
    myEvents : []
  }

  handleReceived = (data) => {
    this.props.events(data.events)
    this.props.comments(data.comments)
    let myEvents = this.props.fetch.filter(event => parseInt(event.user_id) === this.props.user.id )
    this.setState({myEvents})
  }

  componentDidMount(){
    if(this.props.view.type === 'MY_PROFILE'){
      let myEvents = this.props.fetch.filter(event => parseInt(event.user_id) === this.props.user.id )
      myEvents.map(event => this.setState({username : event.username}))
      this.setState({myEvents})
    } else {
      this.props.history.push('/home')
    }
  }

  renderMyEvents = () =>{
    console.log(this.state.myEvents)
    return this.state.myEvents.map(event =>
     <Event {...event} />
    )
  }

  goodKarma = () => {
    let points = 0
    let good = this.state.myEvents.filter(event => event.karma > 0 )
    good.map(event => points += event.karma)
    return points
  }
  badKarma = () => {
    let points = 0
    let good = this.state.myEvents.filter(event => event.karma <= 0 )
    good.map(event => points += event.karma)
    return points
  }

  totalKarma = () => {
    let good = this.goodKarma()
    let bad = this.badKarma()
    let num = this.state.myEvents.length
    return (good + bad) / num
  }



  render(){

    debugger
    let good = this.goodKarma()
    let bad = this.badKarma()
    let total = this.totalKarma()

    const goodOptions = {
      needleBaseSize: 0,
      currentValue : good,
      progressWidth : 15,
      progressColor : '#228B22',
      needleColor: '#fffff',
      tickColor: '#fffff'
    }

    const badOptions = {
      needleBaseSize: 0,
      currentValue : bad,
      progressWidth : 15,
      progressColor : '#DC143C',
      needleColor: '#fffff',
      tickColor: '#fffff'
    }

    return(
    <div>
      <UserNav />
      <div className='user-container'>
    <ActionCableConsumer channel={{channel: 'FeedChannel'}} onReceived={(data) => {this.handleReceived(data)}} />
      <div className='card-container'>
        {this.renderMyEvents()}
      </div>
      <div className='karma-container'>
          <h1>My Profile</h1>
        <div className='good'>
        <Gauge {...goodOptions} />
        <h2>Good Karma Points: {good}</h2>
        </div>
        <div className='bad'>
        <Gauge {...badOptions} />
        <h2>Bad Karma Points: {bad}</h2>
        </div>
      </div>
    </div>
  </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return state
}
export default withRouter(connect(mapStateToProps, { events, comments })(myProfile))
