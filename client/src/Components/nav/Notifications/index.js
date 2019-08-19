import React, { Component } from 'react';
import Notification from './Notification/Notification';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons'


class Notifications extends Component {
  state = {
    show: false,
    response: []
  }

  componentWillReceiveProps() {
    
    this.setState({ response: Object.assign([], this.props.response) }, () => this.setState({ response: Object.assign([], this.props.response) })
    )
  }

  handleFriendRequestStatus = (id, url) => {

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ connectionsId: id }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((res) => {
        console.log("res return from aqccept",res);
        

        this.setState({
        response: Object.assign([], this.state.response.filter((noti) => (noti.id !== id)
        ))
      }, () => this.props.handleNotificationResponse(id))
      })
      .catch(error => console.log("error fetch", error))
  }

  toggleNotification = (e) => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render () {
   
    
    const { show, response } = this.state;
    const notifications = response.length? response.map(element => {
      return <Notification handleFriendRequestStatus={this.handleFriendRequestStatus} id={element.id} name={element.first_name} key={element.id} />
    }):<p>You have no notifications</p>;
    return(
      <React.Fragment>
        <a   onClick={this.toggleNotification} className="notification">
          <div>
            {(response.length && !show)?<span className="num">{response.length}</span>:''}
            <FontAwesomeIcon icon={faBell} />
          </div>
        </a>
        <div className={`notifications ${show?'': "hidden"}`}>
          {notifications}
        </div>
      </React.Fragment>
    );
  }
}

export default Notifications;




