import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Card extends Component {
  render() {
    return (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              { this.props.title }
            </h5>
          </div>
        </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div class="container">
        <Card title={this.props.data[0].name} />
      </div>
    );
  }
}

export default App;
