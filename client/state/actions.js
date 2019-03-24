import { GET_NEXT_USER, GET_PREV_USER, SET_USER } from './types'

export const getNextUser = {
  type: GET_NEXT_USER
};

// action
export const getPrevUser = {
  type: GET_PREV_USER
};

// action creator
export const setUser = (userIndex) => {
  return {
    type: SET_USER,
    payload: userIndex
  }
};

// ================ Redux;

import { FILL_POSTS, FETCH_POSTS_ASYNC } from './types'

export const fillPosts = (posts) => {
  return {
    type: FILL_POSTS,
    payload: posts
  }
};

// export const fetchPostsAsync = async (dispatch, state) => {
  // dispatch({
  //   type: FETCH_POSTS_ASYNC,
  // });
  // console.log('state', state);

  // const responce = await api.posts.fetch();
  // const result = await responce.json();

  // dispatch(fillPosts(result.data));

  // return {
  //   type: FETCH_POSTS_ASYNC,
  // }
// };

// export const fetchPostsAsync = (dispatch, state) => {
//   return {
//     type: FETCH_POSTS_ASYNC,
//   }
// };

export const fetchPostsAsync = (sms) => (dispatch, state) => {
  console.log('hello', sms);

  // тут реализуют запросы к серверу с помошью async await
  dispatch({
    type: FETCH_POSTS_ASYNC,
    payload: 'some data'
  })
};