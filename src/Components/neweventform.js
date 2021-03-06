import React from 'react'
import { Form, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

class newEventForm extends React.Component{

  render(){
    return(
      <Card>
        <Card.Header>
          New Event
        </Card.Header>
        <Form add>
        <Form.TextArea
          value={this.props.new_event} />
        </Form>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(newEventForm)
