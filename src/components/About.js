import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { NavLinks, NavLink, Logo, Title, BioPhoto, BioText } from './style'
import { fetchPosts } from '../actions/index';
import { connect } from 'react-redux';

class About extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    let { aboutImg, aboutText } = this.props;
    return (<div style={{ display: 'flex', height: '85vh' }} >
      <BioPhoto src={aboutImg.length ? aboutImg[0].fields.image.url : ''} />
      <BioText>{aboutImg.length ? aboutText[0].fields.content : ''}</BioText>
    </div>)
  }
}
function mapStateToProps(state) {
  return {
    aboutImg: state.posts.all,
    aboutText: state.posts.all
  };
}

export default withRouter(connect(mapStateToProps, { fetchPosts })(About));