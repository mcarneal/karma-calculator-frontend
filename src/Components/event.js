import React from 'react';
import { connect } from 'react-redux'
import UserShow from '../Containers/user_show'
import { Route, Switch, Link  } from "react-router-dom"
import { selectedUser } from '../actions'
import 'leaflet/dist/leaflet.css'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import EventMap from './eventmap'

class event extends React.Component{

  state = {
    karma : this.props.karma,
    comment: '',
    showMap: false
  }

  commentOnChange = (e) => {
    this.setState({
      comment: e.target.value
      })
  }

  upButtonHandler = (e) => {
    e.preventDefault()
    this.setState({karma: this.state.karma + 1})
    fetch(`http://localhost:3000/api/v1/events/${this.props.id}`,{
      method: 'PATCH',
      headers: {
           "Content-Type": "application/json"
         },
       body: JSON.stringify({
         event:{
           karma: this.props.karma + 1,
           user_id: this.props.userid
         }
        })
     })
   }

   downButtonHandler = (e) => {
     e.preventDefault()
     this.setState({karma: this.state.karma - 1})
     fetch(`http://localhost:3000/api/v1/events/${this.props.id}`,{
       method: 'PATCH',
       headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({
          event:{
            karma: this.props.karma -1
          }
         })
      })
    }

   commentSubmit = (e) => {

     e.preventDefault()
     fetch("http://localhost:3000/api/v1/comments",{
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({
         comment:{
           description: this.state.comment,
           user_id: this.props.user.id,
           event_id: this.props.id,
           username: this.props.user.username
         }
         })
       })
   }

   renderComments = () => {
     let myComments = this.props.user_comments.filter(comment => parseInt(comment.event_id) === this.props.id )
     return myComments.map(comment =>
       <p>{comment.username} wrote : {comment.description}</p>)
   }

   userProfileHandler = () => {
     this.props.selectedUser(parseInt(this.props.user_id))
   }

   showMapHandler = (e) => {
     e.preventDefault()
     this.setState({showMap : !this.state.showMap})
   }



    render(){
      return(
        <div className="usercard">
          <Link to='/user_show' onClick={this.userProfileHandler}>
            <p>{this.props.created_by}</p>
          </Link>
            <p>{this.props.description}</p>
            <p>{this.props.location}</p>
            <p>{this.props.karma}</p>
            <button onClick={this.upButtonHandler}>Up</button><button onClick={this.downButtonHandler}>Down</button>
            <form>
              <input
              type='text'
               name="comment"
               placeholder='add comment?' value={this.state.comment}
               onChange={this.commentOnChange}
                />
              <button onClick={this.commentSubmit}>Submit</button>
            </form>
            {this.renderComments()}
            <button onClick={this.showMapHandler}>Show map</button>
            {this.state.showMap ? <EventMap lat={this.props.lat}
            lng={this.props.lng} /> : null}
        </div>
      )
    }

}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { selectedUser })(event)
