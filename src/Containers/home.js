import React from 'react';
import UserNav from '../Components/usernav'
import Add from './add'
import Feed from './feed'
import { withRouter } from "react-router-dom"
import Map from './map'
import { connect } from 'react-redux'

class Home extends React.Component{


  state = {
    cords: []
  }

  addClickHandler = (props) => {
    this.setState({cords: props})
  }

  componentDidMount(){
    this.props.dispatch({
      type: "HOME"
    })
  }


  render(){
    return(
    <div className="window">
      <div className="usernav">
        <UserNav />
      </div>
      <div className='maincontainer'>
        <div className='maincontent'>

          <Add cords={this.state.cords} />
           <Feed />
        </div>
        <div className='globalmap'>
          {this.props.fetch.length > 0 ? <Map addHandler={this.addClickHandler}/> : null}
        </div>
      </div>
    </div>
    )
  }
}



const mapStateToProps = (state) =>{
  return state
}
export default withRouter(connect(mapStateToProps)(Home))
