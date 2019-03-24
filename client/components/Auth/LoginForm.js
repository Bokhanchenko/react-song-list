import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';
import mutation from '../../mutations/Login';
import query from '../../queries/CurrentUser';
import { hashHistory } from "react-router";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      // TODO check it
      hashHistory.push('/songs');
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    })
      .catch(res => {
        const errors = res.graphQLErrors.map(err => err.message);
        this.setState({ errors })
      })
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)}/>
      </div>
    )
  }
}

export default graphql(query) (
  graphql(mutation)(LoginForm)
)