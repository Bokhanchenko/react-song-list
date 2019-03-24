import React, { Component } from 'react';
import UsersList from './UsersList';
import Spinner from './Spinner';

// Библиотека для иммутабельности
import { Map } from 'immutable';

// Библиотека для валидации
import { object, string, boolean } from 'yup';

class ReduxTest extends Component {
  render() {
    return (
      <div>
        Redux :)
        <UsersList />
        <Spinner />
      </div>
    )
  }
}

export default ReduxTest;