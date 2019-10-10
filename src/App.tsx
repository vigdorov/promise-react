import React, { Component } from 'react';
import { api } from "./service/api.service";
import { User } from "./service/users.model";
import './App.css';

interface IState {
  email: string;
  firstName: string;
  avatar: string;
}

class App extends Component<{}, IState> {
  constructor (props: {}) {
    super(props);

    this.state = {
      email: '',
      firstName: '',
      avatar: ''
    };
  }

  componentDidMount(): void {
    api.getUser(2).then( (user: User) => {
      this.setState({
        email: user.email,
        firstName: user.firstName,
        avatar: user.avatar
      })
    });
  }

  render () {
    const { email, firstName, avatar} = this.state;

    return (
      <div>
        <img src={avatar} alt={firstName}/>
        <h3>{firstName}</h3>
        <p>{email}</p>
      </div>
    );
  }
}

export default App;
