import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/userReducer';

const Header = ({ user, logout }) => {
  // console.log('value of user', user);
  return (
    <div className="header">
      {user.loggedIn ? (
        <button onClick={logout} className="btn warning-btn">
          Logout
        </button>
      ) : (
        <span>
          <Link to="/login" className="btn normal-btn">
            Login
          </Link>
          <Link to="/signup" className="btn normal-btn">
            Signup
          </Link>
        </span>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return state.user;
};

export default connect(mapStateToProps, { logout })(Header);
