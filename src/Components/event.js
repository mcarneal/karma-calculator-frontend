import React from 'react';
import { connect } from 'react-redux'
import { Link  } from "react-router-dom"
import { selectedUser } from '../actions'
import { mapPosition } from '../actions'
import 'leaflet/dist/leaflet.css'
import ModalModalExample from './modal'
import { Button, Card } from 'semantic-ui-react'
import API_URL from '../config.js'


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
        fetch(`${API_URL}/api/v1/events/${this.props.id}`,{
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
        fetch(`${API_URL}/api/v1/events/${this.props.id}`,{
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


    userProfileHandler = () => {
        this.props.selectedUser(parseInt(this.props.user_id))
    }

    showMapHandler = (e) => {
        e.preventDefault()
        let cords = [this.props.lat, this.props.lng]
        this.props.mapPosition(cords)
    }


    buttonRender = () => {
        if (this.props.view.type === "HOME"){
            return  <button className='ui blue button' onClick={this.showMapHandler}>Show map</button>
        }
    }


    render(){

        return(
            <Card>
                <Card.Content>
                    <Card.Header>
                        <Link to='/user_show' onClick={this.userProfileHandler}>
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

