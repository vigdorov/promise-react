import React, { Component } from 'react';
import { api } from "./service/api.service";
import { User } from "./service/users.model";
import './App.css';
import {jsonBinApi} from "./service/json-bin-api.service";


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
    jsonBinApi.getJsonBinObject().then(user => {
      console.log(user);
    });
  }

  handleClick () {
    jsonBinApi.setJsonBinObject({
      pisun: '5 sm'
    });
  }

  render () {
    const { email, firstName, avatar} = this.state;

    return (
      <div className="App">
        <button onClick={this.handleClick}>Send kall</button>
        <input type="datetime-local"/>
      </div>
    );
  }
}

export default App;
