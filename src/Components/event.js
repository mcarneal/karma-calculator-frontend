import React from 'react';
import { connect } from 'react-redux'

class event extends React.Component{

  state = {
    karma : this.props.karma,
    comment: ''
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
           karma: this.props.karma + 1
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
           event_id: this.props.id
         }
         })
       })
   }

    render(){
      return(
        <div>
            <p>{this.props.description}</p>
            <p>{this.props.location}</p>
            <p>{this.props.karma}</p>
            <button onClick={this.upButtonHandler}>Up</button><button>Down</button>
            <form>
              <input
              type='text'
               name="comment"
               placeholder='add comment?' value={this.state.comment}
               onChange={this.commentOnChange}
                />
              <button onClick={this.commentSubmit}>Submit</button>
            </form>
        </div>
      )
    }

}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(event)
