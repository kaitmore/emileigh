import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { NavLinks, NavLink, Logo, Title, BioPhoto, Text } from './style'
import { fetchPosts } from '../actions/index';
import { connect } from 'react-redux';

class About extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  formatText = (text) => {
    return text.split("//").map((chunk, i) => {
      return <p key={i} style={{ fontSize: '18px', lineHeight: '25px' }}>{chunk}</p>
    })
  }

  render() {
    let { about } = this.props;
    return (
      <div style={{ display: 'flex' }} >
        <div>
          <BioPhoto src={about.length ? about[0].fields.image.url : ''} />
          <BioPhoto landscape src="../assets/images/dress_horiz.jpg" />
        </div>
        <Text>
          <Title secondary>About</Title>
          {about.length ? this.formatText(about[0].fields.content) : ''}
        </Text>
      </div>)
  }
}

function mapStateToProps(state) {
  return {
    about: state.posts.all
  };
}

export default withRouter(connect(mapStateToProps, { fetchPosts })(About));