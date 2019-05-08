import React from 'react';
import { connect } from 'react-redux'
import UserShow from '../Containers/user_show'
import { Route, Switch, Link  } from "react-router-dom"
import { selectedUser } from '../actions'
import { mapPosition } from '../actions'
import 'leaflet/dist/leaflet.css'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import EventMap from './eventmap'
import ModalModalExample from './modal'
import { Button, Card, Image } from 'semantic-ui-react'

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

   // commentSubmit = (e) => {
   //
   //   e.preventDefault()
   //   fetch("http://localhost:3000/api/v1/comments",{
   //     method: 'POST',
   //     headers: {
   //       "Content-Type": "application/json"
   //     },
   //     body: JSON.stringify({
   //       comment:{
   //         description: this.state.comment,
   //         user_id: this.props.user.id,
   //         event_id: this.props.id,
   //         username: this.props.user.username
   //       }
   //       })
   //     })
   // }

   // renderComments = () => {
   //   let myComments = this.props.user_comments.filter(comment => parseInt(comment.event_id) === this.props.id )
   //   return myComments.map(comment =>
   //     <p>{comment.username} wrote : {comment.description}</p>)
   // }

   userProfileHandler = () => {
     this.props.selectedUser(parseInt(this.props.user_id))
   }

   showMapHandler = (e) => {
     e.preventDefault()
     let cords = [this.props.lat, this.props.lng]
     this.props.mapPosition(cords)
   }

   // buttonRender = () => {
   //   if (this.props.view !== isNaN(this.props.view) || this.props.view.type === "MY_PROFILE"){
   //     <button className='ui blue button' onClick={this.showMapHandler}>Show map</button>} else {
   //       null
   //     }
   // }

   buttonRender = () => {
     if (this.props.view.type == "HOME"){
       return  <button className='ui blue button' onClick={this.showMapHandler}>Show map</button>
     }
   }

   componentDidMount(){
     console.log('inside event', this.props)
   }



    render(){

      return(
      <Card>
      <Card.Content>
        <Card.Header>
          <Link to='/user_show'     onClick={this.userProfileHandler}>
            {this.props.created_by}
          </Link>
        </Card.Header>
        <Card.Description>
          {this.props.description}
          <br></br>
          <br></br>
          Karma Points : {this.props.karma}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>

          {this.props.user.id !== parseInt(this.props.user_id) ?
            <div className='ui two buttons'>
            <Button
            onClick={this.upButtonHandler}
            basic color='green'>
            Good Karma
          </Button>
          <Button
            onClick={this.downButtonHandler}
            basic color='red'>
            Bad Karma
          </Button>
          </div> : null}

        <br></br>
        <br></br>
        <ModalModalExample {...this.props} />
        {this.buttonRender()}
      </Card.Content>
    </Card>
      )
    }

}


const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { selectedUser, mapPosition })(event)

//
// <Link to='/user_show' onClick={this.userProfileHandler}>
//   <p>{this.props.created_by}</p>
// </Link>
//   <p>{this.props.description}</p>
//   <p>{this.props.location}</p>
//   <p>{this.props.karma}</p>
//   <button onClick={this.upButtonHandler}>Up</button><button onClick={this.downButtonHandler}>Down</button>
//   <button onClick={this.showMapHandler}>Show map</button>
//   {this.state.showMap ? <EventMap lat={this.props.lat}
//   lng={this.props.lng} /> : null}
//   <ModalModalExample {...this.props} />
