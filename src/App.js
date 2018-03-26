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

class Input extends Component {

  getInitialState = () => {
    return { input: '' };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleClick = () => {
    alert(this.state.input);
  }

  render() {
    return(
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">{ this.props.input.prefix }</span>
        </div>
        <input type="text" class="form-control"
          placeholder={ this.props.input.placeholder }
          onChange={ this.handleChange } />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            onClick={ this.handleClick }>Go!</button>
        </div>
      </div>
    );
  }
}

class Card extends Component {
  render() {
    var body = [];
    var colCount = 2;

    if (!this.props.card.inputs) { // TODO: do this in the constructor? and for links?
      this.props.card.inputs = [];
    }

    for (var i = 0; i < this.props.card.links.length; i += colCount) {
      body.push(
        <LinkRow links={ this.props.card.links.slice(i, i+colCount) } />
      );
    }

    for (var i = 0; i < this.props.card.inputs.length; i++) {
      body.push(
        <Input input={ this.props.card.inputs[i] } />
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
