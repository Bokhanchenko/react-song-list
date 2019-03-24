import { createStore } from 'redux';

// Reducer
import { rootReducer } from './rootReducer'
import { enhancedStore, preloadState } from './middleware/core'

export const store = preloadState
  ? createStore(rootReducer, preloadState, enhancedStore)
  : createStore(rootReducer, enhancedStore);

// Вызываеться при каждом вызове екшена
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('usersState', JSON.stringify(state))
});