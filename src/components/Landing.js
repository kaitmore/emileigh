import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <video
          style={{
            objectFit: 'cover',
            width: '100%',
            position: 'absolute',
            top: '0',
            zIndex: '-1',
            height: '100%',
          }} loop muted autoPlay
        >
          <source src="http://kaitlinmoreno.com/testvid2.webm" />
        </video>
      </div>)
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps)(Landing);