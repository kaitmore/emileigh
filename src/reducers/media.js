import { FETCH_MEDIA } from '../actions/index';

const INITIAL_STATE = { all: [] }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MEDIA:
      return { ...state, all: action.payload };
    default:
      return state;
  }
}