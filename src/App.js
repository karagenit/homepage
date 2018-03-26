import React, { Component } from 'react';
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

    for (var i = 0; i < this.props.card.links.length; i += colCount) {
      body.push(
        <LinkRow links={ this.props.card.links.slice(i, i+colCount) } />
      );
    }

    return (
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              { this.props.card.name }
            </h5>
            { body }
          </div>
        </div>
      </div>
    );
  }
}

class CardRow extends Component {
  render() {
    var cards = [];

    this.props.cards.forEach(function (card) {
      cards.push(
        <Card card={ card } />
      );
    });

    return(
      <div class="row">
        { cards }
      </div>
    );
  }
}

class App extends Component {
  render() {
    var rows = [];
    var colCount = 2;

    for (var i = 0; i < this.props.data.length; i += colCount) {
      rows.push(
        <CardRow cards={ this.props.data.slice(i, i+colCount) } />
      );
    }

    return (
      <div class="container">
        { rows }
      </div>
    );
  }
}

export default App;
