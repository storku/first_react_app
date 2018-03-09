import _ from 'lodash';
import { SUBMIT_ARTICLE } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case SUBMIT_ARTICLE:
      //const post = action.payload;
      //const newState = { ...state };
      //newState[post.id] = post.content;
      //return newState;
      const key = Object.keys(action.payload);
      const value = action.payload[key];
      return { ...state, [key]: value };
    default:
      return state;
  }
}
