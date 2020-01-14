import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/userReducer';
import { Redirect } from 'react-router-dom';

class Login extends Component {
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

  loginUser = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
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
          <button onClick={this.loginUser} className="btn normal-btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.user;

export default connect(mapStateToProps, { login })(Login);
