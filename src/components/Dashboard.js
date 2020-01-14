import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return <div>Dashboard</div>;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Dashboard);
