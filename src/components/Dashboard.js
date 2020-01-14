import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUser } from '../redux/userReducer';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { user, error, redirect } = this.props;
    if (error || redirect) return <Redirect to="/login" />;
    console.log(this.props);
    return <div>Dashboard</div>;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getUser })(Dashboard);
