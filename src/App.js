import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Link extends Component {
  render() {
    return(
      <div class="col">
        <a class="btn btn-outline-secondary btn-block" href={ this.props.link.url }>
          { this.props.link.name }
        </a>
      </div>
    );
  }
}

class LinkRow extends Component {
  render() {
    var cols = [];

    this.props.links.forEach(function (link) {
      cols.push(
        <Link link={ link } />
      );
    });

    return(
      <div class="row">
        { cols }
      </div>
    );
  }
}


class Card extends Component {
  render() {
    var body = [];
    var colCount = 2;

    for (var i = 0; i < this.props.data.links.length; i += colCount) {
      body.push(
        <LinkRow links={ this.props.data.links.slice(i, i+colCount) } />
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
