import React, { Component } from 'react';
import './App.css';

class Link extends Component {
  render() {
    return(
      <div class="col">
        <a class="btn btn-outline-secondary btn-block link-btn" href={ this.props.link.url }>
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

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleClick = () => {
    window.location.href = this.props.input.url + this.state.input;
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

    for (var j = 0; j < this.props.card.inputs.length; j++) {
      body.push(
        <Input input={ this.props.card.inputs[j] } />
      );
    }

    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            { this.props.card.name }
          </h5>
          { body }
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    var cards = [];

    this.props.data.forEach(function(card) {
      cards.push(
        <Card card={card} />
      );
    });

    return (
      <div class="container">
        <div class="card-columns">
          { cards }
        </div>
      </div>
    );
  }
}

export default App;
