import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import css from './index.css';

class Hello extends Component {
  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
