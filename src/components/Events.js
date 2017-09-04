import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { NavLinks, NavLink, Logo, Title, BioPhoto, EventLink, Text, Description, Date } from './style'
import { fetchEvents } from '../actions/index';
import { connect } from 'react-redux';

class Events extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  render() {
    let { events } = this.props;
    return (
      <div style={{ display: 'flex' }} >
        <Text right>
          <Title secondary>Upcoming Events</Title>
          <div style={{ margin: '1vw' }}>
            {events.length ? events.map(event => {
              return (
                <div style={{ padding: '10px' }}>
                  <Title secondary><EventLink href={event.fields.url} target="_blank">
                    {event.fields.title}</EventLink>
                  </Title>
                  <Date>{event.fields.date}</Date>
                  <Description>{event.fields.description}</Description>
                </div>
              )
            }) : ''}
          </div>
        </Text>
        <BioPhoto right src='../assets/images/dress_horiz.jpg' />
      </div>)
  }
}

function mapStateToProps(state) {
  return {
    events: state.events.all
  };
}

export default withRouter(connect(mapStateToProps, { fetchEvents })(Events));