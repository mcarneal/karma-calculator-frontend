import React from 'react';
import { connect } from 'react-redux'
import NewEventMap from '../Components/neweventmap'

class add extends React.Component{


  state = {
    location: '',
    description: '',
    marker : null
  }


  addClickHandler = () => {
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
              lat: this.state.marker[0],
              lng: this.state.marker[1]
            }
            })
        })
        .then(()=>{
          this.setState({
            location: '',
            description: ''
            })
          })
        this.props.history.push('/home')
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
      })
  }

  mapClickHandler = (e) => {
    this.setState({marker: [e.latlng.lat, e.latlng.lng]})
    console.log('inside the add insrtance', this.state.marker)
  }



  render(){
    return(
    <div>
      <h1>Add</h1>
      <form>
        <input type='text' placeholder='location' name='location' value={this.state.location} onChange={this.changeHandler} />
        <input type='text' placeholder='description' name='description' value={this.state.description} onChange={this.changeHandler} />
        <button onClick={this.addClickHandler}>add</button>
      </form>
      <NewEventMap mapClickHandler={this.mapClickHandler}
      marker={this.state.marker} />
    </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return state
}
export default connect(mapStateToProps)(add)
