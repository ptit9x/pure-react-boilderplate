import React, { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boughtPhone: false,
    };
  }

  render() {
    return (
      <div className="col-md-12" id="main">
        <div className="card">
          Home Page
          { this.state.boughtPhone ? '' : '' }
        </div>
      </div>
    );
  }
}

export default HomePage;
