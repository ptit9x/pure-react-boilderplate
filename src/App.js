import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      base64: '',
      error: '',
      result: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.state) {
      this.setState({ error: 'Input is empty' });
    }
    if (!this.state.error) {
      const { base64 } = this.state;
      const buff = Buffer.from(base64, 'base64');
      const result = `data:application/pdf;base64,${buff.toString('base64')}`;

      this.setState({ result });
    }
  }

  render() {
    return (
      <div>
        {
          !this.state.result ?
            <div className="container">
              <div className="col-md-10 col-md-offset-1">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <h4>Generate Document from base 64 to PDF</h4>
                    <textarea
                      className="form-control"
                      rows="18"
                      name="base64"
                      placeholder="Input base64 here"
                      value={this.state.base64}
                      onChange={this.handleChange}
                    />
                    { this.state.error ? <div className="has-error">Checkbox with error</div> : ''}
                  </div>
                  <button type="submit" className="btn btn-default">
                    Submit
                  </button>
                </form>
              </div>
            </div> :
/* eslint-disable */
						<object data={this.state.result} type="application/pdf"  width="100%" height="100%" />
/* eslint-disable */
        }
      </div>
    );
  }
}

export default App;
