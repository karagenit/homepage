import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Card extends Component {
  render() {
    var body = [];

    this.props.data.links.forEach(function(link) {
      body.push(
        <a class="btn btn-outline-secondary" href={ link.url }>
          { link.name }
        </a>
      );
    });

    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            { this.props.data.name }
          </h5>
          { body }
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    var body = [];

    this.props.data.forEach(function(e) {
      body.push( <Card data={ e } /> );
    });

    return (
      <div class="container">
        {body}
      </div>
    );
  }
}

export default App;
