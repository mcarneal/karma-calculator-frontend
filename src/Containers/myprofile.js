import React from 'react';
import { connect } from 'react-redux'
import Event from '../Components/event'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { events } from '../actions'
import { comments } from '../actions'
import UserNav from '../Components/usernav'
import Gauge from 'react-radial-gauge';
import { withRouter } from "react-router-dom"

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
    return points - (points + points)
  }

  totalKarma = () => {
    let good = this.goodKarma()
    let bad = this.badKarma()
    let num = this.state.myEvents.length
    return (good + bad) / num
  }



  render(){

   
      let good = (this.goodKarma() * 10) / this.state.myEvents.length
      let bad = (this.badKarma() * 10) / this.state.myEvents.length

    const goodOptions = {
      needleBaseSize: 0,
        currentValue : good.toFixed(),
      progressWidth : 15,
      progressColor : '#228B22',
      needleColor: '#fffff',
      tickColor: '#fffff'
    }

    const badOptions = {
      needleBaseSize: 0,
      currentValue : bad.toFixed(),
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
              <h3>Percent of Good Karma Points</h3>
        <Gauge {...goodOptions} />
        </div>
        <div className='bad'>
        <h2>Bad Karma Points: {bad.toFixed()}</h2>
        <Gauge {...badOptions} />
    </div>
    <div className="stats">
        <h2>Total posts: {this.state.myEvents.length}</h2>
        <h2>Good Karma Points: {good.toFixed()} </h2>
        <h2>Bad Karma Points: {bad.toFixed()}</h2>

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
