import { combineReducers } from 'redux'
import PostsReducer from './posts_reducer'
import EventsReducer from './events'
import MediaReducer from './media'

const rootReducer = combineReducers({
  posts: PostsReducer,
  events: EventsReducer,
  media: MediaReducer
});

export default rootReducer;