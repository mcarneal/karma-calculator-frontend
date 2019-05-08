import React from 'react'
import { Button, Header, Image, Modal, Comment, Form } from 'semantic-ui-react'

class ModalModalExample extends React.Component{



  state = {
    comment : ''
  }


  commentOnChange = (e) => {
    this.setState({
      comment: e.target.value
      })
  }

  renderComments = () => {
    let myComments = this.props.user_comments.filter(comment => parseInt(comment.event_id) === this.props.id )
    return myComments.map(comment =>
      <Comment>
        <Comment.Content>
          <Comment.Author as='a'>{comment.username}</Comment.Author>
          <Comment.Text>{comment.description}</Comment.Text>
        </Comment.Content>
      </Comment>
      )
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
      this.setState({comment : ''})
  }



  render(){
    return(
      <Modal trigger={<Button>Comments</Button>}>
        <Modal.Header>{this.props.created_by}</Modal.Header>
        <Modal.Content image>
          <Modal.Description id='modal'>
                <Comment.Group>
                  <Header as='h3' dividing>
                    {this.props.description}
                  </Header>
                <Header as='h3' dividing>
                  Comments
                </Header>
                {this.renderComments()}

                <Form reply>
                <Form.TextArea
                value={this.state.comment}
                onChange={this.commentOnChange} />
                    <Button content='Add Reply'
                    onClick={this.commentSubmit} labelPosition='left' icon='edit' primary />
                    </Form>
                  </Comment.Group>
            </Modal.Description>
        </Modal.Content>
      </Modal>

    )
  }
}

export default ModalModalExample
