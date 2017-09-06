import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style ={{position: 'absolute', zIndex: '-1', top: '0', height: '100vh', width: '100vw'}}>
        <img style = {{ height: 'inherit', width: 'inherit', objectFit: 'cover'}} src= "../assets/images/dress_horiz.jpg" />  
      </div>)
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps)(Landing);