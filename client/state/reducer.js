// Users
const user1 = { id: 1, name: 'Test User1', age: 6661 };
const user2 = { id: 2, name: 'Test User2', age: 6662 };
const user3 = { id: 3, name: 'Test User3', age: 6663 };
const user4 = { id: 4, name: 'Test User4', age: 6664 };

// Types
import {
  GET_NEXT_USER,
  GET_PREV_USER,
  SET_USER,
} from './types';

const initialState = {
  users: [user1, user2, user3, user4],
  selectUserIndex: 0,
};

export const userReducer = (newState, action) => {
  const state = newState || initialState;

  switch (action.type) {
    case GET_NEXT_USER:
      return state.selectUserIndex === state.users.length - 1
        ? state
        : Object.assign({ selectUserIndex: ++state.selectUserIndex }, state);

    case GET_PREV_USER:
      return !state.selectUserIndex
        ? state
        : Object.assign({ selectUserIndex: --state.selectUserIndex }, state);

    case SET_USER:
      return Object.assign(state, { selectUserIndex: action.payload });

    default: return state;
  }
};

// =============== Redux
import { fromJS, List } from 'immutable';
import {
  FILL_POSTS,
  FETCH_POSTS_ASYNC,
} from './types';

const initialPostsState = List([1,2,3]);
const list2 = initialPostsState.push(4);

export const postsReducer = (postState, action) => {
  const state = postState || initialPostsState;

  switch (action.type) {
    case FILL_POSTS:
      return fromJS(action.payload);

    case FETCH_POSTS_ASYNC:
      return {};

    default: return state;
  }
};