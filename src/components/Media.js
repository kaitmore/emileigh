import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { NavLinks, NavLink, Logo, Title, BioPhoto, EventLink, Text, Description } from './style'
import Tile from './Tile'
import VideoTile from './VideoTile'
import { fetchMedia } from '../actions/index';
import { connect } from 'react-redux';

class Media extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }


  componentWillMount() {
    this.props.fetchMedia();
  }

  handleMouseEnter = (e) => {
    this.setState({ hover: true })
  }

  handleMouseLeave = (e) => {
    this.setState({ hover: false })
  }

  renderVideo = (url, type) => {
    return (<VideoTile url={url} type={type} />)
  }

  renderImage = (url, i) => {
    return <Tile key = {i}url={url} />
  }

  render() {
    let { media } = this.props;
    return (<div style={{ margin: '1vw 8vw'}}>
      <Title secondary>Media</Title>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
        {media.length && media.map((img, i) => {
          let file = img.fields.file;
          return file.contentType.startsWith("video") ? this.renderVideo(file.url, file.contentType) :  this.renderImage(file.url, i)
        })
        }
      </div>
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    media: state.media.all
  };
}

export default withRouter(connect(mapStateToProps, { fetchMedia })(Media));


//file.contentType.startsWith("video") ? this.renderVideo(file.url, file.contentType) : 