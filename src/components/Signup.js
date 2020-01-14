import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../redux/userReducer';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  signupUser = e => {
    e.preventDefault();
    this.props.signup(this.state.username, this.state.password);
  };

  render() {
    const { username, password } = this.state;
    const { user } = this.props;
    if (user.loggedIn) return <Redirect to="/" />;
    return (
      <div className="display-container">
        <div className="box-medium">
          <div className="input-row">
            Username:{' '}
            <input
              type="text"
              value={username}
              name="username"
              onChange={this.handleChange}
              className="input"
            />
          </div>
          <div className="input-row">
            Password:{' '}
            <input
              type="password"
              value={password}
              name="password"
              onChange={this.handleChange}
              className="input"
            />
          </div>
          <button onClick={this.signupUser} className="btn normal-btn">
            Signup
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.user;
};

export default connect(mapStateToProps, { signup })(Signup);
