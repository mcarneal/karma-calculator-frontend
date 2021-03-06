import React from 'react';
import { connect } from 'react-redux'
import { events } from '../actions'
import { comments } from '../actions'
import { ActionCableConsumer } from 'react-actioncable-provider'
import Event from '../Components/event'
import API_URL from '../config.js'

class feed extends React.Component{

  handleReceived = (data) => {
    let sortedArray = data.events.sort(function(a, b){return b.id - a.id})
    this.props.events(sortedArray)
    this.props.comments(data.comments)
  }

  componentDidMount(){
    fetch(`${API_URL}/api/v1/events`)
    .then(res => res.json())
    .then(data => {
      this.props.events(data)
    })
    fetch(`${API_URL}/api/v1/comments`)
    .then(res => res.json())
    .then(data => {
      this.props.comments(data)
    })
  }

  renderEvents = () => {

    let sortedArray = this.props.fetch.sort(function(a, b){return b.id - a.id})
    return sortedArray.map(event =>
      <Event key={event.id} {...event} />
    )
  }

  render(){
    let events = this.renderEvents()
    return(
    <div>
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
