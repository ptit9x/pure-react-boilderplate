import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, browserHistory, Route } from 'react-router-dom';
import './index.scss';
import App from './App';

// const baseUrl = process.env.PUBLIC_URL;
const Index = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('index'));
