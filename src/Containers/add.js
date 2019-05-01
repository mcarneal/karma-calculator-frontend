import React from 'react';
import { connect } from 'react-redux'

class add extends React.Component{


  state = {
    location: '',
    description: ''
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
              user_id: this.props.user.id
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



  render(){
    return(
    <div>
      <h1>Add</h1>
      <form>
        <input type='text' placeholder='location' name='location' value={this.state.location} onChange={this.changeHandler} />
        <input type='text' placeholder='description' name='description' value={this.state.description} onChange={this.changeHandler} />
        <button onClick={this.addClickHandler}>add</button>
      </form>
    </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return state
}
export default connect(mapStateToProps)(add)
