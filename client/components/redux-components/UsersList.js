import React, { Component } from 'react';
import { store } from "../../state/store";
import { getNextUser, getPrevUser, setUser, fetchPostsAsync } from "../../state/actions";
import cx from 'classnames'

class UsersList extends Component {
  render() {
    const { userReducer } = store.getState();
    const _showNextUser = () => {
      store.dispatch(getNextUser);
      this.forceUpdate();
    };
    const _showPrevUser = () => {
      store.dispatch(getPrevUser);
      this.forceUpdate();
    };
    const _setUser = (index) => {
      store.dispatch(setUser(index));

      // middleware in actions file
      store.dispatch(fetchPostsAsync('jwdhfkjvw'));
      this.forceUpdate();
    };

    const activeUser = userReducer.users.find((_, index) => index === userReducer.selectUserIndex);

    const renderUsers = (id) => {
      const activeClass = (userId) => {
        return cx({'active-user': id === userId, 'user-item': true});
      };

      return userReducer.users.map((user, index) => (
        <div
          className={activeClass(user.id)}
          key={user.id}
          onClick={() => _setUser(index)}
        >
          <span>{user.id} </span>
          <span>{user.name} </span>
          <span>{user.age} </span>
        </div>
      ))
    };

    return (
      <div>
        <div>
          <button onClick={_showPrevUser}>Prev</button>
          <button onClick={_showNextUser}>Next</button>
        </div>
        <div>Active user: { activeUser.name }</div>
        <div>
          {renderUsers(activeUser.id)}
        </div>
      </div>
    )
  }
}

export default UsersList;