import React from 'react';
import { connect } from 'react-redux'
import { events } from '../actions'
import { comments } from '../actions'
import { ActionCableConsumer } from 'react-actioncable-provider'
import Event from '../Components/event'

class feed extends React.Component{



  handleReceived = (data) => {
    this.props.events(data.events)
    this.props.comments(data.comments)
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/events")
    .then(res => res.json())
    .then(data => {
      this.props.events(data)
    })
    fetch("http://localhost:3000/api/v1/comments")
    .then(res => res.json())
    .then(data => {
      this.props.comments(data)
    })
  }

  renderEvents = () => {
    return this.props.fetch.map(event =>
      <Event key={event.id} {...event} />
    )
  }

  render(){
    let events = this.renderEvents()
    return(
    <div>
      <h1>welcome back {this.props.user.username}</h1>
      <ActionCableConsumer channel={{channel: 'FeedChannel'}} onReceived={(data) => {this.handleReceived(data)}} />
      {events}
    </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return state
}
export default connect(mapStateToProps, { events, comments })(feed)
