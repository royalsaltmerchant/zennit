import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/usersActions'
import Media from 'react-bootstrap/Media'
import '../main.css'

class Account extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    const {user} = this.props
    return (
      <div>
        <div className="content-section">
          <Media>
            <img
              width={64}
              height={64}
              className="rounded-circle account-img"
              src=""
              alt="Current User Profile Avatar"
            />
            <Media.Body>
              <h2 className="account-heading">{user.username}</h2>
              <p className="text-secondary">{user.email}</p>
            </Media.Body>

          </Media>
        </div>
      </div>
    )
  }
}

Account.propTypes = {
  fetchUser: Proptypes.func.isRequired,
}

const mapStateToProps = state => ({
  user: state.users.item
})

export default connect(mapStateToProps, { fetchUser })(Account)
