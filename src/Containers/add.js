import React from 'react';
import { connect } from 'react-redux'
import NewEventMap from '../Components/neweventmap'
import UserNav from '../Components/usernav'
import { withRouter} from 'react-router-dom'
import { Input, Card, Form, Button } from 'semantic-ui-react'
import { addMap } from '../actions'

class add extends React.Component{


  state = {
    location: '',
    description: '',
    marker : null
  }


  addClickHandler = (e) => {
    e.preventDefault()
      fetch('http://localhost:3000/api/v1/events',{
         method: 'POST',
         headers: {
              "Content-Type": "application/json"
            },
          body: JSON.stringify({
            event:{
              location: this.state.location,
              description: this.state.description,
              user_id: this.props.user.id,
              created_by: this.props.user.username,
              lat: this.props.cords[0],
              lng: this.props.cords[1]
            }
            })
        })
        .then(()=>{
          this.setState({
            location: '',
            description: ''
            })
          }, this.props.addMap())
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
      })
  }

  mapClickHandler = (e) => {
    this.setState({marker: [e.latlng.lat, e.latlng.lng]})
  }


  addToMapHandler = () => {
    this.props.addMap()
  }





  render(){
    return(
    <div className='add-container'>
      <Card>
        <Card.Header>
          {this.props.user.username}
          <br></br>
          Add a new event ?
            <br></br>
        </Card.Header>
          <Card.Description>
            Add a Description of either a good or bad deed you have recently done.
          </Card.Description>
        <Form add>
        <Form.TextArea
        value={this.state.description}
        onChange={this.changeHandler}
        name='description' />


    </Form>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button content='Add New'
              onClick={this.addClickHandler} labelPosition='left' icon='edit' primary />
            {this.props.new_event ? <Button
              onClick={this.addToMapHandler}
              className='ui red button'>
              Place marker on map
            </Button> : <Button
              onClick={this.addToMapHandler}
              className='ui green button'>
              Add to map?
            </Button>}
          </div>
        </Card.Content>
      </Card>

    </div>

    )
  }
}

const mapStateToProps = (state) =>{
  return state
}
export default withRouter(connect(mapStateToProps, { addMap })(add))
//
// <input
//
//    type='text' placeholder='description' name='description' value={this.state.description} onChange={this.changeHandler} />

// <br></br>


// <NewEventMap mapClickHandler={this.mapClickHandler}
// marker={this.state.marker} />
