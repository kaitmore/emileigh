import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { withRouter } from 'react-router'

class Main extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <NavBar posts={this.props.posts} />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default withRouter(connect(mapStateToProps, { fetchPosts })(Main));