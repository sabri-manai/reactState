import './App.css';
import React, { Component } from 'react'
import Person from './Components/Person';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  ustate = () => {
    this.setState({show: ! this.state.show  })
  }

  render() {
    return (
      <div style={{paddingLeft:"40vw"}}>
      <h1>State checkpoint</h1>
      <button onClick={this.ustate} > info </button>
      {this.state.show ? <Person /> : null }
    </div>
    )
  }
}
