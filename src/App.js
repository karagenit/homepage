import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Link extends Component {
  render() {
    return(
      <div class="col">
        <a class="btn btn-outline-secondary btn-block" href={ this.props.data.url }>
          { this.props.data.name }
        </a>
      </div>
    );
  }
}

class Card extends Component {
  render() {
    var body = [];
    var newRow = true;

    for (var i = 0; i < this.props.data.links.length; i += 2) {
      body.push(
        <div class="row">
          <Link data={ this.props.data.links[i] } />
          <Link data={ this.props.data.links[i+1] } />
        </div>
      );
    }

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
