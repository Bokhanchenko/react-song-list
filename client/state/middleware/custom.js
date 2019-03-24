export function customThunk(store) {
  // store - можно дергать метод dispatch(), getState

  return function (next) {
    // next - функция дле с обьектом action чтоб передать событие дальше по цепочке

    return function (action) {
      // доступ к запущеному обьекту action
      // console.log('=> custom middleware', 'action', action, 'store', store.getState());

      if (typeof action === 'function') {
        // если екшен - функция, запускаем мидлвар (файл actions => FETCH_POSTS_ASYNC)
        return action(store.dispatch, store.getState)
      }

      // если обьект => передаем дальше по цепочке мидлваров.
      return next(action)
    }
  }
}