import React, { Component } from 'react';
import { withRouter } from "react-router";
import { UserService } from '../../services/UserService';
import NavBar from '../../components/NavBar'
import UserCard from '../../components/UserCard'
import Tweet from '../../components/Tweet';
import {post, allpost} from '../../mocked_data';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {
      id: 0,
      name: "",
      email: "",
      description: "",
      location: "",
      webpage: "",
      picture: "",
    }
  }



  componentDidMount(){
    const { id } = this.props.match.params;
    const user = this.userService.getOne(id);
    this.setState({
      id: user.id,
      name: user.name,
      description: user.description,
      location: user.location,
      webpage: user.webpage,
      picture: user.picture,
    })
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container">
          <div className="columns">
            <div className= "column is-one-third">
              <UserCard></UserCard>
            </div>
            <div>
              <Tweet/> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Profile);
