import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_MEDIA = 'FETCH_MEDIA';
export const FETCH_EVENTS = 'FETCH_EVENTS';
const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'k52xh8ews6ei';
const API_KEY = 'f3303375c57e1b58653a5156b01450fb7e99ea9d6dc56988843300dcd2dcc18e';

// action creator
const getPosts = (posts) => ({
  type: FETCH_POSTS,
  payload: posts
})
const getEvents = (events) => ({
  type: FETCH_EVENTS,
  payload: events
})
const getMedia = (media) => ({
  type: FETCH_MEDIA,
  payload: media
})

export const fetchPosts = () => dispatch => {
  axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=page`)
    .then((page) => {
      return axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${page.data.items[0].fields.image.sys.id}?access_token=${API_KEY}`)
        .then((image) => {
          page.data.items[0].fields.image = image.data.fields.file;
          return dispatch(getPosts(page.data.items))
        }
        )
    })
}

export const fetchEvents = () => dispatch => {
  axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=events`)
    .then((events) => {
      return dispatch(getEvents(events.data.items))
    })
}

export const fetchMedia = () => dispatch => {
  axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=media`)
    .then((media) => {
      console.log(media);
      return dispatch(getMedia(media.data.items))
    })
}

