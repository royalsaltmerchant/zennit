import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../main.css'

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

  }

  handleSubmit() {
    
  }

  handleChange() {

  }

  render() {
    return (
      <div>
        <div className="content-section">
          <form method="POST" onSubmit={() => this.handleSubmit()}>
            <fieldset className="form-group">
              <legend className="border-bottom mb-4">Join Today</legend>
              <div className="form-group">
                <label className="form-control-label">
                  Username
                  <input className="form-control form-control-lg is-invalid" 
                    type="text" value={this.state.value} 
                    onChange={() => this.handleChange()} />
                </label>
              </div>
              <div className="form-group">

              </div>
              <div className="form-group">

              </div>
              <div className="form-group">

              </div>
            </fieldset>
            <div className="form-group">
              <input type="submit" value="Sign Up" className="btn btn-outline-info" />
            </div>
          </form>
        </div>
        <div className="border-top pt-3">
          <small className="text-muted">
            Already Have An Account? <Link className="ml-2" to="/login">Sign In</Link>
          </small>
        </div>
      </div>
    )
  }
}
