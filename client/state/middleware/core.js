import { applyMiddleware, compose } from 'redux';

// Middleware
import { createLogger } from 'redux-logger';

// import thunk from 'redux-thunk';
import { customThunk } from "./custom";

// Виводит в консьль все запущеные екшены стора
const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005',
  },
});

// Загрузка сохраненных данных
const preloadState = JSON.parse(localStorage.getItem('usersState'));

// Если в хроме установлен Redux devtools подключаем его.
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;
// const middleware = [thunk, customThunk, logger];
const middleware = [customThunk, logger];

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhancedStore, preloadState }