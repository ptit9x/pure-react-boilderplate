import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: true,
    };
  }

  render() {
    return (
      <div className="col-md-12" id="main">
        <div className="card">
          Userrrrrrrrrrrr
          { this.state.check ? 'chec' : '' }
        </div>
      </div>
    );
  }
}

export default User;
