import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}>
        <video
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }} autoPlay loop muted
          src="http://kaitlinmoreno.com/testvid2.webm"
        />
      </div>)
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps)(Landing);