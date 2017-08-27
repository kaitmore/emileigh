import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'k52xh8ews6ei';
const API_KEY = 'f3303375c57e1b58653a5156b01450fb7e99ea9d6dc56988843300dcd2dcc18e';

export function fetchPosts() {
  let request =
    axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=page`)
      .then((page) => {
        return axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${page.data.items[0].fields.image.sys.id}?access_token=${API_KEY}`)
          .then((image) => {
            page.data.items[0].fields.image = image.data.fields.file;
            return page
          }
          )
      })
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
