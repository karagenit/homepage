import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Card extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            { this.props.data.name }
          </h5>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    var body = [];

    this.props.data.forEach(function(e) {
      body.push( <Card data={e} /> );
    });

    return (
      <div class="container">
        {body}
      </div>
    );
  }
}

export default App;
