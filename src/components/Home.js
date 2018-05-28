import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      base64: '',
      error: '',
      result: '',
    };
  }

  render() {
    return (
      <div className="container">
        <br />
        {
          this.state.result ?
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <form>
                  <div className="form-group">
                    <textarea className="form-control" rows="12" placeholder="Input base64 here">
                      {this.state.base64}
                    </textarea>
                    { this.state.error ? <div className="has-error">Checkbox with error</div> : ''}
                  </div>
                  <button type="submit" className="btn btn-default">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            : ''
        }
      </div>
    );
  }
}

export default Home;
