import { GET_POSTS, SAVE_POST } from './actionTypes';
import axios from 'axios';

const initialState = {
  posts: [],
  error: false
};

export function getPosts(userId) {
  return {
    type: GET_POSTS,
    payload: axios.get(`/api/posts/${userId}`).then(res => res.data)
  };
}

export function savePost(title, content) {
  return {
    type: SAVE_POST,
    payload: axios.post('/api/posts', { title, content }).then(res => res.data)
  };
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${GET_POSTS}_FULFILLED`:
      return { posts: payload, error: false };
    case `${GET_POSTS}_REJECTED`:
      return { ...state, error: payload };
    case `${SAVE_POST}_FULFILLED`:
      return { posts: payload, error: false };
    default:
      return state;
  }
}
