import React from 'react';
import { connect } from 'react-redux'
import { events } from '../actions'
import { comments } from '../actions'
import { myEvents } from '../actions'
import Event from '../Components/event'
import { Route, Switch, withRouter } from "react-router-dom"
import { ActionCableConsumer } from 'react-actioncable-provider'
import UserNav from '../Components/usernav'
import Gauge from 'react-radial-gauge';


class UserShow extends React.Component{

  state = {
    myEvents : [],
    username: ''
  }

  handleReceived = (data) => {
    this.props.events(data.events)
    this.props.comments(data.comments)
    let myEvents = this.props.fetch.filter(event => parseInt(event.user_id) === this.props.view )
    let sortedArray = myEvents.sort(function(a, b){return b.id - a.id})
    this.setState({myEvents : sortedArray})
    this.props.myEvents(sortedArray)
  }


  componentDidMount(){
    console.log('inside user show',this.props.fetch)
    if(isNaN(this.props.view)){
         this.props.history.push('/home')
       } else {
    let myEvents = this.props.fetch.filter(event => parseInt(event.user_id) === this.props.view )
    myEvents.map(event => this.setState({username : event.created_by}))
    let sortedArray = myEvents.sort(function(a, b){return b.id - a.id})
    this.setState({myEvents : sortedArray})
    this.props.myEvents(sortedArray)

    }
  }

  renderMyEvents = () =>{
    let myEvents = this.props.fetch.filter(event => parseInt(event.user_id) === this.props.view)
    let sortedArray = myEvents.sort(function(a, b){return b.id - a.id})
    return sortedArray.map(event => <Event {...event} />)
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

    let good = this.goodKarma()
    let bad = this.badKarma()
    let total = this.totalKarma()

    const style = {
    width: "100%",
    height: "500px"
    };

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
        <h1>{this.state.username} s profile</h1>
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
export default withRouter(connect(mapStateToProps, { events, comments, myEvents })(UserShow))
