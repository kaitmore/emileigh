import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { NavLinks, NavLink, Logo, Title, BioPhoto, EventLink, Text, Description, Date } from './style'
import { fetchMedia } from '../actions/index';
import { connect } from 'react-redux';

class Media extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchMedia();
  }

  render() {
    let { media } = this.props;
    console.log(media)
    return (
      <div style={{ display: 'flex' }} >
        <Text>
          <Title secondary>Media</Title>
        </Text>
      </div>)
  }
}

function mapStateToProps(state) {
  return {
    media: state.media.all
  };
}

export default withRouter(connect(mapStateToProps, { fetchMedia })(Media));